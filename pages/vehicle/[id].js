import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import React from 'react'
import { Loader } from '../../components';
import { whatsappNo } from '../../data';
import { getCollectionData, getDataById } from '../../utils/apiFunctions';

const VehicleDetails = ({vehicle}) => {
  const router=useRouter();

  

  if(router.isFallback){
      return <Loader/>
  }


  
  return (
<div>
<div className="grid grid-cols-1 lg:grid-cols-2 mx-4 my-8 md:mx-8 lg:mx-16 lg:my-16">
        {vehicle.videoURL!=''?( 
        <YoutubeVideo videoURL={vehicle.videoURL}/>):(<ImageGrid images={vehicle.images}/>)}
             

    <div className="mx-5 lg:mx-20">
       <div className='justify-center flex my-5'>
       <h1 className="text-xl lg:text-3xl font-extrabold leading-none text-text-secondary">
       {vehicle.brand+" "+vehicle.model}</h1>
        </div>


        
        <div className='flex justify-center'>
                           <p className="mb-2 mr-3 flex justify-center font-medium text-text-primary lg:mb-4 text-sm lg:text-lg">
                           {'₹'}</p> 
                           <p className="mb-2 flex justify-center font-bold text-text-primary lg:mb-4 text-xl lg:text-2xl">
                           {`${(Number(vehicle.price)/100000).toFixed(2)} Lakh`}</p> 
                       </div>


       <div className='border-2 px-7 mt-10 py-10 border-text-secondary'>
       {
                            Object.keys(vehicle.highlights).map((val)=>{
                              return(
                                <div key={val} className='flex justify-center'>
                                <p className="mb-2 mr-2 flex justify-center font-light text-text-primary lg:mb-4 text-sm lg:text-lg">
                                {val+" :"}</p> 
                                <p className="mb-2 flex justify-center font-medium text-text-primary lg:mb-4 text-md lg:text-xl">
                                {vehicle.highlights[val]}</p> 
                            </div>
                              )
                            })
                          }
    

       </div>
       <div className='flex items-center justify-center mt-3'>

       <Link  
            href={`https://wa.me/${whatsappNo}?text=Hello I want to know about this vehicle - ${vehicle.brand+" "+vehicle.model}`.replaceAll('&','and').replaceAll(' ','%20')}
                className="p-3 ml-3 text-sm text-center bg-green-500 font-extrabold text-black rounded-lg bg-primary-700 sm:w-fit hover:bg-green-300 shadow-gray-600 shadow-md"
                target="_blank"
                rel="noopener noreferrer"
              >
              Get Quote
              </Link>
              </div>

    </div>


    {vehicle.videoURL!=''?( <ImageGrid images={vehicle.images}/>):(<></>)}

 
                 
              </div>


                      

            </div>



  )
}

export async function getStaticProps({params}){
    const data=await getDataById(params.id,'vehicles');
  
    return {
      props:{vehicle:data}
    }
  }

export async function getStaticPaths(){
    const vehicles=await getCollectionData('vehicles')
    var p=[]
    vehicles.map((val)=>{
      p.push('/vehicle/'+val.id)
    })

    return {
        paths:p,
        fallback:true
    }
}


const YoutubeVideo = ({videoURL}) => {
  return (
    <div className="aspect-w-16 aspect-h-9 ">
    <iframe src={"https://www.youtube.com/embed/"+videoURL.split('=')[1]} allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
  </div>
  )
}


const ImageGrid = ({images}) => {
  return (
    <div className='grid grid-cols-2 gap-2 lg:grid-cols-2 mt-10 p-2'>
    {images.map((img)=>{
     return(

       <div key={img}>
       <Image width='400' height='400' src={img} alt="uploaded image" />

       </div>
     )
    })}
    </div>


  )
}


export default VehicleDetails