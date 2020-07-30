import React, { useState } from 'react'

export const RenderStatus = React.createContext();

const RenderStatusContextProvider = ({children}) => {

    const [ loadBio, setLoadBio ] = useState(false) 

    return(
        <RenderStatus.Provider 
            value={{
                loadBio, setLoadBio
            }} 
        >
            {children}
        </RenderStatus.Provider>
    )
}

export { RenderStatusContextProvider };
