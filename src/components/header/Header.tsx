import { FC, memo, useState } from 'react'
import logo from '../../assets/logo.svg'
import { NavLink } from 'react-router-dom';
import { IoClose, IoSearch } from "react-icons/io5";
import { TbUserCircle } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import { FaBars } from "react-icons/fa6";




const Header: FC = () => {
    const [shadow, setShadow] = useState(false)
    const [show, setShow] = useState(false)
    window.addEventListener("scroll", () => {
        if (document.documentElement.scrollTop >= 50) {
            setShadow(true)
        } else {
            setShadow(false)
        }
    })
    return (
        <header className={`${shadow ? 'shadow-md' : ' bg-white sticky top-0 left-0 z-50'}`}>
            <div className='bg-black text-white'>
                <div className='container m-auto px-4 flex items-center py-2'>
                    <p className='flex-1 text-center text-sm max-sm:text-xs'>Sign up and get 20% off to your first order. Sign Up Now</p>
                    <IoClose className='text-xl max-md:hidden' />
                </div>
            </div>
            <nav className=''>
                <div className='container m-auto px-4 flex items-center gap-10 h-24 max-md:gap-4 relative'>
                    {
                        show &&
                        <div className='fixed top-0 left-0 w-full h-screen z-50 bg-[#0006]' onClick={() => setShow(false)}></div>
                    }
                    <div className='text-2xl hidden max-lg:block' onClick={() => setShow(true)}>
                        <FaBars />
                    </div>
                    <div className='max-md:flex-1'>
                        <NavLink to={'/'}>
                            <img src={logo} alt="" />
                        </NavLink>
                    </div>
                    <ul className={`${show ? 'max-lg:fixed top-0 left-0 bg-white w-[400px] h-screen z-[55] ease-out py-5 px-2 max-[500px]:w-[300px]' : 'flex gap-6 max-lg:fixed max-lg:top-0 left-[-400px] max-lg:flex-col max-lg:gap-5'}`}>
                        <li onClick={() => setShow(false)}>
                            <NavLink to={'/shop'}>Shop</NavLink>
                        </li>
                        <li onClick={() => setShow(false)}>
                            <NavLink to={'/sale'}>On Sale</NavLink>
                        </li>
                        <li onClick={() => setShow(false)}>
                            <NavLink to={'/arrivals'}>New Arrivals</NavLink>
                        </li>
                        <li onClick={() => setShow(false)}>
                            <NavLink to={'/brands'}>Brands</NavLink>
                        </li>
                    </ul>
                    <div className='flex items-center gap-3 flex-1 bg-[#F0F0F0] py-3 px-4 rounded-3xl max-md:absolute max-md:top-[98px] max-md:left-0 max-md:w-full'>
                        <IoSearch className='text-[#00000066] text-2xl' />
                        <input className='w-full bg-transparent  outline-none placeholder:text-[#00000066]' type="search" placeholder='Search for products...' />
                    </div>
                    <div className='flex gap-4 text-2xl'>

                        <NavLink to={'/cart'}>
                            <FiShoppingCart />
                        </NavLink>
                        <NavLink to={'/user'}>
                            <TbUserCircle />
                        </NavLink>
                    </div>
                </div>
            </nav>
        </header>
    )
}

export default memo(Header) 