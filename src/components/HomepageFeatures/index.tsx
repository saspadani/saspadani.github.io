import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  href: string;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Next Js',
    Svg: require('@site/static/img/nextjs.svg').default,
    href: 'https://nextjs.org/',
  },
  {
    title: 'PostgreSQL',
    Svg: require('@site/static/img/postgresql.svg').default,
    href: 'https://www.postgresql.org/',
  },
  {
    title: 'Prisma ORM',
    Svg: require('@site/static/img/prisma.svg').default,
    href: 'https://www.prisma.io/',
  },
];

function Feature({ title, Svg, href }: FeatureItem) {
  return (
    <div className={styles.container}>
      <div className={styles.cards}>
        <div className='text--center'>
          <Svg className={styles.featureSvg} role='img' />
        </div>
        <div className='text--center padding-horiz--md'>
          <Heading as='h3'>{title}</Heading>
        </div>
        <Link className={clsx('button', styles.link)} to={href}>
          Pelajari
        </Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): JSX.Element {
  return (
    <section className={styles.features}>
      <h1>My Experience</h1>
      <div className={styles.container}>
        <div className={styles.feature}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
