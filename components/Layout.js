import Content from "./Content.js";
import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";

import { useLayoutEffect } from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";

gsap.registerPlugin(CSSRulePlugin);

export default function Layout() {
  if (process.browser) {
    var marginTarget = document.getElementById("shapes-container");
    var style =
      marginTarget.currentStyle || window.getComputedStyle(marginTarget);

    window.addEventListener("resize", function () {
      let maxWidth = style.getPropertyValue("max-width");
      console.log(maxWidth);
    });
  }

  useLayoutEffect(() => {
    const lShape = "#v-shape-l";
    const rShape = "#v-shape-r";
    const diamondShape = "header .navigation-links";
    const heroContent = ".header-content";
    var buttonID = "#btn-stare";
    var button =
      typeof document !== "undefined" && document.querySelector(buttonID);

    // function fadeIn() {
    //   gsap.to(lShape, { duration: 0.5, x: 0, opacity: 1 });
    //   gsap.to(rShape, { duration: 0.5, x: 0, opacity: 1 });
    //   gsap.to(diamondShape, { duration: 0.5, y: 0, opacity: 1 });
    //   gsap.to(heroContent, { duration: 0.5, y: 0, opacity: 1 });

    //   return tl;
    // }

    function curtains() {
      let tl = gsap.timeline({ defaults: { ease: "back", duration: 1.55 } });
      tl.to(buttonID, {
        duration: 1.2,
        display: "none",
        opacity: 0,
        y: 100,
      });
      tl.to(heroContent, {
        duration: 0.1,
        display: "block",
      });
      tl.to(lShape, {
        x: -500,
      });
      tl.to(
        rShape,
        {
          x: 500,
          delay: 0.15,
        },
        "<"
      );
      tl.fromTo(
        diamondShape,
        {
          y: 70,
        },
        {
          delay: 0.23,
          opacity:1,
          y: 0,
          stagger: {
            each: 0.1,
            from: "center",
          },
        }
      );
      tl.fromTo(
        heroContent,
        {
          x: 30,
        },
        {
          x: 0,
          opacity: 1,
          stagger: {
            each: 0.26,
            from: "start",
          },
        },
        "1"
      );

      // build scene 1
      return tl;
    }

    let master = gsap.timeline();
    master.add(curtains());
    master.pause();

    button.addEventListener("click", function () {
      master.play();
    });

    return () => {};
  }, []);

  return (
    <div className="home-container relative" suppressHydrationWarning={true}>
      
      <div
        id="shapes-container"
        className="shapes-container container pointer-events-none absolute left-1/2 z-50 flex -translate-x-1/2 justify-center"
      >
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
