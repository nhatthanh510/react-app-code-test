import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import CommonPage from 'pages/CommonPage';
import 'setupTests'


describe('<Common />', () => {
    test('render component successfully', async () => {
        render(<CommonPage text="This is a simple text" />)
        expect(screen.getByText('This is a simple text')).toBeInTheDocument();
    })
})