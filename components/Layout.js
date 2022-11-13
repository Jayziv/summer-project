import Link from "next/link";
import Image from "next/image"
import { gsap } from "gsap";
import Logo from ".//../images/JNS-Logo.svg"
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div>
            <div className="block before:absolute after:absolute before:origin-top-left before:rotate-45 before:block before:border before:w-full before:h-screen text-blue-400 w-full h-screen after:origin-top-right after:-rotate-45 after:block after:border after:w-full after:h-screen absolute overflow-hidden before:bg-slate-400 after:bg-slate-400">
           
            </div>
            <div className="container mx-auto text-white">
                <div className="">
                    <div className="self-center">
                        <Image className="" src={Logo} alt="Logo" width={90} height={40} />
                    </div>
                    <h2 className="leading-8 text-6xl text-center font-semibold mt-6">Developer.</h2>
                    <h2 className="leading-tight text-5xl italic text-center">Design.</h2>
                    <h2 className="leading-6 text-4xl text-center font-thin">Digital.</h2>
                </div>
                
                <div classnName="">
                    
                </div>
            </div>
        </div>
        
    );
}
