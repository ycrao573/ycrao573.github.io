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
              Responsible for RedMart's front-end development work across
              PC/mobile web, and native app. Successfully managed and delivered
              major projects including RedMart B2B and Add-on Deals.
            </li>
            <li>
              Designed the popup/dialog component for Native and web platforms,
              widely adopted during promotions, feature announcements, and
              voucher distributions.
            </li>
            <li>
              Integrated iTrace platform, enhancing front-end monitoring, and
              automated alert system, leading to improved issue identification
              and resolution processes.
            </li>
          </ul>
        </Paragraph>
        <Paragraph ellipsis={{ rows: 2, expandable: true, symbol: 'more' }}>
          <ul>
            <li>
              Contributed to low-code BI app for comprehensive business insights
              and streamlined A/B testing, facilitating efficient departmental
              operations.
            </li>
            <li>
              Led growth hacking project, executing 11 tech-driven concepts in 6
              months, with over half deployed into production, driving
              technological innovation.
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
