import {
  faBriefcase,
  faSchool,
  faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, Typography } from 'antd';
import { ReactNode } from 'react';

const { Title, Paragraph, Text } = Typography;

interface EllipsisTextProps {
  children: ReactNode;
}

export const timelineItems = [
  {
    dot: <FontAwesomeIcon icon={faSchool} size="lg" />,
    children: (
      <>
        <Title level={5}>
          Korea University, Seoul (International Summer Campus)
        </Title>
        <Paragraph>Jun 2019 - Aug 2019</Paragraph>
      </>
    ),
    color: 'red',
  },
  {
    dot: <FontAwesomeIcon icon={faSchool} size="lg" />,
    children: (
      <>
        <Title level={5}>
          University of Strathclyde, Glasgow (Overseas Exchange)
        </Title>
        <Paragraph>Jan 2020 - May 2020</Paragraph>
      </>
    ),
    color: '#005eb8',
  },
  {
    dot: <FontAwesomeIcon icon={faBriefcase} size="lg" />,
    children: (
      <>
        <Title level={5}>Autodesk Asia Pte Ltd</Title>
        <Paragraph>
          <Text strong>
            Software Engineer Intern (Identity Access Management)
          </Text>
        </Paragraph>
        <Paragraph>
          <ul>
            <li>
              Collaborated on developing and optimizing identity processes for
              Autodesk's web products.
            </li>
            <li>
              Migrated admin SSO app (.NET) with AWS secret manager to enhance
              codebase security
            </li>
            <li>
              Automated and optimized frontend CI/CD process for an account
              management website (React), streamlining UI visualization in
              staging through Jenkins and Docker.
            </li>
          </ul>
        </Paragraph>
        <Paragraph>Jan 2021 - Dec 2021</Paragraph>
        <Badge color="green" count="ASP.NET"></Badge>
        <Badge color="green" count="C#"></Badge>
        <Badge color="green" count="React"></Badge>
        <Badge color="green" count="Jenkins"></Badge>
        <Badge color="green" count="Docker"></Badge>
        <Badge color="green" count="LookerML"></Badge>
      </>
    ),
    color: 'green',
  },
  {
    dot: <FontAwesomeIcon icon={faUserGraduate} size="lg" />,
    children: (
      <>
        <Title level={5}>Nanyang Technological University, Singapore</Title>
        <Paragraph>
          <Text strong>Bachelor of Information Engineering & Media</Text>
          <br />
          <Text>Honours (Highest Distinction) CGPA: 4.66 / 5.00</Text>
        </Paragraph>
        <Paragraph></Paragraph>
        <Paragraph>Aug 2018 - May 2022</Paragraph>
        <Badge color="#faad14e6" count="NTU S&E Scholarship"></Badge>
        <Badge color="#faad14e6" count="MOE SM2 Scholarship"></Badge>
      </>
    ),
  },
  {
    dot: <FontAwesomeIcon icon={faBriefcase} size="lg" />,
    children: (
      <>
        <Title level={5}>Lazada South East Asia Pte Ltd</Title>
        <Paragraph>
          <Text strong>Frontend Engineer (RedMart)</Text>
        </Paragraph>
        <Paragraph>
          <ul>
            <li>
              Continuously contributed to the development of cross-platform
              front-end features (React) for Lazada's online groceries business
              - RedMart; successfully delivered multiple major projects such as{' '}
              <b>RedMart+ Membership, B2B (Corporate Pantry), and Group Buy </b>
              .
            </li>
            <li>
              Designed and implemented a multi-functional popup component with
              cross-platform support, featured with alert fatigue settings and
              user targeting; widely used across RedMart for promotion
              campaigns, feature announcements and voucher distribution.
            </li>
            <li>
              Integrated a front-end monitoring system for RedMart web pages
              using iTrace platform, enabling comprehensive performance metrics
              analysis, custom error reporting, real-time analysis, and
              automated alerts for more efficient issue detection and
              resolution.
            </li>
            <li>
              Collaborated in constructing an internal business data platform
              using a low-code approach, facilitating A/B experiments and user
              behavior analysis, and providing customizable dashboards for
              departmental operations.
            </li>
          </ul>
        </Paragraph>
        <Paragraph>Jul 2022 - current</Paragraph>
        <Badge color="#ee4054" count="React"></Badge>
        <Badge color="#ee4054" count="TS/JS"></Badge>
        <Badge color="#ee4054" count="Rax"></Badge>
        <Badge color="#ee4054" count="CSS/SCSS"></Badge>
        <Badge color="#ee4054" count="GCP"></Badge>
        <Badge color="#ee4054" count="iTrace"></Badge>
      </>
    ),
    color: '#ee4054',
  },
];
