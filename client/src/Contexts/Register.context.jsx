import { createContext, useState, useEffect, useReducer } from "react";

const addTag = (tags, tagToAdd) => {
    const exists = tags.find(i => i === tagToAdd);
    if (exists) return tags;
    return [...tags,  tagToAdd ];
}

const removeItem = (tags, tagToRemove) => {
    tags = tags.filter(i => i !== tagToRemove);
    const tag = tags.find((tag) => tag === tagToRemove);
    return (tags.filter(tag => tag !== tagToRemove));
}

export const RegisterContext = createContext({
    tags: [],
    addtoTags: () => { },
    removeFronTags: () => { },
    currentUser: null,
    setCurrentUser: () => null 
});

export const RegisterActionTypes = {
    SET_TAG_ITEM: "SET_TAG_ITEM",
    SET_ACTIVE_USER: "SET_ACTIVE_USER"
}

const tagReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case RegisterActionTypes.SET_TAG_ITEM:
            return {
                ...state,
                ...payload,
            } 
            case RegisterActionTypes.SET_ACTIVE_USER:
            return {
                ...state, 
                currentUser: payload
            }
        default:
            throw new Error(`Error in ${type} found in Tag Reducer`)
    }
}

const initialState = {
    tags: [],
    currentUser: null
}

export const TagProvider = ({ children }) => {
    const [{tags, currentUser}, dispatch] = useReducer(tagReducer, initialState);

    const updateTagReducer = (newTags) => {
        dispatch({ type: RegisterActionTypes.SET_TAG_ITEM, payload: {  tags: newTags } });
    }

    const setCurrentUser = (newUser) =>{
        dispatch({type: RegisterActionTypes.SET_ACTIVE_USER, payload: {currentUser: newUser}});
    }

    const addtoTags = (tagToAdd) => {
        const newTags = addTag(tags, tagToAdd);
        updateTagReducer(newTags);
    }

    const removeFromTags = (tagToRemove) =>{
        const newTags = removeItem(tags, tagToRemove);
        updateTagReducer(newTags);   
    }

    const val = {
        addtoTags,
        tags,
        removeFromTags,
        currentUser,
        setCurrentUser
    }

    return (
        <RegisterContext.Provider value={val}>
            {children}
        </RegisterContext.Provider>
    )
}