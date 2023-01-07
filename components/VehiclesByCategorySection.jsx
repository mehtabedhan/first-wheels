import React, { useEffect, useState } from 'react'
import { getCollectionData, getDataByCategory, getFeaturedData } from '../utils/apiFunctions'
import Link from 'next/link'
import Image from 'next/image'
import Loader from './Loader'

const VehiclesByCategorySection = ({category}) => {
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
      
    getDataByCategory(category,'vehicles').then((val)=>{
      setVehicles(val)
    })
}, [])




  return (
    <section className="">
    <div className="">
        <h2 className="mb-8 text-xl text-center text-text-secondary lg:mb-16 md:text-2xl lg:text-3xl">
          Latest vehicles...
            </h2>
      <div className='grid grid-cols-4 gap-3 p-4'>
      {vehicles.length!=0?(
           vehicles.map((item)=>{

            return(
             <div key={item.id}>
              <div  key={item.id} className="container p-3 hover:cursor-pointer">
           <Link href={'/vehicle/'+item.id}>
            <div>
              <div className='flex justify-center items-center'>
               <Image width='300' height='300' src={item.coverPhotoURL}
           className='rounded-md' alt=""/>
              </div>

              <div className='pt-4'>
              <p className="mb-2 flex justify-center font-bold text-text-primary lg:mb-4 text-md lg:text-xl">
              {item.brand+item.model}</p>
             

              </div>
           


            </div>
        </Link>

        </div>
             </div>
            )
           })
        ):(<>
        <Loader/>
        </>)
      }

      </div>

        
        
    </div>
</section>


  )
}

export default VehiclesByCategorySection