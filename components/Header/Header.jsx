import React, { useEffect } from 'react'
import { images, placeholderProfile } from '../../data'
import DesktopNav from './DesktopNav'
import MobileNav from './MobileNav'
import Link from 'next/link'
import Image from 'next/image'
import { useStateValue } from "../../context/StateProvider";
import { actionType } from "../../context/reducer";

import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { app } from '../../firebase.config'
import ProfileMenu from './ProfileMenu'



const Header = () => {
  const [{user},dispatch] = useStateValue();

  const firebaseAuth=getAuth(app)
  const provider=new GoogleAuthProvider()




  const login=async()=>{
    console.log('s')

    const {user:{providerData}}=await signInWithPopup(firebaseAuth,provider);
    
    dispatch({
      type:actionType.SET_USER,
      user:providerData[0],
    });

    localStorage.setItem('user',JSON.stringify(providerData[0]))
    
  }

  const logout=()=>{
    // setisMenu(false)
    localStorage.clear()

    dispatch({
      type:actionType.SET_USER,
      user:null
    })
  }


  
  return (
    <header>
      
        <nav className="flex items-center justify-between flex-wrap bg-transparent p-6">
<div className="cursor-pointer flex items-center flex-shrink-0 text-text-secondary mr-6">
   <Link href='/'>

   <div className='ml-2 lg:ml-5'>
    <Image width='100' height='100' src={images['companyLogo1']} alt="LOGO" />

   </div>
   </Link>



  </div>

 

  <div>

    <div className='flex items-center'>

    <DesktopNav/>
    {/* <ProfileMenu login={login} logout={logout} user={user}/> */}

    <MobileNav/>

    </div>
 
 


  </div>
    
</nav>
</header>
  )
}

export default Header