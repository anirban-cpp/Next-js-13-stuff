import React from 'react'
import { Todo } from '../../../../typings'
import { notFound } from 'next/navigation'

type PageProps = {
    params: { todoId: string },
}

const fetchTodo = async (todoId?: string) => {
    if (!todoId || todoId.length === 0) return undefined
    try {
        const res = await fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`, {
            // cache: "no-cache" // ssr
            // cache: "force-cache" // ssg
            next: { revalidate: 60 } // isr. Here Next js will revalidate the page after 60 secs
            // So here when revalidate is 60, next js will server side render the page first and cache it
            // only after 60s, it will again ssr the page with new data, otherwise before that it will return the cached page
            // by default it is ssr or no-cache
        })
        const todo: Todo = await res.json()
        return todo
    } catch (err) {
        console.log({ err })
    }
}

const TodoPage = async (props: PageProps) => {
    const { params } = props
    const todo = await fetchTodo(params?.todoId)

    if(!todo?.id) return notFound() // this is next js by default not found page. We can modify this for each route by creating a not-found.jsx/tsx file in the same root

    return (
        <div className='flex-col flex gap-2 p-10 bg-yellow-200 border-2 m-2 shadow-lg'>
            <p>
                #{todo?.id}: {todo?.title}
            </p>
            <p>
                Completed: {todo?.completed ? 'Yes' : 'No'}
            </p>
            <p className='border-t border-black mt-5 text-right'>
                By User {todo?.userId}
            </p>
        </div>
    )
}

export default TodoPage

// in order to use ssr or ssg, we have to tell next js which pages it needs to pre-render
// in next js 12 we had getStaticPaths() function
// from next js 13 onwards we have generateStaticParams() function
// This is a reserved function

export async function generateStaticParams() {
    const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
    const todos: Todo[] = await res.json()

    // for now we are triming the no of pre-rendered pages to 10 because of rate limiting
    const trimmedTodos = todos.splice(0, 10)

    return trimmedTodos.map(todo => ({
        todoId: todo.id.toString()
    }))
}