export type SignInFormData = {
  username: string;
  password: string;
};

export type SignInResponse = {
  token: string;
};

export interface MenuItem {
  label: string;
  isActive?: boolean;
  parent?: MenuItem;
  link?: string;
  subItems?: MenuItem[];
}

export type AuthContextType = {
  username?: string;
  token?: string | null;
  onSignIn: (data: SignInFormData) => Promise<string>;
  onSignOut: () => void;
};

export type AuthStorageType = {
  token: string,
  name: string
}