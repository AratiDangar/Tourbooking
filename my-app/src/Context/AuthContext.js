import { createContext,useEffect,useReducer } from "react";


const initial_state={
    user:localStorage.getItem('user')!== 'undefined' ? JSON.parse(localStorage.getItem('user')):null,
    loading:false,
    error:null
};

export const AuthContext=createContext(initial_state);


const AuthReducer=(state,action)=>{

    switch(action.type){
        case 'LOGIN_START':
            return{
                user:null,
                loading:false,
                error:null,
            };
            case'LOGIN_SUCCESS':
                return{
                    user:action.payload,
                    loading:false,
                    error:null,
                }
                case'LOGIN_FAILURE':
                return{
                    user:null,
                    loading:false,
                    error:action.payload,
                }

                case'REGISTER_SUCCESS':
                return{
                    user:null,
                    loading:false,
                    error:null,
                }
                case'LOGOUT':
                return{
                    user:null,
                    loading:false,
                    error:null,
                }
            default:
                return state
    }
}

export const AuthContextProvider=({children})=>{

    const[state,dispatch]=useReducer(AuthReducer,initial_state)

    useEffect(()=>{
        localStorage.setItem('user',JSON.stringify(state.user))
    },[state.user])

    return <AuthContext.Provider value={{
        user:state.user,
        loading:state.loading,
        error:state.error,
        dispatch
    }}>
         {children}
    </AuthContext.Provider>
    


}




/*import { createContext,useEffect,useReducer } from "react";



const initial_state={
    userName
  :  localStorage.getItem("currentUser")
  ? JSON.parse(localStorage.getItem("currentUser")).userName
  : "",
    loading:false,
    isAuthenticated: false,
    error:null
};

export const AuthContext=createContext(initial_state);


const AuthReducer=(state,action)=>{

    switch(action.type){
        
            case'LOGIN':
                return{...state,
                    userName:action.payload.userName,
                    loading:false,
                    error:null,
                    isAuthenticated: true,
                }
                
                case'REGISTER':
                return{
                    ...state,
                    userName:null,
                    loading:false,
                    error:null,
                    isAuthenticated: false,
                }
                case'LOGOUT':
            
                return{
            ...state,
                    userName:null,
                    loading:false,
                    error:null,
                    isAuthenticated: false,
                }
            default:
                return state
    }
};

export const AuthContextProvider=({children})=>{

    const[state,dispatch]=useReducer(AuthReducer,initial_state)

    //useEffect(()=>{
      //  localStorage.setItem('userName',JSON.stringify(state.userName))
    //},[state.userName])

    return <AuthContext.Provider value={{
       // user:state.user,
       // loading:state.loading,
        //error:state.error,
        state,dispatch
    }}>
         {children}
    </AuthContext.Provider>
    


}*/