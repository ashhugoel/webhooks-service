'use client'
import { createContext, ReactNode, useContext, useState } from 'react'

const Theme = createContext<any>(null)

export default function ThemeProvider({ children }: { children: ReactNode }) {
    const [darkTheme, setDarkTheme] = useState(true)

    function handleClick(){
        setDarkTheme((prev)=>!prev)
    }

    return (
        <Theme.Provider value={{ dark: darkTheme, setDarkTheme  : handleClick}}>
            {children}
        </Theme.Provider>
    )
}

export function useTheme() {
    const context = useContext(Theme)
    if (!context) {
        throw new Error('You are using it outside theme provider ')
    }
    return context
}
