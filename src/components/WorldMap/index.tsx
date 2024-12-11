import React from 'react';
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';
import ReactCountryFlag from 'react-country-flag';
import { Typography, Row, Col, theme, Carousel } from 'antd';
import {
  extraMarkers,
  visitedCountries,
  visitedPlaces,
} from '../../assets/travel_data';
import './styles.scss';
import { TypeAnimation } from 'react-type-animation';

const { Title, Paragraph } = Typography;

const Map: React.FC = () => {
  const { useToken } = theme;
  const { token } = useToken();

  return (
    <div className="map-container" id="map">
      <Title level={3}>My Travel Map</Title>
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
            sequence={[
              "Here are the places I have visited and I'm excited to explore more!",
              3000,
              'Life is short, and the world is wide.',
              1500,
              "Once a year, go someplace you've never been before.",
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
