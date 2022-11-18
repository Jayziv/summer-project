import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import Logo from ".//../images/JNS-Logo.svg";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
  return (
    <div>
      <div className="absolute block h-screen w-full overflow-hidden text-blue-400 before:absolute before:block before:h-screen before:w-full before:origin-top-left before:rotate-45 before:border before:bg-slate-400 after:absolute after:block after:h-screen after:w-full after:origin-top-right after:-rotate-45 after:border after:bg-slate-400"></div>
      <div className="container mx-auto text-white">
        <div className="">
          <div className="self-center">
            <Image className="" src={Logo} alt="Logo" width={90} height={40} />
          </div>
          <h2 className="mt-6 text-center text-6xl font-semibold leading-8">
            Developer.
          </h2>
          <h2 className="text-center text-5xl italic leading-tight">Design.</h2>
          <h2 className="text-center text-4xl font-thin leading-6">Digital.</h2>
        </div>

        <div classnName=""></div>
      </div>
    </div>
  );
}
