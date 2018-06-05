import GeneralPanel from './panels/GeneralPanel';
import SourceView from './panels/SourceViewPanel';
import MenuPanel from './panels/MenuPanel';
import BorderPanel from './panels/BorderPanel';

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
    id: 'border',
    menu: {
      menuName: 'Border',
      menuIcon: 'fa-square',
    },
    panel: {
      component: BorderPanel,
    },
  },
  {
    id: 'shadow',
    menu: {
      menuName: 'Shadow',
      menuIcon: 'fa-shower',
    },
    panel: {
      component: BorderPanel,
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
