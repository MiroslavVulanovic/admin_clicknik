export interface SidebarDataItem {
  title: string,
  path: string,
  subNav?: SidebarDataSubitem[]
}

export interface SidebarDataSubitem {
  title: string,
  path: string
}

export const SidebarData: SidebarDataItem[] = [
  {
    title: 'Dashboard',
    path: '/dashboard',
  },
  {
    title: 'Posts',
    path: '/posts',
    subNav: [
      {
        title: 'List',
        path: '/posts/list',
      },
      {
        title: 'Add new',
        path: '/posts/addnew',
      }
    ]
  },
  {
    title: 'Categories',
    path: '/categories',
    subNav: [
      {
        title: 'List',
        path: '/categories/list',
      },
      {
        title: 'Add new',
        path: '/categories/addnew',
      }
    ]
  },
  {
    title: 'Comments',
    path: '/comments',
  },
  {
    title: 'Users',
    path: '/users',
    subNav: [
      {
        title: 'List',
        path: '/users/list',
      },
      {
        title: 'Add new',
        path: '/users/addnew',
      }
    ]
  },
  {
    title: 'Profile',
    path: '/profile',
  },
  {
    title: 'Settings',
    path: '/settings',
  }
];