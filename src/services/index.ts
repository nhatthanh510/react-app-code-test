import { SignInFormData, SignInResponse } from 'types';

export const signIn = async (data: SignInFormData): Promise<SignInResponse> => {
  return new Promise((resolve, reject) => {
    const { username, password } = data;

    if (!username || !password) {
      reject(new Error('Username or password is missing'));
    }

    setTimeout(() => {
      if (username === 'admin' && password === 'admin') {
        resolve({
          token: 'mock-token',
        });
      } else {
        reject(new Error('Incorrect username or password'));
      }
    }, 2000);
  });
};
