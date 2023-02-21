import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from 'components/Navbar'
import Header from 'components/Header'
import { NAV_BAR_DATA } from 'constants/index'

const MainLayout: React.FC = () => {
    return (
        <div className='h-screen flex flex-col'>
            <Header />
            <div className='flex h-full'>
                <NavBar data={NAV_BAR_DATA} />
                <div className='m-auto p-4'><Outlet /></div>
            </div>
        </div>
    )
}

export default MainLayout
