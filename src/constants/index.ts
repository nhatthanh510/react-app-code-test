import { MenuItem } from 'types';

export const NAV_BAR_DATA: MenuItem[] = [
  {
    link: '/public-1',
    label: 'Public link 1',
  },
  {
    link: '/sub-1',
    label: 'Public',
    subItems: [
      {
        link: '/sub-2',
        label: 'Sub item',
        subItems: [
          { link: '/public-2', label: 'Public link 2' },
          { link: '/public-3', label: 'Public link 3' },
        ],
      },
      {
        link: '/public-4',
        label: 'Public link 4',
      },
    ],
  },
  {
    link: '/private-1',
    label: 'Private link 1',
  },
  {
    link: '/private-2',
    label: 'Private link 2',
  },
];

export const REDIRECT_URL_QUERY_PARAM = 'redirectUrl';
export const LOCAL_STORAGE_KEYS = {
  AUTH: 'auth',
};
