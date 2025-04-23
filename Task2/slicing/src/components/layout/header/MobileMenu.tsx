import React, { useRef, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import Button from '../../common/Button'
import { IoClose } from "react-icons/io5"
import nep from '../../../assets/Rectangle 2075.png'

interface MobileMenuProps {
    setIsMobileMenuOpen: React.Dispatch<React.SetStateAction<boolean>>;
    isMobileMenuOpen: boolean;
}

const MobileMenu: React.FC<MobileMenuProps> = ({ setIsMobileMenuOpen, isMobileMenuOpen }) => {
   
    return (
        <div className="fixed inset-0 bg-opacity-50 z-99">
            <div className='absolute top-0 right-0 h-screen w-64 sm:w-80 flex flex-col gap-8 bg-white text-black px-6 py-16 shadow-lg animate-slide-in'
            >
             <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className='absolute top-4 right-4 p-2 text-gray-500 hover:text-red-500 hover:bg-gray-100 rounded-full '
              aria-label="Close menu"
              >
                <IoClose size={24} />
              </button>
                
                <nav>
                    <ul className='flex flex-col gap-6'>
                        <li className="border-b border-gray-100 pb-2">
                            <NavLink 
                                to='/data' 
                               
                                onClick={() => setIsMobileMenuOpen(false)}
                            >
                                Data
                            </NavLink>
                        </li>
                        <li className="border-b border-gray-100 pb-2">
                            <NavLink 
                                to='/about'
                               
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                About
                            </NavLink>
                        </li>
                    </ul>
                </nav>
                
                <div className="flex items-center gap-4 mt-auto">
                    <img src={nep} alt="Language selection" className="w-8 h-8 rounded-full" />
                    <span className="text-sm text-gray-600">Nepali</span>
                </div>
                
                <Button 
                    className='bg-[#1a83fb] text-white border-0 px-4 py-2.5 text-lg hover:bg-blue-600 w-full ' 
                    value='Log In'
                    onClick={() => setIsMobileMenuOpen(false)}
                />
            </div>
        </div>
    )
}

export default MobileMenu