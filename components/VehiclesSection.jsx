import React, { useEffect, useState } from 'react'
import { getCollectionData, getFeaturedData } from '../utils/apiFunctions'
import Link from 'next/link'
import Image from 'next/image'
import Loader from './Loader'

const VehiclesSection = () => {
  const [vehicles, setVehicles] = useState([])

  useEffect(() => {
      
    getCollectionData('vehicles').then((val)=>{
     
      setVehicles(val)
    })
}, [])




  return (
    <section className="">
        <div className="mt-5">
        <h2 className="mb-4 text-xl ml-8 lg:ml-20 text-text-secondary font-semibold lg:mb-8 md:text-xl lg:text-2xl">
              second hand Vehicles...
                </h2>
          <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 p-4'>
          {vehicles.length!=0?(
               vehicles.map((item)=>{

                return(
                  <div  key={item.id} className="container p-3 ml-5 bg-bg-secondary shadow-lg shadow-gray-900 hover:cursor-pointer hover:bg-bg-primary">
                  <Link href={'/vehicle/'+item.id} >
                   <div>
                     <div className='flex justify-center'>
                      <Image width='400' height='400'   src={item.coverPhotoURL}
                  className='rounded-md' alt=""/>
                     </div>

                     <div className='pt-4'>
                      <div className='flex justify-center'>
                      <p className="mb-2 mr-4 flex justify-center font-bold text-text-primary lg:mb-4 text-md lg:text-xl">
                     {item.brand+' '+item.model}</p>
                     <p className="mb-2 flex justify-center font-normal text-text-primary lg:mb-4 text-md lg:text-lg">
                     {item.highlights['Year of Manufacture']}</p>
                      </div>
                 
                     
                     
           
                     <div className='flex justify-center'>
                           <p className="mb-2 mr-2 flex justify-center font-light text-text-primary lg:mb-4 text-sm lg:text-lg">
                           {'Fuel Type'+" :"}</p> 
                           <p className="mb-2 flex justify-center font-medium text-text-primary lg:mb-4 text-sm lg:text-xl">
                           {item.highlights['Fuel']}</p> 
                       </div>

                     

                     </div>
                  


                   </div>
               </Link>

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

export default VehiclesSection