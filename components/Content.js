import Image from "next/image";
import Logo from ".//../images/JNS-Logo.svg";

function Content(props) {
  return (
    <div className="container relative mx-auto text-white">
      <div id="glasses" className="mx-auto mt-12 mb-8 flex justify-center">
        <Image className="" src={Logo} alt="Logo" className="logo" />
      </div>
      <div id="hero-content" className="relative">
        <h2 className="header-content mt-6 text-center text-7xl font-semibold leading-8">
          Developer.
        </h2>
        <h2 className="header-content text-center text-6xl italic leading-tight">
          Design.
        </h2>
        <h2 className="header-content text-center text-5xl font-thin leading-6">
          Digital.
        </h2>
      </div>

      <div className="flex-center my-10 flex w-auto justify-center">
        <p
          id="btn-stare"
          className="btn-stare hover:x-4 my-4 w-auto border px-4 py-2 text-center font-semibold italic text-white hover:cursor-pointer"
        >
          its rude to stare
        </p>
      </div>
    </div>
  );
}

export default Content;
