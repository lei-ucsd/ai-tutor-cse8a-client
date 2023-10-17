// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const { configure } = require("@rise4fun/docusaurus-plugin-rise4fun");
require('dotenv').config()



/** @type {import('@docusaurus/types').Config} */
const docusaurusConfig = {
  title: 'CSE 8A',
  tagline: 'Interactive textbook for CSE 8A with a built-in AI tutor',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'https://lei-ucsd.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/ai-tutor-cse8a-client/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'lei-ucsd', // Usually your GitHub org/user name.
  projectName: 'ai-tutor-cse8a-client', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'CSE 8A',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Textbook',
          },
          { to: '/playground', label: 'Playground', position: 'left' },
          { to: '/tutor', label: 'Tutor', position: 'left' },
          {
            href: 'https://github.com/lei-ucsd/ai-tutor-cse8a-client',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Contents',
            items: [
              {
                label: 'Textbook',
                to: '/docs/category/section-2-conditionals' // TODO update
              },
              {
                label: 'Playground',
                to: '/playground'
              },
              {
                label: 'Tutor',
                to: '/tutor'
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'GitHub',
                href: 'https://github.com/lei-ucsd/ai-tutor-cse8a-client',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} LEI@UCSD. Built with <a href="https://docusaurus.io">Docusaurus</a> and <a href="https://microsoft.github.io/docusaurus-plugins/">rise4fun</a>.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),

  customFields: {
    'LOCAL': process.env.LOCAL,
    'LOCAL_SERVER': process.env.LOCAL_SERVER,
  },
};

const config = configure(
  docusaurusConfig,
  // TODO: rise4fun config {}
)

module.exports = config;
