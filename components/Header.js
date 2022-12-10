import Link from "next/link"
import Head from "next/head"
import Image from "next/image"
import Logo from ".//../images/JNS-Logo.svg"

const navigationPages = [
    { key: 'home', title: 'Home', href: '/', alt: 'Navigate to the homepage' },
    { key: 'projects', title: 'Projects', href: '/projects', alt: 'Navigate to the project page' },
    { key: 'blog', title: 'Blog', href: '/blog', alt: 'Navigate to the blog page' },
    { key: 'contact', title: 'Contact', href: '/contact', alt: 'Navigate to the contact page' },
    { key: 'elves', title:'Elves', href:'/projects/adventOfCode/elfsnacks', alt:'Navigate to the Elves '},
]

function Header (props){
    return  (
    
        <header
        className="container-content mx-auto flex flex-row drop-shadow-bds mb-2 z-50 bg-slate-800 rounded border border-slate-700">
            
            <div id="logo-container" className="pt-2">
                <div className="logo-eyes-container">
                    <div className="logo-eyes">
                    </div>

                    <div className="logo-eyes">
                    </div>
                </div>
                <Image className="" src={Logo} alt="Logo" width={90} height={40} />
            </div>

            {navigationPages.map(page => {
                const { title, href } = page

                return <Link
                href={href}
                key={title}>
                    <a
                    className="px-4 sm:px-6 py-4 text-slate-300 hover:text-slate-100 hover:bg-slate-700 border-b  border-solid border-transparent hover:border-slate-400">
                    {title}</a>
                </Link>
            })}
            
        </header>
    )
}

export default Header