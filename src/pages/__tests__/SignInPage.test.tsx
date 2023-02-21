import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import SignInPage from 'pages/SignInPage';
import { mockedUseNavigate } from 'setupTests'

let mockOnSignIn = jest.fn()
const user = userEvent.setup()

jest.mock('hooks/useAuth', () => ({
    ...jest.requireActual('hooks/useAuth'),
    __esModule: true,
    default: () => ({
        onSignIn: mockOnSignIn
    })
}))

describe('<SignInPage />', () => {
    beforeEach(() => {
        mockOnSignIn = jest.fn().mockResolvedValue(true)
    })

    test('should login success', async () => {
        render(<SignInPage />)
        const usernameInput = screen.getByLabelText('Username')
        const passwordInput = screen.getByLabelText('Password')
        await user.type(usernameInput, 'admin')
        await user.type(passwordInput, 'admin')

        const submitBtn = screen.getByRole('button', { name: "Submit" })
        await user.click(submitBtn)
        expect(mockedUseNavigate).toHaveBeenCalledWith('/')
    })

    test('should redirect to previous route when click Cancel', async () => {
        render(<SignInPage />)
        const submitBtn = screen.getByRole('button', { name: "Cancel" })
        await user.click(submitBtn)
        expect(mockedUseNavigate).toHaveBeenCalledWith(-1)
    })
})