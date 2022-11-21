import Content from "./Content.js";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";

import { useLayoutEffect } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

gsap.registerPlugin(CSSRulePlugin);

export default function Layout() {
  useLayoutEffect(() => {
    const lShape = "#v-shape-l";
    const rShape = "#v-shape-r";
    const diamondShape = "header .navigation-links";

    const tl = gsap.timeline({ defaults: { ease: "back", duration: 2 } });

    tl.to(
      lShape,
      {
        x: -500,
      },
      1
    );

    tl.to(
      rShape,
      {
        x: 500,
      },
      "<"
    );
    tl.from(
      diamondShape,
      {
        y: 300,
      },
      1
    );

    tl.to(
      diamondShape,
      {
        y: 0,
        stagger: {
          each: 0.2,
          from: "center",
        },
      },
      "<"
    );

    return () => {};
  }, []);

  return (
    <div className="home-container">
      <div className="shapes-container z-50">
        <div
          id="v-shape-l"
          className="vshape jns-card pointer-events-none absolute block origin-top-left rotate-45 overflow-hidden text-blue-400 drop-shadow"
        ></div>
        <div
          id="v-shape-r"
          className="vshape jns-card pointer-events-none absolute block origin-top-right -rotate-45 overflow-hidden drop-shadow"
        ></div>
      </div>
      <Content />
      <Navigation />
    </div>
  );
}
