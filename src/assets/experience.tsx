import { ClockCircleOutlined } from '@ant-design/icons';
import { faSchool, faUserGraduate } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Badge, Typography } from 'antd';

const { Title, Paragraph, Text } = Typography;

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
    dot: <FontAwesomeIcon icon={faUserGraduate} size="lg" />,
    children: (
      <>
        <Title level={5}>Nanyang Technological University, Singapore</Title>
        <Paragraph>
          <Text strong>
            Bachelor of Information Engineering & Media (Highest Distinction)
          </Text>
        </Paragraph>
        <Paragraph>Aug 2018 - May 2022</Paragraph>
        <Badge color="#faad14e6" count="NTU S&E Scholarship"></Badge>
        <Badge color="#faad14e6" count="MOE SM2 Scholarship"></Badge>
      </>
    ),
  },
  {
    dot: <ClockCircleOutlined style={{ fontSize: '16px' }} />,
    children: 'Technical testing 2015-09-01',
  },
];
