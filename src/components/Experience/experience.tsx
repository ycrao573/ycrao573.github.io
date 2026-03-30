export interface ExperienceItem {
  logo: string;
  logoAlt: string;
  title: string;
  role?: string;
  details?: string[];
  date: string;
  badges?: Array<{ label: string; href?: string }>;
}

export const createTimelineItems = (t: (key: string) => string): ExperienceItem[] => [
  {
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Korea_University_Global_Symbol.svg/1200px-Korea_University_Global_Symbol.svg.png',
    logoAlt: 'KU',
    title: t('experience.ku.title'),
    date: t('experience.ku.date'),
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/2/21/University_of_Strathclyde_Coat_of_Arms.svg/1200px-University_of_Strathclyde_Coat_of_Arms.svg.png',
    logoAlt: 'USG',
    title: t('experience.us.title'),
    date: t('experience.us.date'),
  },
  {
    logo: 'https://media.licdn.com/dms/image/v2/D560BAQGrSi2UOCdL5g/company-logo_200_200/company-logo_200_200/0/1719952472030/autodesk_logo?e=2147483647&v=beta&t=s_xK8MO7Uwf3KgN6lDll8-3vxPQQn3pzpt_RpGAhHHE',
    logoAlt: 'ADSK',
    title: t('experience.adsk.company'),
    role: t('experience.adsk.role'),
    details: [t('experience.adsk.b1'), t('experience.adsk.b2'), t('experience.adsk.b3')],
    date: t('experience.adsk.date'),
    badges: [
      { label: 'ASP.NET' },
      { label: 'C#' },
      { label: 'React' },
      { label: 'Jenkins' },
      { label: 'Docker' },
      { label: 'LookerML' },
    ],
  },
  {
    logo: 'https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Nanyang_Technological_University_coat_of_arms_vector.svg/1200px-Nanyang_Technological_University_coat_of_arms_vector.svg.png',
    logoAlt: 'NTU',
    title: t('experience.ntu.title'),
    role: `${t('experience.ntu.degree')} - ${t('experience.ntu.honours')}`,
    date: t('experience.ntu.date'),
    badges: [{ label: t('experience.ntu.badge1') }, { label: t('experience.ntu.badge2') }],
  },
  {
    logo: 'https://www.leceipt.com/wp-content/uploads/2021/11/lazada-logo.jpg',
    logoAlt: 'LZD',
    title: t('experience.lzd.company'),
    role: t('experience.lzd.role'),
    details: [
      `${t('experience.lzd.b1_prefix')}RedMart${t('experience.lzd.b1_suffix')}`,
      t('experience.lzd.b2'),
      `${t('experience.lzd.b3_prefix')}iTrace${t('experience.lzd.b3_suffix')}`,
      t('experience.lzd.b4'),
    ],
    date: t('experience.lzd.date'),
    badges: [
      { label: 'React' },
      { label: 'IceJS', href: 'https://github.com/alibaba/ice' },
      { label: 'TS/JS' },
      { label: 'Rax', href: 'https://github.com/alibaba/rax' },
      { label: 'CSS/SCSS' },
    ],
  },
  {
    logo: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0I6DyRWMyQTiHQmn4GH5ATOFQlBNE5QPKpQ&s',
    logoAlt: 'SEA',
    title: t('experience.sea.company'),
    role: t('experience.sea.role'),
    date: t('experience.sea.date'),
    badges: [
      { label: 'React' },
      { label: 'TS/JS' },
      { label: 'Rush' },
      { label: 'Antd' },
      { label: 'React Native' },
      {
        label: 'Module Federation',
        href: 'https://module-federation.io/',
      },
    ],
  },
];
