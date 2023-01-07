import Link from 'next/link'
import React, { useState } from 'react'
import { whatsappNo } from '../../data'
import { motion } from 'framer-motion'





const Contact = () => {
  const [email, setEmail] = useState('')
const [subject, setSubject] = useState('')
const [name, setName] = useState('')
const [message, setMessage] = useState('')

const [fields,setFields]=useState(false)
  const [alertStatus,setAlertStatus]=useState('dangper')
  const [msg,setMsg]=useState(null)


    const sendMessage=()=>{ 


      
      

    
    try {

        console.log('ss')

      if(name===''||name===''||email===''||subject===''||message===''){
        setFields(true)
        setMsg("Required fields can't be empty")
        setAlertStatus('danger')
        setTimeout(()=>{
          setFields(false)
        },4000)

      }
      else{
        // const data={
        //   id:`${category}-${Date.now()}`,
        //   title:title,
        //   projectURL:projectURL,
        //   projectURLType:'youtube',
        //   projectType:projectType,
        //   coverPhotoURL:imageAsset,
        //   highlights:highlights,
        //   details:details,
        //   category:category,
        //   isFeatured:true
       
        // }

        // // console.log(data)
        // uploadData(data,'projects')
        setFields(true)
        setMsg('Message sent Successfully')
        setAlertStatus('success')
        clearData()

        setTimeout(()=>{
          setFields(false)
        },4000)



      }
      
    } catch (err) {
      console.log("Error -"+err)
      setFields(true)
      setMsg("Error while Uploading: Try Again")
      setAlertStatus('danger')
      setTimeout(()=>{
        setFields(false)
      },4000)
      
    }




    }
    function clearData(){
      setName('')
      setEmail('')
       setSubject('')
      setMessage('')
    }



  return (
           
<section className="bg-white">
  <div className="py-8 lg:py-16 px-4 mx-auto max-w-screen-md">
      <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-center text-text-secondary">Contact Us</h2>
      <p className="mb-8 lg:mb-16 font-light text-center text-text-primary sm:text-xl">
       Lets Discuss your work or contact us for any Query</p>
      <div className="space-y-8 border-2 p-5 lg:m-10">
      {fields&&(
            <motion.p
            initial={{opacity:0}}
            animate={{opacity:1}}
            exit={{opacity:0}}

             className={`w-full p-2 rounded-lg text-center text-lg font-semibold ${alertStatus==='danger' ? 
            "bg-red-400 text-red-800 ":" bg-emerald-400 text-emerald-800"
            }`}>
              {msg}
            </motion.p>
          )}

            <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <input type="text" required value={name} placeholder ='Name' onChange={(e)=>{setName(e.target.value)}} 
            className="w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-500 text-textColor" />
          </div>
          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <input type="text" required value={email} placeholder ='Email' onChange={(e)=>{setEmail(e.target.value)}} 
            className="w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-500 text-textColor" />
          </div>
          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <input type="text" required value={subject} placeholder ='Subject' onChange={(e)=>{setSubject(e.target.value)}} 
            className="w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-500 text-textColor" />
          </div>

          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <textarea type="text" required value={message} placeholder ='Message' onChange={(e)=>{setMessage(e.target.value)}} 
            className="w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-500 text-textColor" />
          </div>



          <div className='flex items-center w-full'>
          <button type='button'
          onClick={()=>sendMessage()}
           className='ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold'
           >
             Send Mail
           </button>

           <Link
            href={`https://wa.me/${whatsappNo}?text=Hello I am ${name}, subject of my query is - ${subject},and my query is - ${message}`.replaceAll(' ','%20')}
               className="py-3 px-5 text-sm text-center bg-green-500 font-extrabold text-white rounded-lg bg-primary-700 sm:w-fit hover:bg-primary-800shadow-gray-600 shadow-md mx-5"
        target="_blank"
        rel="noopener noreferrer"
      >
       Send on Whatsapp
      </Link>
        </div>


        
      </div>
    
  </div>
</section>

  )
}

export default Contact