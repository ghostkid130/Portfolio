import React, { useState } from 'react';

export const VisibilityContext = React.createContext()

const VisibilityContextProvider = ( props ) => {
    const [ visibilityState, setVisibilityState ] = useState(0)


    return (
        <VisibilityContext.Provider value={{
            visibilityState, setVisibilityState
        }}>
            {props.children}
        </VisibilityContext.Provider>
    )
}

export { VisibilityContextProvider }