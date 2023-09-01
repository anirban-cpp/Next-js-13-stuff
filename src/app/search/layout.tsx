import React from 'react'
import Search from './search'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className='flex space-x-4 divide-x-2 p-5'>
            <div className='flex flex-col'>
                <h1 className='font-semibold text-base'>Search</h1>
            </div>
            <div className='flex-1 pl-5'>
                <Search />
                {children}
            </div>
        </main>
    )
}
