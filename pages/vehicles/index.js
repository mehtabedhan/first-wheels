import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'
import { categories } from '../../data'
import { getCollectionData } from '../../utils/apiFunctions'

const Vehicles = () => {
    const [vehicles, setVehicles] = useState([])
    const [vehiclesByCategory, setVehiclesByCategory] = useState([])

    useEffect(() => {
    
        
      getCollectionData('vehicles').then((val)=>{
        setVehicles(val)
        console.log(val)

        setVehiclesByCategory(val)

      })
  }, [])



  function filter(category){
    if(category=='all'){
      setVehiclesByCategory(vehicles)
    }
    else{
      var filteredVehicles=[]
      vehicles.map((t)=>{
        if(t.category===category){
          filteredVehicles.push(t)
        }
      })
      setVehiclesByCategory(filteredVehicles)
    }
  }


  
  
  return (

    <div>
       <div className="grid grid-cols-4 gap-3 p-4">

                        <button key='all' onClick={()=>filter('all')}  className='p-2 md:mx-8 lg:mx-20 text-lg bg-text-primary text-bg-primary font-extrabold rounded-lg bg-primary-700 hover:bg-text-secondary shadow-gray-600 shadow-md'>All</button>

                        {categories.map((c)=>{
                        return(

                        <button key={c.urlParamName} onClick={()=>filter(c.urlParamName)}  className='p-2 md:mx-8 lg:mx-20 text-lg bg-text-primary text-bg-primary font-extrabold rounded-lg bg-primary-700 hover:bg-text-secondary shadow-gray-600 shadow-md'>{c.name}</button>


                        )
                        })}

                        </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 p-10">
          {vehiclesByCategory.map((item)=>{
                  return(
                    <div  key={item.id} className="container p-3 bg-bg-secondary shadow-lg shadow-gray-900 hover:cursor-pointer hover:bg-bg-primary">
                       <Link href={'/vehicle/'+item.id} >
                        <div>
                          <div className='flex justify-center'>
                           <Image width='400' height='400'   src={item.coverPhotoURL}
                       className='rounded-md' alt=""/>
                          </div>

                          <div className='pt-4'>
                          <p className="mb-2 flex justify-center font-bold text-text-primary lg:mb-4 text-md lg:text-xl">
                          {item.brand+' '+item.model}</p>
                          
                
                          {
                            Object.keys(item.highlights).reverse().slice(0,2).map((val)=>{
                              return(
                                <div key={val} className='flex justify-center'>
                                <p className="mb-2 mr-2 flex justify-center font-light text-text-primary lg:mb-4 text-sm lg:text-lg">
                                {val+" :"}</p> 
                                <p className="mb-2 flex justify-center font-medium text-text-primary lg:mb-4 text-sm lg:text-xl">
                                {item.highlights[val]}</p> 
                            </div>
                              )
                            })
                          }

                          

                          </div>
                       


                        </div>
                    </Link>

                    </div>

              
                  )
              })}


  </div>

    </div>
    
  )
}

export default Vehicles