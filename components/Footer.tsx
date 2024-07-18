import React from "react";
import Link from "next/link";

const Footer = () => {
    return (
        <div className="bg-white py-4 sticky bottom-0 w-full">
            <div className="container flex justify-between items-center mx-auto px-8">
                <Link href="/" className='flex flex-col items-center'>
                    <img src='/fh.png' alt='Home' className='w-10 h-10' />
                    <span className="text-xs"></span>
                </Link>
                <Link href="/track" className='flex flex-col items-center'>
                    <img src='/track.png' alt='Track' className='w-10 h-10' />
                    <span className="text-xs"></span>
                </Link>
                <Link href="/search" className='flex flex-col items-center'>
                    <img src='/search.png' alt='Search' className='w-10 h-10' />
                    <span className="text-xs"></span>
                </Link>
                <Link href="/account" className='flex flex-col items-center'>
                    <img src='/account.png' alt='Account' className='w-10 h-10' />
                    <span className="text-xs"></span>
                </Link>
            </div>
        </div>
    )
}

export default Footer;
