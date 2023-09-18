import React, { useEffect, useState } from 'react';
import { VectorMap } from '@react-jvectormap/core';
import { worldMill } from '@react-jvectormap/world';
import ReactCountryFlag from 'react-country-flag';
import { Typography, Row, Col, theme } from 'antd';
import './styles.scss';

const { Title, Paragraph } = Typography;

const visitedPlaces = [
  'CN',
  'SG',
  'KR',
  'JP',
  'HK',
  'MY',
  'GB',
  'FR',
  'DE',
  'ID',
  'MO',
  'NL',
  'TH',
  'IT',
  'VA',
  'IS',
  'AT',
  'PT',
  'CH',
  'AU',
  'AE',
  'QA',
];

const visitedCountries = [
  'CN',
  'KR',
  'JP',
  'MY',
  'GB',
  'FR',
  'DE',
  'ID',
  'NL',
  'TH',
  'IT',
  'IS',
  'AT',
  'PT',
  'CH',
  'AU',
  'AE',
  'QA',
];

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
          markers={[
            {
              latLng: [41.9, 12.45],
              name: 'Vatican City',
            },
            {
              latLng: [1.3, 103.8],
              name: 'Singapore',
            },
            {
              latLng: [22.2, 113.54],
              name: 'Macau',
            },
            {
              latLng: [22.32, 114.17],
              name: 'Hong Kong',
            },
          ]}
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
          {visitedPlaces.map((country) => (
            <Col key={country} xs={4} sm={3} md={2} lg={1}>
              <div className="flag">
                <ReactCountryFlag
                  countryCode={country}
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
