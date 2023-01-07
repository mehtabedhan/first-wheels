
export const actionType={
    SET_USER:'SET_USER',
    SET_VEHICLES:'SET_VEHICLES',
    SET_TEAM_MEMBERS:'SET_TEAM_MEMBERS',



}

const reducer=(state,action)=>{

switch(action.type){
        case actionType.SET_USER:
            return {
                ...state,
                user:action.user,
            };
        case actionType.SET_TEAM_MEMBERS:
            return {
                ...state,
                foodItems:action.teamMembers,
            };
         case actionType.SET_VEHICLES:
            return {
                ...state,
                 cartShow:action.vehicles,
            };
        
        default:
            return state;
    }
}

export default reducer;