import React from 'react'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom'
import Navbar from '../Navbar';


const mockSetState = jest.fn();
const useStateSpy = jest.spyOn(React, 'useState');
const user = userEvent.setup()
jest.mock('../NavItem', () => ({
  __esModule: true,
  default: () => <div>Nav Item</div>
}))

describe('<Navbar />', () => {
  test('should render menu with nested item', async () => {
    useStateSpy.mockReturnValueOnce([true, mockSetState]);
    const nonNestedMenuData = [{
      label: 'Item 1',
      link: 'item-1',
    }]
    render(<Navbar data={nonNestedMenuData} />)

    const menuBtn = screen.getByTestId('hamburger-menu-button')
    expect(menuBtn).toHaveClass("md:hidden")

    await user.click(menuBtn)
    expect(menuBtn).toHaveClass("md:hidden hidden")

    const closeBtn = screen.getByTestId('close-menu-button')

    await user.click(closeBtn)
    expect(menuBtn).not.toHaveClass("md:hidden hidden")
  })
})