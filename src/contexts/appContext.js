import { createContext, useState } from "react";

export const AppContext = createContext({});

export function AppContextProvider({ children, ...rest }){
    const [search , setSearch] = useState('')

    return (
        <AppContext.Provider
            value={{
                search,
                setSearch
            }}
        >
            {children}
        </AppContext.Provider>
    )
}