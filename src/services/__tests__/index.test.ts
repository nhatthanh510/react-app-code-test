import { signIn } from 'services';
import { SignInFormData } from 'types';

describe('login', () => {
  it('should throw error when missing username or password', async () => {
    const mockLoginData = {
      username: undefined,
      password: undefined,
    } as unknown as SignInFormData;
    await expect(signIn(mockLoginData)).rejects.toEqual(Error('Username or password is missing'));
  });

  it('should throw error when username or password incorrect', async () => {
    const mockLoginData = {
      username: 'incorrect',
      password: 'incorrect',
    };
    await expect(signIn(mockLoginData)).rejects.toEqual(Error('Incorrect username or password'));
  });

  it('should resolve value with exact username and password', async () => {
    const mockLoginData = {
      username: 'admin',
      password: 'admin',
    };
    const result = await signIn(mockLoginData);
    expect(result).toEqual({
      token: 'mock-token',
    });
  });
});
