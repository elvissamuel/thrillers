import React from 'react'
import { StarIcon } from '@heroicons/react/24/outline'


const TrendingCard = ({trends}) => {
  return (
    <div className=''>
      <div className='flex gap-3 p-4 bg-slate-50'>
        <div className='w-36 h-24 rounded-xl'><img className='w-full h-full object-cover rounded-xl' src={trends.image} alt="" /></div>
        <div className='flex flex-col gap-2'>
            <div className='flex justify-between items-center'>
                <h2 className='font-semibold text-lg'>{trends.title}</h2>
                <div className='flex items-center gap-1'>
                    <div className='h-6 w-6'>
                        <StarIcon color='yellow' />
                    </div>
                    <span>{trends.rating}</span>
                </div>
            </div>
            <p className='text-sm'>{trends.body}</p>
            <p>{trends.price}</p>
        </div>
      </div>

    </div>
  )
}

export default TrendingCard
