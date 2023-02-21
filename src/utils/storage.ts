import { LOCAL_STORAGE_KEYS } from 'constants/index';
import { AuthStorageType } from 'types';

export const getAuthDataInStorage = (): AuthStorageType | null => {
  const tokenData = localStorage.getItem(LOCAL_STORAGE_KEYS.AUTH);
  if (tokenData) {
    return JSON.parse(tokenData);
  }
  return null;
};

export const setAuthDataInStorage = (value: { token: string; name: string }): void => {
  localStorage.setItem(LOCAL_STORAGE_KEYS.AUTH, JSON.stringify(value));
};

export const removeAuthDateInStorage = () => {
  localStorage.removeItem(LOCAL_STORAGE_KEYS.AUTH);
};
