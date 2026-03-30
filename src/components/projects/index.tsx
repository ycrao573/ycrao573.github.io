import React from 'react';
import { ProjectCard } from './project-card';
import { useI18n } from '@/locale';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';

const Projects: React.FC = () => {
  const { t } = useI18n();
  return (
    <div
      className="flex scroll-mt-20 flex-col items-center px-[clamp(16px,4vw,32px)] py-[clamp(56px,8vw,128px)]"
      id="projects"
    >
      <motion.h3
        className="mb-[clamp(20px,4vw,48px)] text-center text-2xl font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t('projects.title')}
      </motion.h3>
      <div className="flex w-full max-w-[1080px] flex-wrap items-stretch justify-center gap-[clamp(12px,2.5vw,24px)]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ amount: 0.2, once: false }}
          whileHover={{ scale: 1.02, y: -8 }}
        >
          <ProjectCard
            imgUrl={'https://img.alicdn.com/tfs/TB1NbbEPqL7gK0jSZFBXXXZZpXa-564-250.png_.webp'}
            extraStyles={{ padding: '15%' }}
            prodLink="https://redmart.lazada.sg/"
            title={t('projects.redmart.title')}
            badges={
              <>
                <Badge variant="secondary">React</Badge>
                <Badge variant="secondary">TypeScript</Badge>
                <Badge variant="secondary">CSS/SCSS</Badge>
                <Badge variant="secondary">Rax</Badge>
              </>
            }
            description={''}
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.6 }}
          viewport={{ amount: 0.2, once: false }}
          whileHover={{ scale: 1.02, y: -8 }}
        >
          <ProjectCard
            imgUrl={
              'https://github.com/ycrao573/ar-tour-guide-fyp/raw/master/assets/images/banner.png'
            }
            githubLink={'https://github.com/ycrao573/ar-tour-guide-fyp'}
            title={t('projects.fyp.title')}
            description={t('projects.fyp.desc')}
            badges={
              <>
                <Badge variant="secondary">Flutter</Badge>
                <Badge variant="secondary">Android</Badge>
                <Badge variant="secondary">Firebase</Badge>
                <Badge variant="secondary">JavaScript</Badge>
              </>
            }
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ amount: 0.2, once: false }}
          whileHover={{ scale: 1.02, y: -8 }}
        >
          <ProjectCard
            imgUrl={
              'https://github.com/NTU-AY2020-DIP-Group-8/gogogoals/raw/master/resources/Poster.jpeg'
            }
            githubLink={'https://github.com/NTU-AY2020-DIP-Group-8/gogogoals'}
            title={t('projects.dip.title')}
            description={t('projects.dip.desc')}
            badges={
              <>
                <Badge variant="secondary">Flutter</Badge>
                <Badge variant="secondary">Node.js</Badge>
                <Badge variant="secondary">Firebase</Badge>
              </>
            }
          />
        </motion.div>
      </div>
    </div>
  );
};

export default Projects;
