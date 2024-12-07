import React from 'react'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <div>
    <div
      className="h-screen bg-[url('/images/Home-page.jpg')] bg-center bg-cover pt-8 w-full flex items-start justify-between flex-col"
    >
      <div className="ml-8">
        <h3 className='text-3xl text-white leading-tight font-bold'>Uber</h3>
      </div>
        <div className="bg-white py-5 pb-7 px-4 w-full">
            <h2 className="text-3xl font-bold">Get Started With Uber</h2>
            <Link to='/login' className=" inline-block text-center w-full bg-black text-white rounded-md py-3 mt-5">
                Continue
            </Link>
        </div>
    </div>
</div>

  )
}

export default Home