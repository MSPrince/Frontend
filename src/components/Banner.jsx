import React from 'react'
import { FaArrowRight } from 'react-icons/fa6'
import { Link } from 'react-router-dom'

function Banner() {
  return (
    <div className='px-4 py-32 bg-black mx-auto'>
      <div className='text-white text-center'>
        <h1 className='text-5xl lg:text-6xl leading-snug font-bold mb-5'>Welcome to Our A Doctor's Diary</h1>
      <p className='text-gray-400 lg:w-3/5 mx-auto mb-5 font-primary'>Start Making Healthy Life & join our Community of Doctors and Reader who are passionate about sharing their Experiences & Ideas. We Offer EveryThing you need to get started , from healpful tips & toturial </p>
      <div>
        <Link to="/" className='font-medium hover:text-orange-500 inline-flex items-center'>Learn More <FaArrowRight className='mt-1 ml-2'/></Link>
      </div>
      </div>
    </div>
   
  )
}

export default Banner
