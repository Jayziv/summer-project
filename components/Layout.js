import Link from "next/link";
import Image from "next/image";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";
import Logo from ".//../images/JNS-Logo.svg";
import { useLayoutEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";

gsap.registerPlugin(CSSRulePlugin);

export default function Layout() {
  useLayoutEffect(() => {
    const leftV = CSSRulePlugin.getRule("#vshape::before");
    const rightV = "test";
    gsap.to(leftV, {
      backgroundColor: "#000",
    });

    console.log(leftV);
    console.log(rightV);

    return () => {};
  }, []);

  return (
    <div>
      <div
        id="vshape"
        className="vshape absolute block h-screen w-full overflow-hidden text-blue-400 before:pointer-events-none before:absolute before:block before:h-screen before:w-full before:origin-top-left before:rotate-45 before:border before:bg-slate-400 after:pointer-events-none after:absolute after:block after:h-screen after:w-full after:origin-top-right after:-rotate-45 after:border after:bg-slate-400"
      ></div>
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

        <div>
          <p className="thetween my-4 text-center font-semibold text-white">
            eqwe
          </p>
        </div>
      </div>
    </div>
  );
}
