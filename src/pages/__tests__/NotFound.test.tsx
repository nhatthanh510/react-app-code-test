import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import NotFound from 'pages/NotFound';
import 'setupTests'


describe('<NotFound.test />', () => {
    test('render component successfully', async () => {
        render(<NotFound />)
        expect(screen.getByText('404 Not found')).toBeInTheDocument();
    })
})