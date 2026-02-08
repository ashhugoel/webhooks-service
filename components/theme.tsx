'use client'
import { Moon, Sun } from 'lucide-react'
import { Button } from './ui/button'
import { useTheme } from './provider/themeProvider'

export default function Theme() {
    const { darkTheme, setDarkTheme } = useTheme()

    return (
        <>
            <div>
                <Button
                    onClick={setDarkTheme}
                    className="fixed right-3 top-3 cursor-pointer "
                    variant="outline"
                    size="icon">
                    {darkTheme ? (
                        <Moon className=" h-[1.2rem] w-[1.2rem] scale-100  transition-all" />
                    ) : (
                        <Sun className="h-[1.2rem] w-[1.2rem] scale-100 rotate-0 transition-all" />
                    )}
                </Button>
            </div>
        </>
    )
}
