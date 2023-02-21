import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import SignInForm from '../SignInForm';
import 'setupTests'

const onSubmitSpy = jest.fn()
const onCancelSpy = jest.fn()

const user = userEvent.setup();
describe('<SignInForm />', () => {
  test('should show validation error', async () => {
    render(<SignInForm onSubmit={onSubmitSpy} onCancel={onCancelSpy} />)
    const submitBtn = screen.getByRole('button', { name: "Submit" })
    await user.click(submitBtn)
    expect(onSubmitSpy).not.toHaveBeenCalled()
    expect(screen.getByText('Username is required')).toBeInTheDocument()
  })

  test('should throw error if typing wrong credential', async () => {
    render(<SignInForm onSubmit={onSubmitSpy} onCancel={onCancelSpy} />)
    const usernameInput = screen.getByLabelText('Username')
    const passwordInput = screen.getByLabelText('Password')
    await user.type(usernameInput, 'invalid')
    await user.type(passwordInput, 'invalid')

    const submitBtn = screen.getByRole('button', { name: "Submit" })
    await user.click(submitBtn)
    expect(onSubmitSpy).toHaveBeenCalled()
  })

  test('should call login api', async () => {
    const user = userEvent.setup();
    render(<SignInForm onSubmit={onSubmitSpy} onCancel={onCancelSpy} />)
    const usernameInput = screen.getByLabelText('Username')
    const passwordInput = screen.getByLabelText('Password')

    await user.type(usernameInput, 'admin')
    await user.type(passwordInput, 'admin')

    const submitBtn = screen.getByRole('button', { name: "Submit" })

    await user.click(submitBtn)
    expect(onSubmitSpy).toHaveBeenCalled()
  })
})