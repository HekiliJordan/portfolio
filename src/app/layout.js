// Parent page, applies to all pages
import './globals.css'
import {Inter} from 'next/font/google'
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import {ThemeProvider} from "@/context/ThemeContext";
import AuthProvider from "@/components/AuthProvider/AuthProvider";

const inter = Inter({subsets: ['latin']})

export const metadata = {
    title: `My Portfolio`,
    description: `Hekili Jordan's portfolio`,
}

export default function RootLayout({children}) {
    return (
        <html lang="en">
        <body className={inter.className}>
        <ThemeProvider>
            <AuthProvider>
                <div className="container">
                    <Navbar/>
                    {children}
                    <Footer/>
                </div>
            </AuthProvider>
        </ThemeProvider>
        </body>
        </html>
    )
}
