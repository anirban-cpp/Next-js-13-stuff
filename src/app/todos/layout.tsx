import React from 'react'
import TodoList from './TodoList'

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <main className='flex p-5'>
            <div className='flex flex-col'>
                <TodoList />
            </div>
            <div className='flex-1'>
                {children}
            </div>
        </main>
    )
}
