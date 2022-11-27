import Animations from "./animations/Animations.js";
import Content from "./Content.js";
import Navigation from "./Navigation";
import Footer from "./Footer";

export default function Layout() {
  return (
    <div className="home-container relative" suppressHydrationWarning={true}>
      <Animations />
      <div
        id="shapes-container"
        className="shapes-container container pointer-events-none absolute left-1/2 z-50 flex -translate-x-1/2 justify-center"
      >
        <div
          id="v-shape-l"
          className="vshape jns-card pointer-events-none absolute top-72 block origin-top-left rotate-45 overflow-hidden drop-shadow lg:-top-20 xl:-top-72"
        ></div>
        <div
          id="v-shape-r"
          className="vshape jns-card pointer-events-none absolute top-72 block origin-top-right -rotate-45 overflow-hidden drop-shadow lg:-top-20 xl:-top-72"
        ></div>
      </div>
      <Content />
      <Navigation />
    </div>
  );
}
