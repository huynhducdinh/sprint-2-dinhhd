import React, {createContext, useContext, useState} from 'react';

export const QuantityContext = createContext();
export const QuantityProvider = ({ children }) => {
    const [iconQuantity, setIconQuantity] = useState(null);
    return (
        <QuantityContext.Provider value={{ iconQuantity, setIconQuantity }}>
            {children}
        </QuantityContext.Provider>
    );
};
const FashionContext = createContext(null);

