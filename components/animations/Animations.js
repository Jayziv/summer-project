import { gsap } from "gsap";
import { CSSRulePlugin } from "gsap/dist/CSSRulePlugin";
import { useLayoutEffect } from "react";

gsap.registerPlugin(CSSRulePlugin);
function Animations(props) {
  useLayoutEffect(() => {
    const lShapeDom = document.getElementById("v-shape-l");
    const rShapeDom = document.getElementById("v-shape-r");

    let buttonID = "#btn-stare";
    let button =
      typeof document !== "undefined" && document.querySelector(buttonID);
    let marginTarget = document.getElementById("shapes-container");
    let style =
      marginTarget.currentStyle || window.getComputedStyle(marginTarget);

    let maxWidth = style.getPropertyValue("max-width");
    let maxWidthNumber = parseInt(maxWidth, 10);
    let windowWidth = window.innerWidth;
    //let windowHeight = window.innerHeight; // Not used yet
    let vShapeOffset = windowWidth - maxWidthNumber;

    lShapeDom.style.left = -vShapeOffset + "px";
    rShapeDom.style.right = -vShapeOffset + "px";

    // This positioning etc I think is better done in CSS
    // but I wanted to do it in JS - so I did it in JS
    window.addEventListener("resize", function () {
      let maxWidth = style.getPropertyValue("max-width");
      let maxWidthNumber = parseInt(maxWidth, 10);
      let windowWidth = window.innerWidth;
      // let windowHeight = window.innerHeight;
      let vShapeOffset = windowWidth - maxWidthNumber;

      lShapeDom.style.left = -vShapeOffset + "px";
      rShapeDom.style.right = -vShapeOffset + "px";
    });

    const diamondShape = "header .navigation-links";
    const heroContent = ".header-content";

    const lShape = "#v-shape-l";
    const rShape = "#v-shape-r";

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
      tl.to(
        lShape,
        {
          x: -500,
        },
        "start"
      );
      tl.to(
        rShape,
        {
          x: 500,
        },
        "start"
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
            each: 0.75,
            from: "start",
          },
        },
        "3"
      );
      tl.fromTo(
        diamondShape,
        {
          y: 300,
        },
        {
          opacity: 1,
          y: 0,
          stagger: {
            from: "center",
          },
        }
      );

      // build scene 1
      return tl;
    }

    let master = gsap.timeline();
    master.pause();
    master.add(curtains());

    button.addEventListener("click", function () {
      master.play();
    });

    return () => {};
  }, []);
}

export default Animations;
