"use client"   // this directive allows this function to be used as a server action

import { addProductToDB } from '@/actions/serverActions'
import React, { useTransition } from 'react'

const AddProductButton = () => {

    const [isPending, startTransition] = useTransition()

    // dummy data
    const formData = new FormData()
    formData.append("product", "Macbook Pro")
    formData.append("price", "1300")

    return (
        <button onClick={() => startTransition(() => addProductToDB(formData))}
            className='fixed bottom-10 right-10 bg-green-500 text-white p-2 rounded-md w-48'>
            {isPending ? 'Adding...' : 'Add Macbook Pro'}
        </button>
    )
}

export default AddProductButton