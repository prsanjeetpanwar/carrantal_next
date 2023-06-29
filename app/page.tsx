"use client"
import Image from 'next/image'
import { Hero } from './components'
import SearchBar from '@/app/components/SearchBar'
import CustomFilter from '@/app/components/CustomFilter'
import { fetchCars } from '@/utils'
import CarCard from './components/CarCard'

export default async function Home() {
  const allcars= await fetchCars()
const isDataEmpty=!Array.isArray(allcars)|| allcars.length<1||!allcars;
  // console.log(allcars)
  return (
    <main className="overflow-hidden">
   <Hero/>
   <div className='mt-12 padding-x
   padding-y max-width
  
   ' id='discover'>
    <div className='home__text-container'>
  <h1 className='text-4xl font-extrabold'>Car Catalogue</h1>
  <p>Explore the cars you might like</p>

    </div>
    <div className='home__filters'>
      <SearchBar/>
      <div  className='home__filter-container'>
        <CustomFilter title='fuel'/>
        <CustomFilter title='year'/>

      </div>
    </div>
   {
    !isDataEmpty?(
      <section>
 <div className='home__cars-wrapper'>
  {allcars?.map((car)=>(<CarCard car={car}/>))}
 </div>
      </section>
    ):(
      <div className='home__error-container'>
        <h2 className='text-black text-xl 
        font-bold'>Oops , no result</h2>
      <p>{allcars?.message}</p>
      </div>
    )
   }
   </div>
    </main>
  )
}
