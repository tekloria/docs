import type {ReactNode} from 'react';
import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type FeatureItem = {
  title: string;
  Svg: React.ComponentType<React.ComponentProps<'svg'>>;
  description: ReactNode;
};

const FeatureList: FeatureItem[] = [
  {
    title: 'Seamless Integration',
    Svg: require('@site/static/img/undraw_creative-flow.svg').default,
    description: (
      <>
        Tekloria integrates effortlessly with your existing tech stack, enabling smooth transitions and faster setup.
      </>
    ),
  },
  {
    title: 'Developer Friendly',
    Svg: require('@site/static/img/undraw_developer.svg').default,
    description: (
      <>
        With a focus on simplicity and ease of use, Tekloria helps developers quickly implement and get the most out of your product.
      </>
    ),
  },
  {
    title: 'Customizable Solutions',
    Svg: require('@site/static/img/undraw_customization.svg').default,
    description: (
      <>
        Tailor Tekloria to meet the unique needs of your business or project with a variety of flexible customization options.
      </>
    ),
  },
  {
    title: 'Scalable Performance',
    Svg: require('@site/static/img/undraw_scaling.svg').default,
    description: (
      <>
        Whether you're just starting out or scaling rapidly, Tekloria offers reliable performance that grows with your needs.
      </>
    ),
  },
  {
    title: 'Cloud Hosting',
    Svg: require('@site/static/img/undraw_cloud-hosting.svg').default,
    description: (
      <>
        Host your applications and websites with Tekloria's secure, scalable, and high-performance cloud infrastructure.
      </>
    ),
  },
  {
    title: 'Real-Time Analytics',
    Svg: require('@site/static/img/undraw_analytics.svg').default,
    description: (
      <>
        Monitor key performance indicators (KPIs) and get insights in real-time with Tekloria’s powerful analytics tools.
      </>
    ),
  },
];


function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures(): ReactNode {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
