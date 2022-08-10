import Link from "next/link"

const navigationPages = [
    { key: 'home', title: 'Home', href: '/', alt: 'Navigate to the homepage' },
    { key: 'blog', title: 'Blog', href: '/blog', alt: 'Navigate to the blog page' },
    { key: 'contact', title: 'Contact', href: '/contact', alt: 'Navigate to the contact page' },
]

function Header (props){
    return  (
    
        <div className="absolute left-0 top-0 flex flex-column md:width-screen">
            <div className="flex flex-row md:flex-col overflow-hidden py-0 md:py-4 bg-slate-800 rounded ">
                {navigationPages.map(page => {
                    const { title, href } = page

                    return <Link
                    href={href}
                    key={title}>
                        <a
                        className="px-6 py-4 md:py-5 text-slate-300 hover:text-slate-100 hover:bg-slate-700 border-b md:border-b-0 md:border-r border-solid border-transparent hover:border-slate-400">
                        {title}</a>
                    </Link>
                })}
            </div>       
        </div>
    )
}

export default Header