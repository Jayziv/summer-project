import Link from "next/link";

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
];

function Navigation(props) {
  return (
    <header id="navigation" className="fixed z-40 flex w-full justify-center text-center bottom-100">
      {navigationPages.map((page) => {
        const { title, href } = page;

        return (
          <div className="navigation-links relative z-30 w-32">
            <Link href={href} key={title}>
              <a className="text-lg font-bold text-white">{title}</a>
            </Link>
            <div className="jns-card absolute top-32 -left-full z-10 flex h-96 w-96 -rotate-45 cursor-pointer bg-red-300"></div>
          </div>
        );
      })}
    </header>
  );
}

export default Navigation;
