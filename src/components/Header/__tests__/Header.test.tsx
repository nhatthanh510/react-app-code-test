import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Header from '../Header';
import * as useAuth from 'hooks/useAuth'


const useAuthSpy = jest.spyOn(useAuth, 'default')


jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  Link: () => <div></div>
}));

describe('<Header />', () => {
  test('should show validation error', async () => {
    useAuthSpy.mockReturnValueOnce({
      token: 'mock-token',
      username: 'mock-username',
      onSignIn: jest.fn(),
      onSignOut: jest.fn()
    })
    render(<Header />)
    expect(screen.getByText('Welcome mock-username')).toBeInTheDocument()
    expect(screen.getByText('Sign Out')).toBeInTheDocument()

  })
})