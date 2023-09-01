import React from 'react'
import { Product } from '../../../typings'
import { addProductToDB } from '../../actions/serverActions'
import AddProductButton from '@/components/AddProductButton'

const fetchProducts = async () => {
  try {
    const data = await fetch('https://64f1192c0e1e60602d239a56.mockapi.io/products', {
      cache: 'no-cache',
      next: {
        tags: ["products"]
      }
    })
    const products: Product[] = await data.json()
    return products
  } catch (err) {
    console.log({ err })
  }
}

const WareHouse = async () => {
  const productsData = await fetchProducts()
  return (
    <main className='m-5'>
      <div className='text-3xl font-bold text-center'>Products WareHouse</div>
      <AddProductButton />
      <form action={addProductToDB} className='flex flex-col gap-5 mx-auto p-5 max-w-xl'>
        <input
          type='text'
          name='product'
          placeholder='Enter product name ...'
          className='border border-gray-300 rounded-md p-2'
        />
        <input
          type='text'
          name='price'
          placeholder='Enter price ...'
          className='border border-gray-300 rounded-md p-2'
        />
        <button className='border bg-blue-500 text-white p-2 rounded-md'>Add Product</button>
      </form>
      <div className='mt-5 flex items-center flex-wrap gap-5'>
        {
          productsData?.map(product => (
            <div className='p-4 shadow-lg'>
              <p>Product: {product?.product}</p>
              <p>Price: ${product?.price}</p>
            </div>
          ))
        }
      </div>
    </main>
  )
}

export default WareHouse