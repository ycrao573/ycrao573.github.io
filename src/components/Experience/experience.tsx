import { Avatar, Badge, Typography } from 'antd';
import { Link } from 'react-router-dom';

const { Title, Paragraph, Text } = Typography;

export const createTimelineItems = (t: (key: string) => string) => [
  {
    dot: (
      <Avatar
        icon={
          <img
            src={
              'https://upload.wikimedia.org/wikipedia/en/thumb/f/f6/Korea_University_Global_Symbol.svg/1200px-Korea_University_Global_Symbol.svg.png'
            }
            alt="KU"
          />
        }
      />
    ),
    children: (
      <>
        <Title level={5}>{t('experience.ku.title')}</Title>
        <Paragraph>{t('experience.ku.date')}</Paragraph>
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
              'https://upload.wikimedia.org/wikipedia/en/thumb/2/21/University_of_Strathclyde_Coat_of_Arms.svg/1200px-University_of_Strathclyde_Coat_of_Arms.svg.png'
            }
            alt="USG"
          />
        }
      />
    ),
    children: (
      <>
        <Title level={5}>{t('experience.us.title')}</Title>
        <Paragraph>{t('experience.us.date')}</Paragraph>
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
        <Title level={5}>{t('experience.adsk.company')}</Title>
        <Paragraph>
          <Text strong>{t('experience.adsk.role')}</Text>
        </Paragraph>
        <Paragraph>
          <ul>
            <li>{t('experience.adsk.b1')}</li>
            <li>{t('experience.adsk.b2')}</li>
            <li>{t('experience.adsk.b3')}</li>
          </ul>
        </Paragraph>
        <Paragraph>{t('experience.adsk.date')}</Paragraph>
        <Badge color="grey" count="ASP.NET"></Badge>
        <Badge color="grey" count="C#"></Badge>
        <Badge color="grey" count="React"></Badge>
        <Badge color="grey" count="Jenkins"></Badge>
        <Badge color="grey" count="Docker"></Badge>
        <Badge color="grey" count="LookerML"></Badge>
      </>
    ),
    color: 'grey',
  },
  {
    dot: (
      <Avatar
        icon={
          <img
            src={
              'https://upload.wikimedia.org/wikipedia/en/thumb/f/f8/Nanyang_Technological_University_coat_of_arms_vector.svg/1200px-Nanyang_Technological_University_coat_of_arms_vector.svg.png'
            }
            alt="NTU"
          />
        }
      />
    ),
    children: (
      <>
        <Title level={5}>{t('experience.ntu.title')}</Title>
        <Paragraph>
          <Text strong>{t('experience.ntu.degree')}</Text>
          <br />
          <Text>{t('experience.ntu.honours')}</Text>
        </Paragraph>
        <Paragraph></Paragraph>
        <Paragraph>{t('experience.ntu.date')}</Paragraph>
        <Badge color="darkorange" count={t('experience.ntu.badge1')}></Badge>
        <Badge color="darkorange" count={t('experience.ntu.badge2')}></Badge>
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
        <Title level={5}>{t('experience.lzd.company')}</Title>
        <Paragraph>
          <Text strong>{t('experience.lzd.role')}</Text>
        </Paragraph>
        <Paragraph>
          <ul>
            <li>
              {t('experience.lzd.b1_prefix')}
              <Link to={'https://redmart.lazada.sg/'}>RedMart</Link>
              {t('experience.lzd.b1_suffix')}
            </li>
            <li>{t('experience.lzd.b2')}</li>
            <li>
              {t('experience.lzd.b3_prefix')}
              <Link to={'https://wpk.ucweb.com/product/web'}>iTrace</Link>
              {t('experience.lzd.b3_suffix')}
            </li>
            <li>{t('experience.lzd.b4')}</li>
          </ul>
        </Paragraph>
        <Paragraph>{t('experience.lzd.date')}</Paragraph>
        <Badge color="#ee4054" count="React"></Badge>
        <Link to={'https://github.com/alibaba/ice'}>
          <Badge
            color="#ee4054"
            count="IceJS"
            style={{ textDecoration: 'underline', color: 'white' }}
          ></Badge>
        </Link>
        <Badge color="#ee4054" count="TS/JS"></Badge>
        <Link to={'https://github.com/alibaba/rax'}>
          <Badge
            color="#ee4054"
            count="Rax"
            style={{ textDecoration: 'underline', color: 'white' }}
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
        <Title level={5}>{t('experience.sea.company')}</Title>
        <Paragraph>
          <Text strong>{t('experience.sea.role')}</Text>
        </Paragraph>
        <Paragraph>{t('experience.sea.date')}</Paragraph>
        <Badge color="#468ef7" count="React"></Badge>
        <Badge color="#468ef7" count="TS/JS"></Badge>
        <Badge color="#468ef7" count="Rush"></Badge>
        <Badge color="#468ef7" count="Antd"></Badge>
        <Badge color="#468ef7" count="React Native"></Badge>
        <Link to={'https://module-federation.io/'}>
          <Badge
            color="#468ef7"
            count="Module Federation"
            style={{ textDecoration: 'underline', color: 'white' }}
          ></Badge>
        </Link>
      </>
    ),
    color: '#468ef7',
  },
];
