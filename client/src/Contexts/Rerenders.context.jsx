import { useState,useReducer,createContext } from "react";

// First we need to create a storage place , essentially, we need to ccreate something that can hold default values
//actual value
export const RerenderContext = createContext({
    update: false, 
    setUpdate: () => { }
})

export const Actions = {
    SET_RE_RENDER: 'SET_RE_RENDER'
}

const renderReducer = (state, action) =>{
    const {type, payload} = action

    switch(type){
        case Actions.SET_RE_RENDER:
            return{
                ...state, 
                update: payload
            }
            default:
                throw new Error(`Error  in ${type} found in Reducer`)
    }
}

const initialState ={
    update: false,
}
//this is the provider, this is the component\
export const RenderProvider = ({ children }) => {
   const [{update}, dispatch] = useReducer(renderReducer, initialState)

   const setUpdate = (bool) =>{
   dispatch({type: Actions.SET_RE_RENDER, payload: bool});
   }
    const val = {update, setUpdate}

    return (
        <RerenderContext.Provider value={val}>
            {children}
        </RerenderContext.Provider>  
    )  
}