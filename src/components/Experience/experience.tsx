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
              Migrated admin SSO application (.NET) with AWS secret manager and
              enhanced codebase security
            </li>
            <li>
              Automated and optimized frontend CI/CD process for an account
              management website (React), streamlining UI testing in staging
              through Jenkins and Docker.
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
              Supported daily operations of RedMart/LazMallOne’s Buyer Service
              across diverse markets (SG, ID, and PH) with strategic excellence.
            </li>
            <li>
              Managed or participated in key business projects, such as RedMart
              B2B, Add-on Deals, consistently delivering precise execution and
              timely delivery.
            </li>
            <li>
              Contributed to Frontend monitoring with integration of RedMart's
              own business logic. It is a highly customizable, automated alerts
              that enhances issue targeting and resolution process across the
              domains.
            </li>
          </ul>
        </Paragraph>
        <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
          <ul>
            <li>
              Designed and implemented a versatile popup component for RedMart,
              supporting both Native and H5 popups, widely used in campaigns,
              new feature announcements, and voucher distribution.
            </li>
            <li>
              Led tech team's growth hacking initiatives, overseeing idea
              formulation and progress tracking
            </li>
            <li>
              Continuous support on a internal business data insight web
              application built with a low-code platform. Provided crucial data
              insights and experimental features for departmental operations.
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
