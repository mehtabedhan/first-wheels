import React from 'react'
import { navData } from '../../data'
import Link from 'next/link'

const DesktopNav = () => {
  return (
    

  <div className="hidden lg:flex lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
    {navData.map((item)=>{
                        return(
                            <div key={item.id} className="block text-lg font-semibold lg:inline-block mx-6 text-text-primary hover:text-text-secondary mr-4">
                                <Link href={"/"+item.link}>
                                {item.title}
                            </Link>
                            </div>
                        )
                      
                    })}
    </div>
   
  </div>



  )
}

export default DesktopNav