import logo from '../../assets/logo.png'
import { NavLink } from 'react-router-dom'
import Button from '../Button'
import nep from '../../assets/Rectangle 2075.png'

const Navbar = () => {
    // type Menu = {
    //     path: String,
    //     value: String
    // }
    const menuItems = [
        {
            path: '/data',
            value: 'Data'
        },
        {
            path: '/about',
            value: 'About'
        },
        
    ]
  return (
    <div className='flex item-center justify-between'>
        {/* logo */}
        <div className='flex gap-2 items-center'>
            <div className='w-[412px]'>
            <img src={logo} alt="" className='w-full' />
            </div>
            {/* <div>
                <h1>कर्णाली प्रदेश सरकार</h1>
                <h1>मुख्यमन्त्री तथा मन्त्रिपरिषद्को कार्यालय</h1>
                <h1>Project Information Management System</h1>
            </div> */}
            
        </div>
        {/* menu */}
        <div className='flex items-center gap-4'>
            {menuItems?.map((items, idx) => (
                <div key={idx} className=''>
                    <NavLink to={items.path}>{items.value}</NavLink>
                </div>
              
            ))}
            <img src={nep} alt="" className='w-8 rounded-[100%]'/>
            <Button className='bg-transparent border-1 text-white px-5 py-3 text-lg' value='Log In'/>
        </div>

        

    </div>
  )
}

export default Navbar