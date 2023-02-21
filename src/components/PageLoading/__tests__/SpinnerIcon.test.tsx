import { render } from '@testing-library/react'
import '@testing-library/jest-dom'
import SpinnerIcon from 'components/PageLoading/SpinnerIcon'


describe('<SpinnerIcon />', () => {
  test('should show loading spinner', async () => {
    const { container } = render(<SpinnerIcon />)
    expect(container).not.toBeEmptyDOMElement()
  })
})