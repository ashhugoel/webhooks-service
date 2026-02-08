'use client'
import { useTheme } from '@/components/provider/themeProvider'
import { ReactNode } from 'react'

export function HtmlBoilerPlate({ children }: { children: ReactNode }) {
    const { dark } = useTheme()

    return (
        <html lang="en" className={dark ? 'dark' : ''}>
            {children}
        </html>
    )
}
