import { useContext } from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import { AuthContext, AuthProvider } from '../AuthContext';
import userEvent from '@testing-library/user-event'
import * as appServices from 'services'

const signInSpy = jest.spyOn(appServices, 'signIn')

const user = userEvent.setup()
describe('AuthProvider', () => {
  const TestComponent = () => {
    const { token, onSignIn, onSignOut, username } = useContext(AuthContext);
    return (
      <div>
        {token ? <div>
          {`Hello, ${username}`}
          <button data-testid="sign-out-btn" onClick={onSignOut}>Sign Out</button>
        </div> : <button data-testid="sign-in-btn" onClick={() => onSignIn({ username: "admin", password: "admin" })}>Sign In</button>}
      </div>
    );
  };
  test('should render AuthProvider children', async () => {
    signInSpy.mockResolvedValueOnce({
      token: 'mock-token',
    })
    render(<AuthProvider><TestComponent /></AuthProvider>)
    expect(screen.getByText('Sign In')).toBeInTheDocument();

    // Sign In
    await user.click(screen.getByTestId('sign-in-btn'));
    expect(await screen.findByText('Hello, admin')).toBeInTheDocument();

    // Sign Out
    await user.click(screen.getByTestId('sign-out-btn'));
    expect(await screen.findByText('Sign In')).toBeInTheDocument();
  })

  // test('should show error', async () => {


  //   render(<AuthProvider><TestComponent /></AuthProvider>)
  //   expect(screen.getByText('Sign In')).toBeInTheDocument();

  //   // Sign In
  //   signInSpy.mockRejectedValueOnce(new Error('mock error'))
  //   await user.click(screen.getByTestId('sign-in-btn'));
  // })
})

