import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../../components/Navbar'
import NavBarPanel from './NavBarPanel'

const RootLayout = () => {
    return (
        <>
            <NavBarPanel />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default RootLayout