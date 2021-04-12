import * as AiIcons from 'react-icons/ai';
import * as RiIcons from 'react-icons/ri';

export interface SidebarDataItem {
  title: string,
  path: string,
  icon: JSX.Element,
  iconClosed?: JSX.Element,
  iconOpened?: JSX.Element,
  subNav?: SidebarDataSubitem[]
}

export interface SidebarDataSubitem {
  title: string,
  path: string,
  icon: JSX.Element
}

export const SidebarData: SidebarDataItem[] = [
  {
    title: 'Kontrolna tabla',
    path: '/app',
    icon: <AiIcons.AiFillDashboard />
  },
  {
    title: 'Proizvodi',
    path: '#',
    icon: <AiIcons.AiFillGift />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Lista',
        path: '/products/list',
        icon: <AiIcons.AiFillDatabase />
      },
      {
        title: 'Dodaj novi',
        path: '/products/addnew',
        icon: <AiIcons.AiFillPlusCircle />
      }
    ]
  },
  {
    title: 'Recepti',
    path: '#',
    icon: <AiIcons.AiFillExperiment />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Lista',
        path: '/receips/list',
        icon: <AiIcons.AiFillDatabase />
      },
      {
        title: 'Dodaj novi',
        path: '/receips/addnew',
        icon: <AiIcons.AiFillPlusCircle />
      }
    ]
  },
  {
    title: 'Pouke',
    path: '#',
    icon: <AiIcons.AiFillBulb />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Lista',
        path: '/teachings/list',
        icon: <AiIcons.AiFillDatabase />
      },
      {
        title: 'Dodaj novi',
        path: '/teachings/addnew',
        icon: <AiIcons.AiFillPlusCircle />
      }
    ]
  },
  {
    title: 'Dešavanja',
    path: '#',
    icon: <AiIcons.AiFillNotification />,
    iconClosed: <RiIcons.RiArrowDownSFill />,
    iconOpened: <RiIcons.RiArrowUpSFill />,
    subNav: [
      {
        title: 'Lista',
        path: '/events/list',
        icon: <AiIcons.AiFillDatabase />
      },
      {
        title: 'Dodaj novo',
        path: '/events/addnew',
        icon: <AiIcons.AiFillPlusCircle />
      }
    ]
  },
  {
    title: 'Profil',
    path: '/profile',
    icon: <AiIcons.AiFillIdcard />
  },
  {
    title: 'Podešavanja',
    path: '/settings',
    icon: <AiIcons.AiFillSetting />
  }
];