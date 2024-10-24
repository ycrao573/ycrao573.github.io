import {
  faBriefcase,
  faSchool,
  faUserGraduate,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Avatar, Badge, Typography } from 'antd';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;

interface EllipsisTextProps {
  children: ReactNode;
}

export const timelineItems = [
  {
    dot: (
      <Avatar
        icon={
          <img
            src={
              'https://media.licdn.com/dms/image/v2/C4E0BAQGlk-jTN4pzzQ/company-logo_200_200/company-logo_200_200/0/1631338821198?e=1737590400&v=beta&t=vJ7zs4dO7kvWZHvVr_GVWzORPTGhU60dpGoHlv-ic18'
            }
            alt="KU"
          />
        }
      />
    ),
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
    dot: (
      <Avatar
        icon={
          <img
            src={
              'https://media.licdn.com/dms/image/v2/D4E0BAQGNXcrM2lW4Vg/company-logo_200_200/company-logo_200_200/0/1720082239808/university_of_strathclyde_logo?e=1737590400&v=beta&t=pQXW9Mjk9T-RHP7UxTDKA5jU_uWZxznjXU3mbIHkTzI'
            }
            alt="USG"
          />
        }
      />
    ),
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
    dot: (
      <Avatar
        icon={
          <img
            src={
              'https://media.licdn.com/dms/image/v2/D560BAQGrSi2UOCdL5g/company-logo_200_200/company-logo_200_200/0/1719952472030/autodesk_logo?e=2147483647&v=beta&t=s_xK8MO7Uwf3KgN6lDll8-3vxPQQn3pzpt_RpGAhHHE'
            }
            alt="ADSK"
          />
        }
      />
    ),
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
        <Badge color="lightgrey" count="ASP.NET"></Badge>
        <Badge color="lightgrey" count="C#"></Badge>
        <Badge color="lightgrey" count="React"></Badge>
        <Badge color="lightgrey" count="Jenkins"></Badge>
        <Badge color="lightgrey" count="Docker"></Badge>
        <Badge color="lightgrey" count="LookerML"></Badge>
      </>
    ),
    color: 'lightgrey',
  },
  {
    dot: (
      <Avatar
        icon={
          <img
            src={
              'https://media.licdn.com/dms/image/v2/C4D0BAQE9ISNDKYUaAw/company-logo_200_200/company-logo_200_200/0/1656682216282/ntusg_logo?e=1737590400&v=beta&t=Afwa6tJAOekabvt9IzZJ1WteEQZZdQoe3FVdZM2-WBI'
            }
            alt="NTU"
          />
        }
      />
    ),
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
        <Badge color="darkorange" count="NTU S&E Scholarship"></Badge>
        <Badge color="darkorange" count="MOE SM2 Scholarship"></Badge>
      </>
    ),
  },
  {
    dot: (
      <Avatar
        icon={
          <img
            src={
              'https://www.leceipt.com/wp-content/uploads/2021/11/lazada-logo.jpg'
            }
            alt="LZD"
          />
        }
      />
    ),
    children: (
      <div>
        <Title level={5}>Lazada South East Asia Pte Ltd</Title>
        <Paragraph>
          <Text strong>Frontend Engineer (RedMart)</Text>
        </Paragraph>
        <Paragraph>
          <ul>
            <li>
              Contributed to cross-platform front-end development (React) for
              Lazada's <Link to={'https://redmart.lazada.sg/'}>RedMart</Link>,
              delivering major projects like RedMart+ Membership, B2B (Corporate
              Pantry), and Group Buy.
            </li>
            <li>
              Designed and implemented a multi-functional popup component with
              cross-platform support, enabling targeted user alerts, promotions,
              and voucher distribution across RedMart.
            </li>
            <li>
              Integrated{' '}
              <Link to={'https://wpk.ucweb.com/product/web'}>iTrace</Link> for
              front-end monitoring, enabling real-time performance metrics,
              custom error reporting, and automated alerts to enhance issue
              detection and resolution.
            </li>
            <li>
              Collaborated in constructing an internal business data platform
              using a low-code approach, facilitating A/B experiments and user
              behavior analysis, and providing customizable dashboards for
              departmental operations.
            </li>
          </ul>
        </Paragraph>
        <Paragraph>Jul 2022 - Sep 2024</Paragraph>
        <Badge color="#ee4054" count="React"></Badge>
        <Link to={'https://github.com/alibaba/ice'}>
          <Badge
            color="#ee4054"
            count="IceJS"
            style={{ textDecoration: 'underline', color: '#1668dc' }}
          ></Badge>
        </Link>
        <Badge color="#ee4054" count="TS/JS"></Badge>
        <Link to={'https://github.com/alibaba/rax'}>
          <Badge
            color="#ee4054"
            count="Rax"
            style={{ textDecoration: 'underline', color: '#1668dc' }}
          ></Badge>
        </Link>
        <Badge color="#ee4054" count="CSS/SCSS"></Badge>
      </div>
    ),
    color: '#ee4054',
  },
  {
    dot: (
      <Avatar
        icon={
          <img
            src={
              'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0I6DyRWMyQTiHQmn4GH5ATOFQlBNE5QPKpQ&s'
            }
            alt="SEA"
          />
        }
      />
    ),
    children: (
      <>
        <Title level={5}>Sea Limited</Title>
        <Paragraph>
          <Text strong>Frontend Engineer (Finance)</Text>
        </Paragraph>
        <Paragraph>Sep 2024 - current</Paragraph>
        <Badge color="#468ef7" count="React"></Badge>
        <Badge color="#468ef7" count="TS/JS"></Badge>
        <Badge color="#468ef7" count="Rush"></Badge>
        <Badge color="#468ef7" count="Antd"></Badge>
      </>
    ),
    color: '#468ef7',
  },
];
