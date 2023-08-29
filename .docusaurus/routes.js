import React from 'react';
import ComponentCreator from '@docusaurus/ComponentCreator';

export default [
  {
    path: '/ai-tutor-cse8a-client/__docusaurus/debug',
    component: ComponentCreator('/ai-tutor-cse8a-client/__docusaurus/debug', 'c66'),
    exact: true
  },
  {
    path: '/ai-tutor-cse8a-client/__docusaurus/debug/config',
    component: ComponentCreator('/ai-tutor-cse8a-client/__docusaurus/debug/config', '8ff'),
    exact: true
  },
  {
    path: '/ai-tutor-cse8a-client/__docusaurus/debug/content',
    component: ComponentCreator('/ai-tutor-cse8a-client/__docusaurus/debug/content', 'a77'),
    exact: true
  },
  {
    path: '/ai-tutor-cse8a-client/__docusaurus/debug/globalData',
    component: ComponentCreator('/ai-tutor-cse8a-client/__docusaurus/debug/globalData', '93d'),
    exact: true
  },
  {
    path: '/ai-tutor-cse8a-client/__docusaurus/debug/metadata',
    component: ComponentCreator('/ai-tutor-cse8a-client/__docusaurus/debug/metadata', 'ea9'),
    exact: true
  },
  {
    path: '/ai-tutor-cse8a-client/__docusaurus/debug/registry',
    component: ComponentCreator('/ai-tutor-cse8a-client/__docusaurus/debug/registry', '311'),
    exact: true
  },
  {
    path: '/ai-tutor-cse8a-client/__docusaurus/debug/routes',
    component: ComponentCreator('/ai-tutor-cse8a-client/__docusaurus/debug/routes', '36f'),
    exact: true
  },
  {
    path: '/ai-tutor-cse8a-client/markdown-page',
    component: ComponentCreator('/ai-tutor-cse8a-client/markdown-page', 'f80'),
    exact: true
  },
  {
    path: '/ai-tutor-cse8a-client/playground',
    component: ComponentCreator('/ai-tutor-cse8a-client/playground', '19f'),
    exact: true
  },
  {
    path: '/ai-tutor-cse8a-client/tutor',
    component: ComponentCreator('/ai-tutor-cse8a-client/tutor', 'b93'),
    exact: true
  },
  {
    path: '/ai-tutor-cse8a-client/docs',
    component: ComponentCreator('/ai-tutor-cse8a-client/docs', '01a'),
    routes: [
      {
        path: '/ai-tutor-cse8a-client/docs/category/section-2-conditionals',
        component: ComponentCreator('/ai-tutor-cse8a-client/docs/category/section-2-conditionals', '04a'),
        exact: true,
        sidebar: "tutorialSidebar"
      },
      {
        path: '/ai-tutor-cse8a-client/docs/conditionals/if-elif-else',
        component: ComponentCreator('/ai-tutor-cse8a-client/docs/conditionals/if-elif-else', '463'),
        exact: true,
        sidebar: "tutorialSidebar"
      }
    ]
  },
  {
    path: '/ai-tutor-cse8a-client/',
    component: ComponentCreator('/ai-tutor-cse8a-client/', '0be'),
    exact: true
  },
  {
    path: '*',
    component: ComponentCreator('*'),
  },
];
