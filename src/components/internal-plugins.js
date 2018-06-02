import GeneralPanel from './panels/GeneralPanel';
import SourceView from './panels/SourceViewPanel';
import MenuPanel from './panels/MenuPanel';

export const internalPlugins = [
  {
    id: 'menu',
    menu: {
      menuName: 'Menu',
      menuIcon: 'fa-menu',
    },
    panel: {
      component: MenuPanel,
    },
  },
  {
    id: 'general',
    menu: {
      menuName: 'General',
      menuIcon: 'fa-home',
    },
    panel: {
      component: GeneralPanel,
    },
  },
  {
    id: 'source',
    menu: {
      menuName: 'Source',
      menuIcon: 'fa-code',
    },
    panel: {
      component: SourceView,
    },
  },
];
