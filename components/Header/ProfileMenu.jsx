import Image from 'next/image'
import React, { useState } from 'react'
import { placeholderProfile } from '../../data'

const ProfileMenu = ({login,logout,user}) => {
    const [navClicked, setNavClicked] = useState(false)

    return (
      <div className='p-3'>
     <div className="block">
      <button onClick={()=>setNavClicked(!navClicked)} className="flex items-center px-3 py-2">
                    <Image
                        width='40'
                        height='40'
                        src={user?user.photoURL:placeholderProfile} 
                        alt="user profile" 
                          className="drop-shadow-xl rounded-full"
                        
                          />
      </button>
    </div>
  
  {navClicked?
       (<div className="block lg:items-center lg:w-auto">
      <div className="text-sm lg:flex-grow">
        {user?( <div key={'logOut'} className="block text-sm font-normal lg:text-md lg:inline-block mx-2 text-text-primary hover:text-text-secondary mr-4">
                   <button onClick={()=>{
                    logout()
                    setNavClicked(false)

                   }}>
                    LogOut
                    </button>  
          </div>  ):( <div key={'logIn'} className="block text-sm font-normal lg:text-md lg:inline-block mx-2 text-text-primary hover:text-text-secondary mr-4">
                   <button onClick={()=>{
                    login()
                    setNavClicked(false)

                   }}>
                    Login
                    </button>  
          </div>  )}
     
        
      </div>
     
    </div>):(<>
    
    </>)
    }
  
      </div>
    )
}

export default ProfileMenu