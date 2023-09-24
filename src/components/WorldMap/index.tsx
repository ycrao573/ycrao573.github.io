import React from 'react';
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';
import ReactCountryFlag from 'react-country-flag';
import { Typography, Row, Col, theme } from 'antd';
import {
  extraMarkers,
  visitedCountries,
  visitedPlaces,
} from '../../assets/travel_data';
import './styles.scss';

const { Title, Paragraph } = Typography;

const Map: React.FC = () => {
  const { useToken } = theme;
  const { token } = useToken();

  return (
    <div className="map-container">
      <Title level={3}>My Travel Map</Title>
      <div className="map">
        <VectorMap
          key={token.colorBgContainer}
          map={worldMill}
          backgroundColor={token.colorInfoBg}
          zoomOnScroll
          zoomAnimate
          zoomMax={6}
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
              fill: '#ffbf00',
            },
            selectedHover: { fill: '#ffcf40' },
          }}
          selectedRegions={visitedCountries}
          markers={extraMarkers}
          markerStyle={{
            initial: {
              fill: '#ffcf40',
              stroke: '#383f47',
            },
            hover: {
              fill: '#bf9b30',
              cursor: 'pointer',
            },
          }}
        />
      </div>
      <div className="flag-container">
        <Paragraph>
          Here are the places I have visited. I'm excited to explore more!
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
