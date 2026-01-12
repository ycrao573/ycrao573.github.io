import React, { useState, useEffect } from 'react';
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';
import ReactCountryFlag from 'react-country-flag';
import { Typography, Row, Col, theme } from 'antd';
import './styles.scss';
import { TypeAnimation } from 'react-type-animation';
import { useI18n } from '@/locale';
import { api, TravelMarker } from '@/services/api';

const { Title, Paragraph } = Typography;

const Map: React.FC = () => {
  const { useToken } = theme;
  const { token } = useToken();
  const { t } = useI18n();
  const [visitedPlaces, setVisitedPlaces] = useState<string[]>([]);
  const [visitedCountries, setVisitedCountries] = useState<string[]>([]);
  const [extraMarkers, setExtraMarkers] = useState<TravelMarker[]>([]);
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
        setVisitedCountries(countries);
        setExtraMarkers(markers);
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
      <div className="map-container" id="map">
        <Title level={3}>{t('map.title')}</Title>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="map-container" id="map">
      <Title level={3}>{t('map.title')}</Title>
      <div className="map">
        <VectorMap
          key={token.colorBgContainer}
          map={worldMill}
          backgroundColor={token.colorInfoBg}
          zoomOnScroll
          zoomAnimate
          zoomMax={7}
          zoomMin={1}
          focusOn={{ scale: 2, x: 0, y: 0, lat: 1.35, lng: 103.82 }}
          style={{ width: '100%', height: '55vh' }}
          regionStyle={{
            initial: {
              fill: token.colorInfoBgHover,
              stroke: 'none',
            },
            hover: {
              fill: token.colorInfoHover,
              cursor: 'pointer',
            },
            selected: {
              fill: '#09B1EC',
            },
            selectedHover: { fill: '#65C2F5' },
          }}
          selectedRegions={visitedCountries}
          markers={extraMarkers}
          markerStyle={{
            initial: {
              fill: '#09B1EC',
              stroke: '#383f47',
            },
            hover: {
              fill: '#65C2F5',
              cursor: 'pointer',
            },
          }}
        />
      </div>
      <div className="flag-container">
        <Paragraph>
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
        </Paragraph>
        <Row gutter={4}>
          {visitedPlaces.map((place) => (
            <Col key={place} xs={4} sm={3} md={2} lg={1}>
              <div className="flag">
                <ReactCountryFlag
                  countryCode={place}
                  svg
                  style={{
                    width: '2em',
                    height: '2em',
                  }}
                />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
};

export default Map;
