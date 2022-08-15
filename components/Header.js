import Link from "next/link"

const navigationPages = [
    { key: 'home', title: 'Home', href: '/', alt: 'Navigate to the homepage' },
    { key: 'projekts', title: 'Projects', href: '/projekts', alt: 'Navigate to the project page' },
    { key: 'blog', title: 'Blog', href: '/blog', alt: 'Navigate to the blog page' },
    { key: 'contact', title: 'Contact', href: '/contact', alt: 'Navigate to the contact page' },
    
]

function Header (props){
    return  (
    
    <header
    className="flex flex-row left-0 top-0 drop-shadow-bds pb-2 z-50">
            <div className="flex flex-row overflow-hidden mx-auto py-0 bg-slate-800 rounded border border-slate-700">
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
            </div>       
        </header>
    )
}

export default Header