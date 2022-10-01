import { createContext, useState, useEffect, useReducer } from "react";

const addTag = (tags, tagToAdd) => {
    const exists = tags.find(i => i === tagToAdd);
    if (exists) return tags;
    return [...tags,  tagToAdd ];
}

export const RegisterContext = createContext({
    tags: [],
    addtoTags: () => { },
});

export const RegisterActionTypes = {
    SET_TAG_ITEM: "SET_TAG_ITEM",
}


const tagReducer = (state, action) => {
    const { type, payload } = action;
    switch (type) {
        case RegisterActionTypes.SET_TAG_ITEM:
            return {
                ...state,
                ...payload,
            }
        default:
            throw new Error(`Error in ${type} found in Tag Reducer`)
    }
}

const initialState = {
    tags: [],
}

export const TagProvider = ({ children }) => {
    const [{tags}, dispatch] = useReducer(tagReducer, initialState);

    const updateTagReducer = (newTags) => {
        dispatch({ type: RegisterActionTypes.SET_TAG_ITEM, payload: {  tags: newTags } });
    }

    const addtoTags = (tagToAdd) => {
        const newTags = addTag(tags, tagToAdd);
        updateTagReducer(newTags);
    }

    const val = {
        addtoTags,
        tags,
    }

    return (
        <RegisterContext.Provider value={val}>
            {children}
        </RegisterContext.Provider>
    )
}