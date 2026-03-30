import React, { useState, useEffect, useRef } from "react";
import ReactCountryFlag from "react-country-flag";
import { Typography, Row, Col } from "antd";
import "./styles.scss";
import { TypeAnimation } from "react-type-animation";
import { useI18n } from "@/locale";
import { api, TravelMarker } from "@/services/api";

const { Title, Paragraph } = Typography;

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
        console.error("Failed to fetch travel data:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return (
      <div className="map-container" id="map">
        <Title level={3}>{t("map.title")}</Title>
        <div>Loading...</div>
      </div>
    );
  }

  return (
    <div className="map-container" id="map">
      <Title level={3}>{t("map.title")}</Title>
      <div className="flag-container">
        <Paragraph>
          <TypeAnimation
            key={t("map.title")}
            sequence={[
              t("map.marquee.1"),
              3000,
              t("map.marquee.2"),
              1500,
              t("map.marquee.3"),
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
                    width: "2em",
                    height: "2em",
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
