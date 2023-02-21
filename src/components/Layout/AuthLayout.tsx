import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from 'components/Header'

const AuthLayout: React.FC = () => {
    return (
        <div className='h-screen flex flex-col'>
            <Header />
            <div className='flex h-full'>
                <div className='m-auto p-4'><Outlet /></div>
            </div>
        </div>
    )
}

export default AuthLayout
