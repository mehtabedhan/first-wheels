import React from 'react'
import { useState } from 'react'
import {MdMenu} from 'react-icons/md'
import Link from 'next/link'
import { navData } from '../../data'


const MobileNav = () => {
    const [navClicked, setNavClicked] = useState(false)

  return (
    <div>
          <div className="block lg:hidden">
    <button onClick={()=>setNavClicked(!navClicked)} className="flex items-center px-3 py-2 border rounded text-text-primary border-text-secondary hover:text-text-secondary hover:border-text-primary">
        <MdMenu/>
    </button>
  </div>

{navClicked?
     (<div className="block lg:hidden lg:items-center lg:w-auto">
    <div className="text-sm lg:flex-grow">
    {navData.map((item)=>{
                        return(
                            <div key={item.id} className="block mt-4 font-semibold lg:inline-block lg:mt-0 text-text-primary hover:text-text-secondary mr-4">
                                <Link href={"/"+item.link} onClick={()=>{
                                  setNavClicked(false)
                                }} >
                                {item.title}
                            </Link>
                            </div>
                            
                        )
                      
                    })}
    </div>
   
  </div>):(<></>)
  }

    </div>
  )
}

export default MobileNav