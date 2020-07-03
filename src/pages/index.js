import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import styles from './styles.module.scss';

const features = [
    {
        title: <>Kubernetes, but without the complexity</>,
        description: (
            <>
                Platformer empowers Developers to build, ship and take
                responsibility for managing their Deployments with
                zero-Kubernetes knowledge, in the true spirit of DevOps.
            </>
        ),
    },
    {
        title: <>Centralized Control and Observability</>,
        description: (
            <>
                Connect to any Kubernetes Cluster (in the Cloud, On-premise,
                Hybrid or even on the Edge) and control your infrastructure
                through a single pane of glass. Project X was built to address
                the pain points faced by Enterprises of all sizes.
            </>
        ),
    },
    {
        title: <>A Cloud Native DevOps Solution with no Vendor lock-ins</>,
        description: (
            <>
                Project X is built around Cloud-native Opensource Projects and
                gives you the freedom to pick and choose what you want,
                including the tools to manage your infrastructure and
                deployments.
            </>
        ),
    },
];

function Feature({ imageUrl, title, description }) {
    const imgUrl = useBaseUrl(imageUrl);
    return (
        <div className={clsx('col col--4', styles.feature)}>
            {imgUrl && (
                <div className='text--left'>
                    <img
                        className={styles.featureImage}
                        src={imgUrl}
                        alt={title}
                    />
                </div>
            )}
            <h3>{title}</h3>
            <p>{description}</p>
        </div>
    );
}

function Home() {
    const context = useDocusaurusContext();
    const { siteConfig = {} } = context;
    return (
        <Layout
            title={siteConfig.title}
            description='Platformer Cloud Official Documentation'>
            <header className={clsx('hero hero--primary', styles.heroBanner)}>
                <div className='container'>
                    <h1 className='hero__title'>Platformer Documentation</h1>
                    <h1>
                        The Cloud Native Developer Platform built for the
                        Enterprise.
                    </h1>
                    <p className='hero__subtitle'>
                        Deploying and Managing Applications on Kubernetes on
                        Cloud, Hybrid or On-Premise Infrastructure has never
                        been easier.
                    </p>
                    <div className={styles.buttons}>
                        <Link
                            className={clsx(
                                'button button--outline button--secondary button--lg',
                                styles.getStarted
                            )}
                            to={useBaseUrl('docs/')}>
                            Get Started
                        </Link>
                    </div>
                </div>
            </header>
            <main>
                {features && features.length > 0 && (
                    <section className={styles.features}>
                        <div className='container'>
                            <div className='row'>
                                {features.map((props, idx) => (
                                    <Feature key={idx} {...props} />
                                ))}
                            </div>
                        </div>
                    </section>
                )}
            </main>
        </Layout>
    );
}

export default Home;
