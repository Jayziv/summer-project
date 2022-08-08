import Link from "next/link"

const navigationPages = [
    { key: 'home', title: 'Home', href: '/', alt: 'Navigate to the homepage' },
    { key: 'blog', title: 'Blog', href: '/blog', alt: 'Navigate to the blog page' },
    { key: 'contact', title: 'Contact', href: '/contact', alt: 'Navigate to the contact page' },
]

function Header (props){
    return  (
    
        <div className="py-6 flex flex-row ">
            <div className="overflow-hidden py-4 bg-slate-800 rounded border-solid border border-slate-700">
                {navigationPages.map(page => {
                    const { title, href } = page

                    return <Link
                    href={href}
                    key={title}>
                        <a
                        className="px-6 py-5 text-slate-300 hover:text-slate-100 hover:bg-slate-700"
                        >{title}</a>
                    </Link>
                })}
            </div>       
        </div>
    )
}

export default Header