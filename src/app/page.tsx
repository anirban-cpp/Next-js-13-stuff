import Link from 'next/link'

export default function Home() {
  return (
    <div className='m-5 flex flex-col gap-4'>
      <p className='mb-5'>Home Page</p>
      <Link href="/todos" className='w-fit px-2 py-2 bg-blue-500 text-white rounded-lg'>Todos</Link>
      <Link href="/search" className='w-fit px-2 py-2 bg-blue-500 text-white rounded-lg'>Search</Link>
      <Link href="/warehouse" className='w-fit px-2 py-2 bg-blue-500 text-white rounded-lg'>WareHouse</Link>
    </div>
  )
}
