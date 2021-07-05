import React, {createContext ,useContext, useReducer } from 'react'

export const productContext = createContext()

export const ProductProvider = ({initialState, reducer, children}) => (
    <productContext.Provider value={useReducer(reducer, initialState)}>
        {children}
    </productContext.Provider>
)

export const useProductValue = () => useContext(productContext);