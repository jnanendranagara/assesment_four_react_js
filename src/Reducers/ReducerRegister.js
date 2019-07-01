// import * as ActionTypes from '../Actions/types';
// import browserHistory from '../Utils/browserHistory'; 


// const intialState = {
//    username:'',
//    password:''  
// };
// export default(state=intialState,action)=>{
//     switch(action.type){
//         case ActionTypes.STOREUSER:{
//             return{...state,username:action.payload}
//         }
//         case ActionTypes.STOREPWD:{
//             return{...state,password:action.payload}
//         }
//         case ActionTypes.REG:{
//             browserHistory.push('/')
//         }
//         default: 
//             return state; 
//     }
// }


import * as ActionTypes from '../Actions/types';
import browserHistory from '../Utils/browserHistory'; 


const intialState = {
   loginmsg:'',
   regmsg:''
};
export default(state=intialState,action)=>{
    switch(action.type){

        case ActionTypes.LOGIN:{
            return{...state,loginmsg:'Login successfull'}
        }
        case ActionTypes.REG:{
            return{...state,regmsg:'Register successfull'}
        }
        
        default: 
            return state; 
    }
}