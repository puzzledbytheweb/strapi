import React from 'react';
import pluginPkg from '../../package.json';
import App from './containers/App';
import Initializer from './containers/Initializer';
import Link from './components/Link';

import trads from './translations';
import pluginId from './pluginId';

const pluginDescription = pluginPkg.strapi.description || pluginPkg.description;

function Comp(props) {
  return <App {...props} />;
}

const plugin = {
  blockerComponent: null,
  blockerComponentProps: {},
  description: pluginDescription,
  icon: pluginPkg.strapi.icon,
  id: pluginId,
  initializer: Initializer,
  injectedComponents: [
    {
      plugin: 'content-manager.editPage',
      area: 'right.links',
      component: Link,
      key: 'content-manager-translations.link-translation',
      props: {
        message: {
          id: 'content-manager-translations.containers.Edit.Link',
        },
        icon: 'fa-cog',
      },
    },
  ],
  layout: null,
  lifecycles: () => {},
  leftMenuLinks: [],
  leftMenuSections: [],
  mainComponent: Comp,
  name: pluginPkg.strapi.name,
  preventComponentRendering: false,
  trads,
};

export default plugin;
