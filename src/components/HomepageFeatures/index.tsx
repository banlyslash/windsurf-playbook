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
    title: 'Quick Onboarding',
    Svg: require('@site/static/img/undraw_onboarding.svg').default,
    description: (
      <>
        Windsurf Playbook was designed for quickly adopting AI featured Windsurf as a daily drive for delivery team (developer).
      </>
    ),
  },
  {
    title: 'Focus on What Matters',
    Svg: require('@site/static/img/undraw_focus.svg').default,
    description: (
      <>
        We squeeze down the information about Windsurf so you only focus on essentials and get to productivity in a matter of minutes.
      </>
    ),
  },
  {
    title: 'Supported by Slash',
    Svg: require('@site/static/img/undraw_powered.svg').default,
    description: (
      <>
        Contributed by members of Slash where we cheerish one another to grow and learn as a community.
      </>
    ),
  },
];

function Feature({title, Svg, description}: FeatureItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="flex justify-center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md mt-4">
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
