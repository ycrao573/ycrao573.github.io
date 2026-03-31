import React, { Suspense, useEffect, useMemo, useRef, useState } from 'react';
import { MapPin, Plane } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { useI18n } from '@/locale';
import { api, type VisitedEntry } from '@/services/api';
import { motion } from 'motion/react';
import {
  buildContinentByCode,
  buildVisitedSet,
  countVisitedContinents,
  fetchWorldPolygons,
  markersToPoints,
  type CountryFeature,
  type GlobePoint,
} from './utils';

interface GlobeCanvasProps {
  countryPolygons: CountryFeature[];
  visitedSet: Set<string>;
  points: GlobePoint[];
}

const LazyGlobeCanvas = React.lazy(async () => {
  const module = await import('./globe-canvas');
  return { default: module.default as React.ComponentType<GlobeCanvasProps> };
});

const getIsSmallScreen = () =>
  typeof globalThis !== 'undefined' && 'matchMedia' in globalThis
    ? globalThis.matchMedia('(max-width: 900px)').matches
    : false;

const StatsCards: React.FC<{
  countriesVisited: number;
  continentsVisited: number;
}> = ({ countriesVisited, continentsVisited }) => (
  <div className="mt-4 grid w-full grid-cols-1 gap-4 md:grid-cols-2">
    <div className="rounded-3xl border border-border/70 bg-card/30 px-6 py-8 text-center">
      <MapPin className="mx-auto mb-3 h-8 w-8 text-white" />
      <div className="text-5xl font-bold text-white">{countriesVisited}+</div>
      <div className="text-muted-foreground text-xl">Countries Visited</div>
    </div>
    <div className="rounded-3xl border border-border/70 bg-card/30 px-6 py-8 text-center">
      <Plane className="mx-auto mb-3 h-8 w-8 text-white" />
      <div className="text-5xl font-bold text-white">{continentsVisited}</div>
      <div className="text-muted-foreground text-xl">Continents</div>
    </div>
  </div>
);

const LoadingState: React.FC<{ title: string }> = ({ title }) => (
  <div
    className="flex scroll-mt-20 flex-col items-center px-[clamp(16px,4vw,32px)] py-[clamp(56px,8vw,128px)] text-center"
    id="map"
  >
    <h3 className="mb-[clamp(20px,4vw,48px)] text-2xl font-semibold">{title}</h3>
    <div>Loading...</div>
  </div>
);

const GlobeLoadingFallback: React.FC = () => (
  <div className="relative h-[520px] w-full overflow-hidden rounded-2xl border border-border/60 bg-card/30">
    <div className="globe-loading-overlay">
      <div className="globe-loading-ring" />
      <div className="globe-loading-ring globe-loading-ring-delay" />
      <div className="globe-loading-text mt-6">Loading globe...</div>
    </div>
  </div>
);

const Map: React.FC = () => {
  const { t } = useI18n();
  const [visited, setVisited] = useState<VisitedEntry[]>([]);
  const [countryPolygons, setCountryPolygons] = useState<CountryFeature[]>([]);
  const [continentByCode, setContinentByCode] = useState<Record<string, string>>({});
  const [loading, setLoading] = useState(true);
  const [globeDataLoading, setGlobeDataLoading] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(getIsSmallScreen);
  const [shouldLoadGlobe, setShouldLoadGlobe] = useState(false);
  const globeViewportRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const mediaQuery = globalThis.matchMedia('(max-width: 900px)');
    const handleChange = (event: MediaQueryListEvent) => {
      setIsSmallScreen(event.matches);
    };
    setIsSmallScreen(mediaQuery.matches);
    mediaQuery.addEventListener('change', handleChange);
    return () => {
      mediaQuery.removeEventListener('change', handleChange);
    };
  }, []);

  useEffect(() => {
    if (loading || isSmallScreen || shouldLoadGlobe) {
      return;
    }
    const currentRef = globeViewportRef.current;
    if (!currentRef) {
      setShouldLoadGlobe(true);
      return;
    }
    if (!('IntersectionObserver' in globalThis)) {
      setShouldLoadGlobe(true);
      return;
    }
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setShouldLoadGlobe(true);
        }
      },
      { threshold: 0.1 },
    );
    observer.observe(currentRef);
    return () => {
      observer.disconnect();
    };
  }, [loading, isSmallScreen, shouldLoadGlobe]);

  useEffect(() => {
    // eslint-disable-next-line max-statements
    const fetchData = async () => {
      try {
        const [visitedData, polygons] = await Promise.all([api.getVisited(), fetchWorldPolygons()]);
        setVisited(visitedData);
        setLoading(false);
        setGlobeDataLoading(false);
        setContinentByCode(buildContinentByCode(polygons));
        setCountryPolygons(isSmallScreen ? [] : polygons);
      } catch (error) {
        console.error('Failed to fetch travel data:', error);
        setLoading(false);
        setGlobeDataLoading(false);
      }
    };
    setGlobeDataLoading(true);
    void fetchData();
  }, [isSmallScreen]);

  const visitedSet = useMemo(() => buildVisitedSet(visited), [visited]);

  const points = useMemo(() => markersToPoints(visited), [visited]);

  const continentsVisited = useMemo(
    () => countVisitedContinents(visitedSet, continentByCode),
    [visitedSet, continentByCode],
  );
  const countriesVisitedCount = visitedSet.size - 3;
  const canRenderGlobe = shouldLoadGlobe && !globeDataLoading && countryPolygons.length > 0;

  if (loading) {
    return <LoadingState title={t('map.title')} />;
  }

  return (
    <div
      className="flex scroll-mt-20 flex-col items-center px-[clamp(16px,4vw,32px)] py-[clamp(56px,8vw,128px)] text-center"
      id="map"
    >
      <motion.h3
        className="mb-[clamp(20px,4vw,48px)] text-2xl font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t('map.title')}
      </motion.h3>
      <motion.div
        className="w-full max-w-[980px]"
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.6 }}
        viewport={{ once: true }}
      >
        <motion.p className="text-muted-foreground">
          <TypeAnimation
            key={t('map.title')}
            sequence={[
              t('map.marquee.1'),
              3000,
              t('map.marquee.2'),
              1500,
              t('map.marquee.3'),
              2000,
            ]}
            speed={40}
            repeat={Infinity}
          />
        </motion.p>
        {isSmallScreen ? (
          <StatsCards
            continentsVisited={continentsVisited}
            countriesVisited={countriesVisitedCount}
          />
        ) : (
          <>
            <div className="mt-4" ref={globeViewportRef}>
              {!canRenderGlobe ? (
                <GlobeLoadingFallback />
              ) : (
                <Suspense fallback={<GlobeLoadingFallback />}>
                  <LazyGlobeCanvas
                    countryPolygons={countryPolygons}
                    points={points}
                    visitedSet={visitedSet}
                  />
                </Suspense>
              )}
            </div>
          </>
        )}
      </motion.div>
    </div>
  );
};

export default Map;
