module.exports = {
    title: 'Platformer Cloud Documentation',
    tagline: 'Platformer Docs',
    url: 'https://docs.dev.x.platformer.com',
    baseUrl: '/',
    favicon: 'img/favicon.ico',
    organizationName: 'platformer-com',
    projectName: 'platformer-docs',
    themeConfig: {
        colorMode: {
            defaultMode: 'light',
            disableSwitch: true,
            respectPrefersColorScheme: false,
        },
        image: 'opengraph/platformer-documentation.jpg',
        navbar: {
            logo: {
                alt: 'Platformer Cloud',
                src: 'img/platformer-logo.png',
                srcDark: 'img/platformer-logo-dark.png',
            },
            items: [
                {
                    to: '/',
                    activeBasePath: '/',
                    label: 'Documentation',
                    position: 'left',
                },
                // {
                //     href: 'https://github.com/platformercloud/platformer-docs',
                //     label: 'GitHub',
                //     position: 'right',
                // },
                {
                    href: 'https://platformer.com',
                    label: 'platformer.com',
                    position: 'right',
                },
            ],
        },
        footer: {
            // links: footerLinks,
            copyright: `Copyright © ${new Date().getFullYear()} Platformer Cloud Pty Ltd`,
        },
    },
    presets: [
        [
            '@docusaurus/preset-classic',
            {
                docs: {
                    routeBasePath: '/', // docs-only mode
                    sidebarPath: require.resolve('./sidebars.js'),
                    editUrl:
                        'https://github.com/platformercloud/platformer-docs/tree/master/',
                },
                theme: {
                    customCss: require.resolve('./src/css/custom.scss'),
                },
            },
        ],
    ],
    plugins: ['docusaurus-plugin-sass'],
};

const footerLinks = [
    {
        title: 'Docs',
        items: [
            {
                label: 'Style Guide',
                to: 'docs/',
            },
            {
                label: 'Second Doc',
                to: 'docs/doc2/',
            },
        ],
    },
    {
        title: 'Community',
        items: [
            {
                label: 'Stack Overflow',
                href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
                label: 'Discord',
                href: 'https://discordapp.com/invite/docusaurus',
            },
            {
                label: 'Twitter',
                href: 'https://twitter.com/docusaurus',
            },
        ],
    },
    {
        title: 'More',
        items: [
            {
                label: 'Blog',
                to: 'blog',
            },
            {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
            },
        ],
    },
];
