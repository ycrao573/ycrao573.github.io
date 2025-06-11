import {
  GithubOutlined,
  EyeOutlined,
  VerticalAlignMiddleOutlined,
  QuestionCircleOutlined,
} from '@ant-design/icons';
import { Card, Image, Typography } from 'antd';

const { Title } = Typography;
const { Meta } = Card;

import { useState } from 'react';

export interface ProjectCardProps {
  imgUrl: string;
  githubLink?: string;
  prodLink?: string;
  title: string;
  description: string;
  extraStyles?: any;
  badges?: any;
}

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const [showContent, setShowContent] = useState<boolean>(false);
  const {
    imgUrl,
    githubLink,
    title,
    description,
    extraStyles,
    prodLink,
    badges,
  } = props;

  const actionButtons = [];
  if (githubLink) {
    actionButtons.push(
      <GithubOutlined
        key="github"
        onClick={() => window.open(githubLink, '_blank')}
      />
    );
  }
  if (prodLink) {
    actionButtons.push(
      <EyeOutlined key="eye" onClick={() => window.open(prodLink, '_blank')} />
    );
  }
  actionButtons.push(
    showContent ? (
      <VerticalAlignMiddleOutlined
        key="more"
        onClick={() => setShowContent(false)}
      />
    ) : (
      <QuestionCircleOutlined key="more" onClick={() => setShowContent(true)} />
    )
  );

  return (
    <Card
      style={{ width: 300, margin: 12 }}
      cover={
        <Image
          src={imgUrl}
          style={{
            width: 300,
            height: 170,
            objectFit: 'scale-down',
            ...extraStyles,
          }}
        />
      }
      actions={actionButtons}
    >
      <Meta
        title={
          <>
            <Title level={5}>{title}</Title>
            {badges}
          </>
        }
        description={showContent ? description : ''}
      />
    </Card>
  );
};
