import React from 'react'

const Hero = () => {
  return (
    <div className='flex content-normal items-center m-5 p-10'>
        <div className='w-full'>
            <div>
                <h1 className='text-gray-800 text-center text-6xl font-semibold'>Your Personal Assistant</h1>
                <h1 className='text-gray-600 text-center text-2xl font-bold'>One stop solution for your services.Order any service,anytime.</h1>
            </div>

            <div className='my-2 w-full xl:w-1/3 lg:w-1/2 md:w-2/3 mx-auto px-2'>
                <input type="search" placeholder='Find your services here e.g. AC , Car , Facial....'  className='p-3 rounded mt-5 w-full focus:outline-none bg-gray-50'/>
            </div>
        </div>
      
    </div>
  )
}

export default Hero
