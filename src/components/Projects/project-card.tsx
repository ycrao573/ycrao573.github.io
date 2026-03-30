import { useState } from 'react';
import type { CSSProperties, ReactNode } from 'react';
import { Eye, ChevronUp, CircleHelp } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export interface ProjectCardProps {
  imgUrl: string;
  githubLink?: string;
  prodLink?: string;
  title: string;
  description: string;
  extraStyles?: CSSProperties;
  badges?: ReactNode;
}

export const ProjectCard: React.FC<ProjectCardProps> = (props) => {
  const [showContent, setShowContent] = useState<boolean>(false);
  const { imgUrl, githubLink, title, description, extraStyles, prodLink, badges } = props;

  return (
    <Card className="flex h-full w-[300px] flex-col overflow-hidden border-2 transition-all duration-300 hover:shadow-xl">
      <img
        src={imgUrl}
        className="h-[170px] w-[300px] object-scale-down"
        style={{ ...extraStyles }}
        alt={title}
      />
      <CardHeader className="flex-1 pb-2">
        <CardTitle className="text-base">{title}</CardTitle>
        <div className="flex flex-wrap gap-1">{badges}</div>
        {showContent ? <CardDescription>{description}</CardDescription> : null}
      </CardHeader>
      <CardContent className="flex items-center gap-1 pt-0">
        {githubLink ? (
          <Button size="icon-sm" variant="ghost" onClick={() => window.open(githubLink, '_blank')}>
            <FaGithub className="text-base" />
          </Button>
        ) : null}
        {prodLink ? (
          <Button size="icon-sm" variant="ghost" onClick={() => window.open(prodLink, '_blank')}>
            <Eye />
          </Button>
        ) : null}
        <Button size="icon-sm" variant="ghost" onClick={() => setShowContent((prev) => !prev)}>
          {showContent ? <ChevronUp /> : <CircleHelp />}
        </Button>
      </CardContent>
    </Card>
  );
};
