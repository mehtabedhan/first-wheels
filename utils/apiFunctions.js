import { collection, doc, getDocs, where, query, setDoc, limit } from "firebase/firestore"
import { firestore } from "../firebase.config"

export const fetchUser=()=>{
    if (typeof window !== 'undefined') {
        const userInfo=localStorage.getItem('user')!=='undefined'?
    JSON.parse(localStorage.getItem('user'))
    :localStorage.clear();
    return userInfo;
      }

   
}





export const uploadData = async(data,name)=>{
    await setDoc(doc(firestore,name,data.id),data,{merge:true});
};



export const getDataByCategory=async(category,name)=>{


    const items=await getDocs(

        query(collection(firestore,name),where('category','==',category)
        )
        
    )
    const data=items.docs.map((doc)=>doc.data())

    return data


    

}
export const getProjectsByPackage=async(pck)=>{


    const items=await getDocs(

        query(collection(firestore,'projects'),where('package','==',pck)
        )
        
    )
    const data=items.docs.map((doc)=>doc.data())

    return data


    

}
export const getDataById=async(id,name)=>{


    const items=await getDocs(

        query(collection(firestore,name),where('id','==',id)
        )
        
    )
    const data=items.docs.map((doc)=>doc.data())

    return data[0]


    

}




export const getFeaturedData=async(name)=>{


    const items=await getDocs(

        query(collection(firestore,name),where('isExpired','==',false)
        )
        
    )
    

    return items.docs.map((doc)=>doc.data())

    

}

export const getCollectionData=async(name)=>{

    const items=await getDocs(

        query(collection(firestore,name))
        
    )
    

    return items.docs.map((doc)=>doc.data())

}

