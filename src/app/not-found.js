import Link from 'next/link'
import React from 'react'

const NotFound = () => {
  return (
    <div className='flex flex-col items-center justify-center p-10 gap-4'>
    <h2 className='text-red-500 font-bold text-5xl'>Not Found</h2>
    <p>Could not find requested resource</p>
    <Link href="/" className='bg-blue-600 p-2 rounded-lg m-4'>Return Home</Link>
  </div>
  )
}

export default NotFound
