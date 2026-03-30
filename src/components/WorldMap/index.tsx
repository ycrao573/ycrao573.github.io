import React, { useState, useEffect, useRef } from 'react';
import ReactCountryFlag from 'react-country-flag';
import { TypeAnimation } from 'react-type-animation';
import { useI18n } from '@/locale';
import { api, TravelMarker } from '@/services/api';
import { motion } from 'motion/react';

const Map: React.FC = () => {
  const { t } = useI18n();
  const [visitedPlaces, setVisitedPlaces] = useState<string[]>([]);
  const travelMapDataRef = useRef<{
    countries: string[];
    markers: TravelMarker[];
  }>({ countries: [], markers: [] });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [places, countries, markers] = await Promise.all([
          api.getTravelPlaces(),
          api.getTravelCountries(),
          api.getTravelMarkers(),
        ]);
        setVisitedPlaces(places);
        travelMapDataRef.current = { countries, markers };
      } catch (error) {
        console.error('Failed to fetch travel data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div
        className="flex scroll-mt-20 flex-col items-center px-[clamp(16px,4vw,32px)] py-[clamp(56px,8vw,128px)] text-center"
        id="map"
      >
        <h3 className="mb-[clamp(20px,4vw,48px)] text-2xl font-semibold">{t('map.title')}</h3>
        <div>Loading...</div>
      </div>
    );
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
        transition={{ duration: 0.6, delay: 0.1 }}
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
        <div className="mt-2 grid grid-cols-6 gap-1 sm:grid-cols-8 md:grid-cols-10 lg:grid-cols-12">
          {visitedPlaces.map((place, index) => (
            <motion.div
              key={place}
              className="m-[6px] flex h-[30px] items-center justify-center"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.25,
                delay: Math.min(index * 0.02, 0.4),
              }}
              viewport={{ once: true }}
            >
              <ReactCountryFlag
                countryCode={place}
                svg
                style={{
                  width: '2em',
                  height: '2em',
                }}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Map;
