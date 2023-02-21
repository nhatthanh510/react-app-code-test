import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import ProtectedRoute from 'routes/ProtectedRoute';
import * as useAuth from 'hooks/useAuth'
import 'setupTests'

const useAuthSpy = jest.spyOn(useAuth, 'default');
const defaultUseAuthData = {
    token: 'mock-token',
    onSignIn: jest.fn(),
    onSignOut: jest.fn()
}

describe('<ProtectedRoute />', () => {
    test('should return children if there is a valid token', async () => {
        useAuthSpy.mockReturnValueOnce(defaultUseAuthData)
        const mockChild = <div>Mock Child</div>
        render(<ProtectedRoute>{mockChild}</ProtectedRoute>)

        expect(screen.getByText("Mock Child")).toBeInTheDocument()

    })

    test('force redirect if there is no token', async () => {
        useAuthSpy.mockReturnValueOnce({
            ...defaultUseAuthData,
            token: null
        })
        const mockChild = <div>Mock Child</div>
        render(<ProtectedRoute>{mockChild}</ProtectedRoute>)

        expect(screen.getByText("Mock navigate")).toBeInTheDocument()

    })
})