

import React, { createContext, useContext, useState } from 'react'
const PopupContexts = createContext()

export const PopupProvider = ({ children }) => {
    const [popup, setPopup] = useState(1)
    return (
        <PopupContexts.Provider value={{popup,setPopup}}>
            {children}
        </PopupContexts.Provider>
    )
}
export const usePopup = () => useContext(PopupContexts)
