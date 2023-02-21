import { formatter } from 'utils';
import { MenuItem as MenuItemTypes } from 'types';

describe('formatter', () => {
  const mockMenuData: MenuItemTypes[] = [
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

  describe('findMatchedMenuRecursion', () => {
    test('should return matched menu item', () => {
      const mockPath = '/public-4';

      const result = formatter.findMatchedMenuRecursion(mockMenuData, mockPath);
      expect(result).toEqual({ link: '/public-4', label: 'Public link 4' });
    });

    test('should return null if no route match', () => {
      const mockPath = '/no-match';

      const result = formatter.findMatchedMenuRecursion(mockMenuData, mockPath);
      expect(result).toEqual(null);
    });
  });

  describe('formatMenuItems', () => {
    test('should return matched menu item', () => {
      const result = formatter.formatMenuItems(mockMenuData);
      expect(result[0].parent).toEqual(undefined);
      expect(result[1]?.subItems?.[0]?.parent).toBeTruthy(); // { link: '/public-2', label: 'Public link 2' }
    });
  });
});
