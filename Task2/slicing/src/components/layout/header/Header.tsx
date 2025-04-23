import { Link } from 'react-router-dom'
import logo from '../../../assets/logo.png'
import NavMenu from './NavMenu'
import MobileMenu from './MobileMenu'
import Button from '../../common/Button'
import { GiHamburgerMenu } from "react-icons/gi"
import { useState, useEffect } from 'react'
import nep from '../../../assets/Rectangle 2075.png'

const Header: React.FC = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState<boolean>(false)
    
    // Close mobile menu when resizing to desktop width
    useEffect(() => {
        const handleResize = (): void => {
            if (window.innerWidth >= 1024 && isMobileMenuOpen) {
                setIsMobileMenuOpen(!isMobileMenuOpen)
            }
        }        
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [isMobileMenuOpen])
    
    // Prevent scrolling when mobile menu is open
    useEffect(() => {
        if (isMobileMenuOpen) {
            document.body.style.overflow = 'hidden'
        } else {
            document.body.style.overflow = 'auto'
        }
        
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [isMobileMenuOpen])
    
    return (
        <header className="relative z-50">
            <div className='flex items-center justify-between'>
                <div>
                    <Link to='/'>
                        <div className='w-80 lg:w-[412px] transition-all'>
                            <img src={logo} alt="Site logo" className='w-full h-auto' />
                        </div>
                    </Link>
                </div>
               
                <nav className='hidden lg:flex items-center gap-8'>
                    <NavMenu /> 
                    <div className='flex gap-4 items-center'>
                        <img src={nep} alt="Language selection" className="w-8 h-8 rounded-full" />            
                        <Button className='bg-transparent border border-white hover:border-gray-400 px-5 py-3 text-[16px] rounded-lg font-semibold' value='Log In'/>
                    </div>           
                    
                </nav>
                              
                <button 
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className='flex lg:hidden p-2 hover:bg-gray-100 rounded-md '
                aria-label="Toggle mobile menu"
                >
                  <GiHamburgerMenu size={24} />
                </button>

                {isMobileMenuOpen && (
                    <MobileMenu 
                    setIsMobileMenuOpen={setIsMobileMenuOpen} 
                    isMobileMenuOpen={isMobileMenuOpen}
                    />
                )}
            </div>
        </header>
    )
}

export default Header