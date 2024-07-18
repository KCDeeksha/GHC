import Link from 'next/link';
import React from 'react';
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useAppSelector } from '@/redux/hooks';

interface NavBarProps {
    setShowCart: (show: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ setShowCart }) => {
    const cartCount = useAppSelector((state) => state.cartReducer.length);

    return (
        <div className='bg-white py-4'>
            <div className='container flex flex-col items-center'>
                <div className='w-full flex justify-between items-center mb-8 sticky top-0 z-10 bg-white py-4'>
                    <div className='flex items-center w-full justify-between'>
                        <RxHamburgerMenu className="text-[26px]" />
                        <Link href="/" className='text-4xl font-semibold hover:text-accent mx-auto'>
                            <img src='/logo.png' className='h-12' />
                        </Link>
                        <div className='flex gap-6 text-[26px]'>
                            <div className='relative cursor-pointer' onClick={() => setShowCart(true)}>
                                <AiOutlineShoppingCart />
                                <div className='absolute top-[-15px] right-[-10px] bg-red-600 w-[25px] h-[25px] rounded-full text-white text-[14px] grid place-items-center'>
                                    {cartCount}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <ul className='flex gap-6 sm:flex'>
                    <Link href="/" className='navLink'>
                        <img src='/Group19566.png' alt='Home' className='w-24 h-24' />
                    </Link>
                    <Link href="/shop" className='navLink'>
                        <img src='/Group19564.png' alt='Shop' className='w-24 h-24' />
                    </Link>
                    <Link href="/blog" className='navLink'>
                        <img src='/Group19569.png' alt='Blog' className='w-24 h-24' />
                    </Link>
                    <li className='navLink relative w-24 h-24'>
                        <img src='/blogbg.png' alt='Blog Background' className='absolute inset-0 w-full h-full' />
                        <img src='/blog.png' alt='Blog Overlay' className='absolute inset-0 w-full h-full transform -translate-y-4' />
                    </li>
                    {/* <Link href="/contact" className='navLink'>
                        <img src='/Group19564.png' alt='Contact' className='w-24 h-24' />
                    </Link> */}
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
