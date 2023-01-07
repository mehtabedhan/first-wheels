import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import { aboutUs, aboutUsText, images, ourStoryText } from '../../data'
import { getCollectionData } from '../../utils/apiFunctions'

const About = () => {
    const [teamMembers, setTeamMembers] = useState([])

    useEffect(() => {
      
        getCollectionData('team-members').then((val)=>{
            setTeamMembers(val)
        })
    }, [])
    
  return (
    
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4">
    <div className="flex flex-col lg:flex-row gap-8">
        <div className="w-full lg:w-3/4 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-text-secondary pb-4">About Us</h1>
            <p className="font-normal text-base leading-6 text-text-primary">
                {aboutUs}
            </p>
        </div>
        <div className="">
             <Image width='400' height='400' alt='about' className="first-letter:rounded-md shadow-lg shadow-gray-600" src={images['aboutImage']} />
        </div>
    </div>

    <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
            <h1 className="text-3xl lg:text-4xl font-bold leading-9 text-text-secondary pb-4">Our Team</h1>
           
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
            <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 shadow-lg rounded-md">
                {
                    teamMembers.length!=0?(
                    <>
                    {teamMembers.map((item)=>{
                        return(
                        <div key={item.id} className="p-4 pb-6 flex justify-center flex-col items-center">
                             <Image width='200' height='200' className='rounded-lg shadow-md shadow-gray-800' src={item.profileImageURL} alt={item.name+" featured Image"} />
                            <p className="font-semibold text-lg lg:text-xl leading-5 text-text-primary mt-4">{item.name}</p>
                            <p className="font-medium text-lg lg:text-xl leading-5 text-text-primary mt-4">{item.role}</p>
 
                        </div>
                       
                        )
                    })}
                    
                    </>)
                    
                    :(<></>)
                }
            </div>
        </div>
    </div>
</div>

  )
}

export default About