import Link from 'next/link'
import React from 'react'

const Header = () => {
    return (
        <header className='w-full px-5 py-5 flex justify-between items-center bg-blue-500'>
            <Link href="/" className='px-2 py-1 bg-white text-blue-500 rounded-lg'>Home</Link>
            <p className='text-white text-base'>Content</p>
            <p className='text-white text-base'>Buttons</p>
        </header>
    )
}

export default Header