import userEvent from '@testing-library/user-event'
import React from 'react'
import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import NavItem from '../NavItem';

const mockSetState = jest.fn();
const useStateSpy = jest.spyOn(React, 'useState');
const user = userEvent.setup();


describe('<NavItem />', () => {
  test('should render menu item correctly', async () => {
    const mockData = {
      label: 'Test',
      link: 'link'
    }
    render(<NavItem {...mockData} />)
  })

  test('should render nested menu correctly', async () => {
    useStateSpy.mockReturnValueOnce([false, mockSetState]);
    const mockData = {
      label: 'Test',
      subItems: [{
        label: 'Sub Item',
        link: 'sub-link'
      }]
    }
    render(<NavItem {...mockData} />)
    const menuBtn = screen.getByTestId('arrow-btn')
    expect(menuBtn).toHaveClass('nav-button')
    await user.click(menuBtn)
    expect(menuBtn).toHaveClass('nav-button active')
  })
})