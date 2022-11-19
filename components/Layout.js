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
  // useLayoutEffect(() => {
  //   const lShape = "#v-shape-l";
  //   const rShape = "#v-shape-r";
  //   const tl = gsap.timeline({ defaults: { ease: "back", duration: 2 } });

  //   tl.to(
  //     lShape,
  //     {
  //       x: -500,
  //     },
  //     1
  //   );

  //   tl.to(
  //     rShape,
  //     {
  //       x: 500,
  //     },
  //     "<"
  //   );

  //   return () => {};
  // }, []);

  return (
    <div className="home-container">
      <div className="shapes-container">
        <div
          id="v-shape-l"
          className="vshape pointer-events-none absolute block h-screen w-screen origin-top-left rotate-45 overflow-hidden border bg-slate-400 text-blue-400"
        ></div>
        <div
          id="v-shape-r"
          className="vshape pointer-events-none absolute block h-screen w-screen origin-top-right -rotate-45 overflow-hidden border bg-slate-400"
        ></div>
      </div>

      <div className="container mx-auto text-white">
        <div className="">
          <div className="mt-12 mb-8 flex justify-center">
            <Image className="" src={Logo} alt="Logo" width={140} height={80} />
          </div>
          <h2 className="mt-6 text-center text-7xl font-semibold leading-8">
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
