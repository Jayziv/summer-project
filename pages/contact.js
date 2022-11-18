import Image from "next/image";

export default function Home() {
  return (
    <div className="container mx-auto">
      <p className="pt-12 text-center text-xl text-white">
        my.
        <a
          href="https://www.linkedin.com/in/jay-nicol-smith-bbb011151/"
          className=" font-bold italic text-blue-600"
        >
          linkedin
        </a>
      </p>
      <p className="pt-12 text-center text-xl text-white">
        my.
        <a
          href="https://twitter.com/JayJayFae/"
          className=" font-bold italic text-blue-500"
        >
          twitta
        </a>
      </p>
      <p className="py-12 text-center text-xl text-white">
        my.
        <a href="https://github.com/Jayziv" className="font-bold italic">
          github
        </a>
      </p>
    </div>
  );
}
