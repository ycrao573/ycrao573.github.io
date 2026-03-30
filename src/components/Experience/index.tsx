import { createTimelineItems } from './experience';
import { useI18n } from '@/locale';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { motion } from 'motion/react';

export default function Experience() {
  const { t } = useI18n();
  const items = [...createTimelineItems(t)].reverse();

  return (
    <div
      className="flex scroll-mt-20 flex-col items-center px-[clamp(16px,4vw,32px)] py-[clamp(56px,8vw,128px)]"
      id="experience"
    >
      <motion.h3
        className="mb-[clamp(20px,4vw,48px)] text-center text-2xl font-semibold"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        {t('experience.title')}
      </motion.h3>
      <div className="relative w-full max-w-[800px] space-y-8">
        {items.map((item, index) => (
          <motion.div
            key={`${item.title}-${index}`}
            className="relative pl-12"
            initial={{ opacity: 0, x: index % 2 === 0 ? 28 : -28 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: index * 0.08 }}
            viewport={{ once: false, amount: 0.25 }}
            whileHover={{ y: -6 }}
          >
            <span className="absolute top-6 left-4 h-full w-px bg-border" />
            <img
              src={item.logo}
              alt={item.logoAlt}
              className="absolute top-4 left-0 size-8 rounded-full bg-background object-cover"
            />
            <Card className="transition-all duration-300 hover:shadow-xl hover:shadow-primary/10">
              <CardHeader className="pb-2">
                <CardTitle className="text-lg">{item.title}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-2 text-sm">
                {item.role ? <p className="font-medium">{item.role}</p> : null}
                {item.details ? (
                  <ul className="list-disc space-y-1 pl-5 text-muted-foreground">
                    {item.details.map((detail, detailIndex) => (
                      <li key={`${item.title}-detail-${detailIndex}`}>{detail}</li>
                    ))}
                  </ul>
                ) : null}
                <p className="text-muted-foreground">{item.date}</p>
                {item.badges ? (
                  <div className="flex flex-wrap gap-1">
                    {item.badges.map((badge) =>
                      badge.href ? (
                        <a
                          href={badge.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          key={badge.label}
                        >
                          <Badge variant="secondary" className="underline">
                            {badge.label}
                          </Badge>
                        </a>
                      ) : (
                        <Badge variant="secondary" key={badge.label}>
                          {badge.label}
                        </Badge>
                      ),
                    )}
                  </div>
                ) : null}
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
