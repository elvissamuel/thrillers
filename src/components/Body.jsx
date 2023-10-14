import React from 'react'
import img from '../assets/imgs/furniture.jpg'
import { FaCalendarAlt, FaUserAlt, FaAngleRight, FaAngleLeft } from 'react-icons/fa'
import TrendingCard from './TrendingCard'
import paris from '../assets/imgs/paris.jpg'
import turkey from '../assets/imgs/blogafrik3m.jpg'
import london from '../assets/imgs/blogimg8.jpg'
import BestOffer from './BestOffer'
import bedroom1 from '../assets/imgs/bedroom1.jpg'
import bedroom2 from '../assets/imgs/bedroom2.jpg'
import bedroom3 from '../assets/imgs/bedroom3.jpg'
import bedroom4 from '../assets/imgs/bedroom4.jpg'
import bedroom5 from '../assets/imgs/bedroom5.jpg'


const Body = () => {

    const trendArray = [
        {
        title: 'Montmartre, France', body: 'Visiting the best tourist center chosen by the audience', price: '$450,000,00', rating:'4/5', image: paris,
    },
    {
        title: 'Istanbul, Turkey', body: 'One of our best selling tours to Turkey and visiting its regions...', price: '$600,000,00', rating:'5/5', image: turkey
    },
    {
        title: 'London, UK', body: 'London is one of the most beautiful place to visit amongst all', price: '$360,000,00', rating:'5/5', image: london
    }
]

const bestOffers = [
    {
        title: '7 Seasons Apartment', location: 'Kensington/London', price: '$65,00/night', image: bedroom1, 
    },
    {
        title: 'Along with the Villa', location: 'Hungary/Budapest', price: '$65,00/night', image: bedroom2,
    },
    {
        title: 'Resort and Recreation', location: 'William Street/Boxon', price: '$65,00/night', image: bedroom3,
    },
    {
        title: 'Beautiful and Classy', location: 'Citadines Opera Paris/France', price: '$65,00/night', image: bedroom4,
    },
    {
        title: 'Perfect Peace', location: 'Southampton/London', price: '$79,00/night', image: bedroom5,
    },
]
  return (
    <div >
      <div className='relative'>
          <img src={img} className='h-44 rounded-2xl w-full object-cover' alt="" />
          <div className='  '>
            <form action="" className='text-base absolute left-1/2 transform -translate-x-1/2 -bottom-12 top-20 xl:top-40 bg-slate-100 flex flex-col xl:flex-row items-center justify-evenly w-3/4 text-slate-400 p-4 py-6 rounded-lg mx-auto -mt-8 z-20'>
                <select className='px-4 py-2 bg-transparent' name="" id="">
                    <option value="Where are you going?">Where are You Going? </option>
                </select>
                <div className="h-6 w-[2px] bg-slate-400 hidden lg:inline-block mx-4 my-auto" aria-hidden="true" />
                <select className='px-4 py-2 bg-transparent' name="" id="">
                    <option value="Check in Date">Check in Date</option>
                </select>
                <div className="h-6 w-[2px] bg-slate-400 hidden lg:inline-block mx-4 my-auto" aria-hidden="true" />
                <select className='px-4 py-2 bg-transparent' name="" id="">
                    <option value="3 adults">3 adults</option>
                </select>
          
                <button className='border px-4 py-1.5 text-base rounded-xl bg-teal-700 text-white font-semibold'>Search</button>
            </form>
      </div>
      </div>

      <div>
          <div className='mt-20 flex justify-between items-center'>
            <p className='font-semibold text-lg'>Trending Destinations</p>
            <div className=''>
                <div className='border inline-block p-1 rounded-lg mr-3'><FaAngleLeft /></div>
                <div className='border inline-block p-1 rounded-lg'><FaAngleRight /></div>
            </div>
          </div>
          <div className='grid xl:grid-cols-3 rounded-xl gap-2 my-4 cursor-pointer'>
            {trendArray.map((trend) => {
                return <div>
                    <TrendingCard trends={trend} />
                 </div>
            })}
          </div>
      </div>

      <div>
        <div>
            <div className='flex justify-between text-xl mt-10 mb-4 font-bold'>
                <h2>Best Offers</h2>
                <h2>View All</h2>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-1 cursor-pointer'>
                {bestOffers.map((best)=>{
                    return <div className=''>
                        <BestOffer array={best} />
                    </div>
                })}
            </div>
        </div>
      </div>
    </div>
  )
}

export default Body
