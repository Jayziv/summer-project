import Image from "next/image";
import Logo from ".//../images/JNS-Logo.svg";

function Content(props) {
  return (
    <div className="container mx-auto text-white">
      <div id="glasses" className="mt-12 mb-8 flex justify-center">
        <Image className="" src={Logo} alt="Logo" width={140} height={80} />
      </div>
      <div id="hero-content">
        <h2 className="mt-6 text-center text-7xl font-semibold leading-8">
          Developer.
        </h2>
        <h2 className="text-center text-6xl italic leading-tight">Design.</h2>
        <h2 className="text-center text-5xl font-thin leading-6">Digital.</h2>
      </div>

      <div className="flex-center my-10 flex w-auto justify-center">
        <p id="btn-mellon" className="btn-mellon hover:x-4 my-4 w-auto border px-4 py-2 text-center font-semibold italic text-white hover:cursor-pointer">
          mellon
        </p>
      </div>
    </div>
  );
}

export default Content;
