import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import Logo from ".//../images/JNS-Logo.svg";
import EyesInGlasses from "./EyesInGlasses";
const navigationPages = [
  { key: "home", title: "Home", href: "/", alt: "Navigate to the homepage" },
  {
    key: "projects",
    title: "Projects",
    href: "/projects",
    alt: "Navigate to the project page",
  },
  {
    key: "blog",
    title: "Blog",
    href: "/blog",
    alt: "Navigate to the blog page",
  },
  {
    key: "contact",
    title: "Contact",
    href: "/contact",
    alt: "Navigate to the contact page",
  },
];

function Header(props) {
  return (
    <header className="container-content z-50 mx-auto mb-2 flex flex-row rounded border border-slate-700 bg-slate-800 drop-shadow-bds">
      <div id="logo-container" className="pt-2">
        <div className="logo-eyes-container absolute w-[100px] -ml-[4px] h-[23px]">
          <EyesInGlasses />
        </div>
        <Image className="" src={Logo} alt="Logo" width={90} height={40} />
      </div>

      {navigationPages.map((page) => {
        const { title, href } = page;

        return (
          <Link href={href} key={title}>
            <a className="border-b border-solid border-transparent px-4 py-4 text-slate-300 hover:border-slate-400  hover:bg-slate-700 hover:text-slate-100 sm:px-6">
              {title}
            </a>
          </Link>
        );
      })}
    </header>
  );
}

export default Header;
