import React, { useState } from 'react';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiFillCloseCircle } from 'react-icons/ai';
import { MenuItem as MenuItemType } from 'types';
import NavItem from 'components/Navbar/NavItem';
import { useLocation } from 'react-router-dom';
import { formatter } from 'utils';

const { formatMenuItems, findMatchedMenuRecursion } = formatter

const NavBar: React.FC<{
    data: MenuItemType[];
}> = ({ data }) => {
    const location = useLocation();

    const pathname = location.pathname;
    const formattedMenuItems = formatMenuItems(data)

    const menuItemsWithState = React.useMemo(() => {
        let currentMenu = findMatchedMenuRecursion(formattedMenuItems, pathname)
        if (currentMenu) {
            currentMenu.isActive = true
        }
        while (currentMenu?.parent) {
            currentMenu = currentMenu?.parent
            currentMenu && (currentMenu.isActive = true)
        }
        return formattedMenuItems
    }, [pathname, formattedMenuItems])

    const [open, setOpen] = useState(false);
    return (
        <div className={`nav-bar ${open ? 'left-0' : '-left-full'}`}>
            <button
                className={`absolute top-5 ml-4 left-full text-3xl text-slate-500 md:hidden ${open ? 'hidden' : ''}`}
                onClick={() => setOpen(true)}
                data-testid="hamburger-menu-button"
            >
                <RxHamburgerMenu />
            </button>
            <button data-testid="close-menu-button" className='absolute top-2 right-2 text-slate-500 text-3xl md:hidden' onClick={() => setOpen(false)}>
                <AiFillCloseCircle />
            </button>
            <div className='navigation'>
                <ul>
                    {menuItemsWithState.map((item: MenuItemType, index) => (
                        <NavItem {...item} key={index} />
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
