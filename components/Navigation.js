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
    <header
      id="navigation"
      className="bottom-100 fixed z-40 flex w-full justify-center text-center"
    >
      {navigationPages.map((page) => {
        const { title, href } = page;

        return (
          <div className="navigation-links relative z-30 w-32" key={title}>
            <Link href={href}>
              <a className="text-lg font-bold text-white">{title}</a>
            </Link>
            <div className="navigation-shape jns-card absolute top-40 left-1/2 z-10 flex -translate-x-1/2 -rotate-45 cursor-pointer bg-red-300"></div>
          </div>
        );
      })}
    </header>
  );
}

export default Navigation;
