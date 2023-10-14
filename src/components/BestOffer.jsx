import React from 'react'
import bedroom1 from '../assets/imgs/bedroom1.jpg'
import { FaSearchLocation } from 'react-icons/fa'
import { AiFillLike } from 'react-icons/ai';

const BestOffer = ({array}) => {
  return (
    <div className=' bg-slate-50 p-4'>
      <div className='min-w-[120px] w-full h-28 rounded-2xl'>
        <img className='object-cover rounded-2xl w-full h-full' src={array.image} alt="" />
      </div>
      <div className='flex flex-col items-center'>
        <h2 className='mt-4 font-semibold'>{array.title}</h2>
        <div className='flex gap-1 items-center text-sm text-slate-400 mt-2'>
            <FaSearchLocation size={12} />
            <p>{array.location}</p>
        </div>
        <div className='flex justify-between gap-8 items-center mt-2 text-sm text-slate-400'>
            <p>{array.price}</p>
            <AiFillLike />
        </div>
      </div>
    </div>
  )
}

export default BestOffer
