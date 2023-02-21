import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import PageLoading from 'components/PageLoading'


jest.mock('../SpinnerIcon', () => ({
  __esModule: true,
  default: () => <div>Spinner Icon</div>
}))

describe('<PageLoading />', () => {
  test('should show loading spinner', async () => {
    render(<PageLoading isLoading={true} />)
    expect(screen.getByText('Spinner Icon')).toBeInTheDocument()
  })

  test('should not render spinner', async () => {
    const { container } = render(<PageLoading isLoading={false} />)
    expect(container).toBeEmptyDOMElement()
  })
})