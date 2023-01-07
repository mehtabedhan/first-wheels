import { motion } from 'framer-motion'
import React, {useEffect, useState } from 'react'
import {MdFastfood,MdCloudUpload,MdDelete,MdMoney, MdAddBox, MdTextFields} from 'react-icons/md'
import { storage } from '../firebase.config'
import { categories,genres} from '../data'
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import Loader from './Loader'
import { getCollectionData, uploadData } from '../utils/apiFunctions'
import Image from 'next/image'
import "react-datepicker/dist/react-datepicker.css";
import ReactDatePicker from 'react-datepicker'


const AddVehicle = () => {
  const [sellers, setSellers] = useState([])


  
  useEffect(() => {

    getCollectionData('sellers').then((val)=>{
     

      setSellers(val)

    })
  }, [])
  




  const [brand,setBrand]=useState('')
  const [model,setModel]=useState('')
  const [price,setPrice]=useState('')


  const [videoURL,setVideoURL]=useState('')



  const [highlights,setHighlights]=useState({})
  const [currentHighlights,setCurrentHighlights]=useState('')

  const [category,setCategory]=useState('Select Category')
  const [seller,setSeller]=useState('Select Seller')


  const [imageAsset,setImageAsset]=useState(null)
  const [photos,setPhotos]=useState([])

  
  const [fields,setFields]=useState(false)
  const [alertStatus,setAlertStatus]=useState('danger')
  const [msg,setMsg]=useState(null)
  const [isLoading,setIsLoading]=useState(false)


  const uploadImage=(e)=>{
    setIsLoading(true)
    const imageFile=e.target.files[0]

    const storageRef=ref(storage,`vehicles/${Date.now()}-${brand}`)

    const uploadTask=uploadBytesResumable(storageRef,imageFile)
    uploadTask.on('state_changed',(snapshot)=>{
      const uploadProgress=snapshot.bytesTransferred/snapshot.totalBytes*100
      console.log(uploadProgress)

    },(err)=>{
      console.log("Error -"+err)
      setFields(true) 
      setMsg("Error while Uploading: Try Again")
      setAlertStatus('danger')
      setTimeout(()=>{
        setFields(false)
        setIsLoading(false)
      },4000)
    },()=>{

      getDownloadURL(uploadTask.snapshot.ref).then(url=>{
        setImageAsset(url)
        setIsLoading(false)
        setFields(true)
        setAlertStatus('success')
        setTimeout(()=>{
          setFields(false)
        },4000)
      })

    })



  }




  const uploadPhotos=(e)=>{
    setIsLoading(true)
    var images=Array.from(e.target.files)

    

    images.forEach((i)=>{
      setTimeout(()=>{

        console.log('bb')
        const imageFile=i
      console.log(imageFile)

    const storageRef=ref(storage,`vehicles/${Date.now()}-${brand+' '+model}`)

    const uploadTask=uploadBytesResumable(storageRef,imageFile)
    uploadTask.on('state_changed',(snapshot)=>{
      const uploadProgress=snapshot.bytesTransferred/snapshot.totalBytes*100
      console.log(uploadProgress)

    },(err)=>{
      console.log("Error -"+err)
      setFields(true) 
      setMsg("Error while Uploading: Try Again")
      setAlertStatus('danger')
      setTimeout(()=>{
        setFields(false)
        setIsLoading(false)
      },4000)
    },()=>{

      getDownloadURL(uploadTask.snapshot.ref).then(url=>{
        var imgs=photos
        imgs.push(url)
        setPhotos(imgs)
        setIsLoading(false)
        setFields(true)
        setAlertStatus('success')
        setTimeout(()=>{
          setFields(false)
        },4000)
      })

    })

      
      },2000)

    })

  }









  const deleteImage=()=>{
    setIsLoading(true)
    const deleteRef=ref(storage,imageAsset)
    deleteObject(deleteRef).then(()=>{
      setImageAsset(null)
      setIsLoading(false)
      setFields(true)
      setMsg('Image Deleted Successfully')
      setAlertStatus('success')
      setTimeout(()=>{
        setFields(false)
      },4000)

    })

  }



  const deleteMultiImage=(img)=>{
    setIsLoading(true)
    const deleteRef=ref(storage,img)
    deleteObject(deleteRef).then(()=>{
      var images=photos
      const index = images.indexOf(5);
      photos.splice(index,1)
      setPhotos(images)
      setIsLoading(false)
      setFields(true)
      setMsg('Image Deleted Successfully')
      setAlertStatus('success')
      setTimeout(()=>{
        setFields(false)
      },4000)

    })

  }







  const saveDetails=()=>{

    setIsLoading(true)
      

    
    try {

      

      if(brand==='' || model===''|| price===''|| !imageAsset){
        setFields(true)
        setMsg("Required fields can't be empty")
        setAlertStatus('danger')
        setTimeout(()=>{
          setFields(false)
          setIsLoading(false)
        },4000)

      }
      else{
        const data={
          id:`${category}-${Date.now()}`,

          brand:brand,
          model:model,
          price:price,
          seller:seller,
          videoURL:videoURL,
          highlights:highlights,
          category:category,

          coverPhotoURL:imageAsset,
          images:photos,

          isSold:false,
          isExpired:false
       
        }

        // console.log(data)
        uploadData(data,'vehicles')
        setIsLoading(false)
        setFields(true)
        setMsg('Data uploaded Successfully')
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
        setIsLoading(false)
      },4000)
      
    }

  }


  const clearData=()=>{
    setBrand('')
    setModel('')
    setPrice('')
    setVideoURL('')
    setImageAsset(null)
    setPhotos([])
    setHighlights({})
    setCurrentHighlights([])
    setCategory('Select Category')
    setSeller('Select Seller')

  }



  return (
    <div className='w-full min-h-screen flex items-center justify-center bg-white'>
        <div className="w-[90%] md:w-[75%] border border-gray-300 rounded-lg p-4 flex flex-col items-center justify-center gap-4">

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
            <MdTextFields className='text-xl text-gray-700'/>
            <input type="text" required value={brand} placeholder ='Brand' onChange={(e)=>{setBrand(e.target.value)}} 
            className="w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-500 text-textColor" />
          </div>

          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <MdTextFields className='text-xl text-gray-700'/>
            <input type="text" required value={model} placeholder ='Model' onChange={(e)=>{setModel(e.target.value)}} 
            className="w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-500 text-textColor" />
          </div>

          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <MdTextFields className='text-xl text-gray-700'/>
            <input type="text" required value={price} placeholder ='Price' onChange={(e)=>{setPrice(e.target.value)}} 
            className="w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-500 text-textColor" />
          </div>

          <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <MdTextFields className='text-xl text-gray-700'/>
            <input type="text" required value={videoURL} placeholder ='Video URL' onChange={(e)=>{setVideoURL(e.target.value)}} 
            className="w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-500 text-textColor" />
          </div>


          <div className="w-full">
            <select onChange={(e)=>{setCategory(e.target.value)}} className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer">
              <option key='o' value="other" className='bg-white'>Select Category</option>
              {categories&& categories.map(item=>
                (
                  <option key={item.id} className="text-base border-0 outline-none capitalize bg-white text-textColor" value={item.urlParamName}>{item.name}</option>
                )
              )}
            </select>
          </div>

          
          <div className="w-full">
            <select onChange={(e)=>{setSeller(e.target.value)}} className="outline-none w-full text-base border-b-2 border-gray-200 p-2 rounded-md cursor-pointer">
              <option key='o2' value="other 2" className='bg-white'>Select Seller</option>

              {sellers&& sellers.map(item=>
                (
                  <option key={item.id} className="text-base border-0 outline-none capitalize bg-white text-textColor" value={item.urlParamName}>{item.name}</option>
                )
              )}
            </select>
          </div>


         

        

   <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
            <MdMoney className='text-xl text-gray-700'/>
            <input type="text" required value={currentHighlights} placeholder ='highlights' onChange={(e)=>{setCurrentHighlights(e.target.value)}} 
            className="w-full h-full text-lg bg-transparent font-semibold outline-none border-none placeholder:text-gray-500 text-textColor" />

           <button><MdAddBox className='text-3xl text-bg-primary' onClick={()=>{
            var l=highlights
            var a=currentHighlights.split(',')
            l[a[0]]=a[1]
            setHighlights(l)
            setCurrentHighlights('')
            }}/></button>

          </div>
          
          {
              Object.keys(highlights).map((val)=>{
                return(
                  <div key={val} className='flex justify-center'>
                  <p className="mb-2 mr-2 flex justify-center font-light text-bg-primary lg:mb-4 text-sm lg:text-lg">
                  {val+" :"}</p> 
                  <p className="mb-2 flex justify-center font-medium text-bg-primary lg:mb-4 text-md lg:text-xl">
                  {highlights[val]}</p> 
              </div>
                )
              })
            
             
             }


{/* images */}


          <div className='group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-150 md:h-300 cursor-pointer rounded-lg'>

           {isLoading? <Loader/>:
           <>
           {!imageAsset?
           <>
           <label className='w-full h-full flex flex-col items-center justify-center cursor-pointer '>
             <div className='w-full h-full flex flex-col items-center justify-center gap-2'>
               <MdCloudUpload className='text-gray-500 text-3xl hover:text-gray-700'/>
               <p className='text-gray-500 hover:text-gray-700'>Click here to upload</p>
             </div>
             <input type="file" name='uploadimage' accept='image/*' onChange={(e)=>uploadImage(e)} className="w-0 h-0"/>
           </label>
           </>:
           <>
           <div className=''>
              <Image width='200' height='200' src={imageAsset} alt="uploaded image" className='w-full' />

             <button type='button' className='absolute bottom-3 right-3 p-3 rounded-full bg-red-500 text-xl 
             cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out' onClick={deleteImage}><MdDelete className='text-white'/></button>
           </div>
           </>}

           </>}

  {/* multiple photos*/}


  {isLoading? <Loader/>:
            <>
             <div className='group flex justify-center items-center flex-col border-2 border-dotted border-gray-300 w-full h-150 md:h-300 cursor-pointer rounded-lg'>
          <label className='w-full h-full flex flex-col items-center justify-center cursor-pointer '>
             <div className='w-full h-full flex flex-col items-center justify-center gap-2'>
               <MdCloudUpload className='text-gray-500 text-3xl hover:text-gray-700'/>
               <p className='text-gray-500 hover:text-gray-700'>Click here to upload multiple Project images</p>
             </div>
             <input type="file" name='uploadimage' accept='image/*' onChange={(e)=>uploadPhotos(e)} className="w-0 h-0" multiple/>
           </label>
        <div className='grid grid-cols-2 gap-2 lg:grid-cols-4 mt-10 p-2'>
           {photos.map((img)=>{
            return(
              <div key={img} className='flex border-2 p-3'>

              <div>
              <Image width='200' height='200' src={img} alt="uploaded image" />

              </div>

             <div className='ml-2 lg:ml-6 flex justify-center items-center'>

              <div>
              <button type='button' className='rounded-full bg-red-500 text-xl lg:text-2xl 
              cursor-pointer outline-none hover:shadow-md duration-500 transition-all ease-in-out' onClick={()=>deleteMultiImage(img)}><MdDelete className='text-white'/></button>
              </div>
            
             </div>
            </div>
            )
           })}
           </div>

          </div>
          </>}






          </div>
          <div className='flex items-center w-full'>
          <button type='button'
          onClick={saveDetails}
           className='ml-0 md:ml-auto w-full md:w-auto border-none outline-none bg-emerald-500 px-12 py-2 rounded-lg text-lg text-white font-semibold'>
             Save
           </button>
        </div>
        </div>
        
    </div>
  )
}

export default AddVehicle