import React from 'react'
import { NavLink } from 'react-router-dom'

const NavMenu: React.FC = () => {
    return (
        <ul className='flex items-center gap-8'>
            <li>
                <NavLink 
                    to='/data' 
                    className='text-[15px] font-bold'
                >
                    Data
                </NavLink>
            </li>
            <li>
                <NavLink 
                    to='/about'
                    className='text-[15px] font-bold'
                >
                    About
                </NavLink>
            </li>
        </ul>
    )
}

export default NavMenu
