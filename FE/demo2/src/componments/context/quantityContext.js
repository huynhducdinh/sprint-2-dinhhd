import React, {createContext, useEffect, useMemo, useState} from 'react';

export const QuantityContext = createContext(0);
export const QuantityProvider = ({ children }) => {
    const [iconQuantity, setIconQuantity] = useState(0);

    return (
        <>
        <QuantityContext.Provider value={{iconQuantity,setIconQuantity}}>
            {children}
        </QuantityContext.Provider>
        </>
    );
};


