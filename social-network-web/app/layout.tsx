import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ReactNode } from "react";

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Social Network Next',
    description: 'Social network for testing Next JS',
}

interface Children {
    children: ReactNode
}

export default function RootLayout({children}: Children) {
    return (
        <html lang="it">
            <body className={inter.className}>
                {children}
            </body>
        </html>
    )
}
