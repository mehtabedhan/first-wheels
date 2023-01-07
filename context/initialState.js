import { fetchUser,getCollectionData } from "../utils/apiFunctions"



const userInfo=fetchUser()
const vehicles=getCollectionData('vehicles')
const teamMembers=getCollectionData('team-members')




export const initialState={
    user:userInfo,
    vehicles:vehicles,
    teamMembers:teamMembers
   
}