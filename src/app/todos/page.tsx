import React from 'react'
import { Todo } from '../../../typings'
import Link from 'next/link'
import TodoList from './TodoList'

// By default any component inside the app dir is a server component.
// In Server components we can perform async operations w/o using state or hooks

const Todos = async () => {
    return (
        <div className='m-5 flex flex-col gap-2'>
            <h1 className='text-2xl underline'>Todo List</h1>
            {/* <TodoList/> */}
        </div>
    )
}

export default Todos