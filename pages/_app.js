import '../styles/globals.scss'
import 'tailwindcss/tailwind.css'
import React,{useEffect,useState} from 'react'
import { Layout } from '../components'
import { StateProvider } from '../context/StateProvider'
import { initialState } from '../context/initialState'
import reducer from '../context/reducer'

function MyApp({ Component, pageProps }) {
  return (
    <div className='bg-bg-primary'>
  
  
  <StateProvider
          
          initialState={initialState} reducer={reducer}>


      
    <Layout>

    <Component {...pageProps} />

    </Layout>

    </StateProvider>

    
    </div>
  )
}

export default MyApp
