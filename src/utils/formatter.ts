import { MenuItem as MenuItemType } from 'types';
import cloneDeep from 'lodash/cloneDeep';

export const findMatchedMenuRecursion = (menus: MenuItemType[], path: string): MenuItemType | null => {
  for (const menu of menus) {
    if (menu.link === path) {
      return menu;
    } else if (menu.subItems) {
      const found = findMatchedMenuRecursion(menu.subItems, path);
      if (found) {
        return found;
      }
    }
  }
  return null;
};

export const formatMenuItems = (data: MenuItemType[]): MenuItemType[] => {
  const formattedData = cloneDeep(data) as MenuItemType[];
  const traverse = (menu: MenuItemType, parent?: MenuItemType) => {
    menu.parent = parent;

    if (menu.subItems) {
      for (const subMenu of menu.subItems) {
        traverse(subMenu, menu);
      }
    }
  };
  for (const menu of formattedData) {
    traverse(menu);
  }
  return formattedData;
};
