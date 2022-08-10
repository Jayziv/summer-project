import Image from 'next/image'

export default function Home() {
  return (
    <div className="container mx-auto">
      <p className="text-center text-xl pt-12 text-white">my.<a href="https://www.linkedin.com/in/jay-nicol-smith-bbb011151/" className=" text-blue-600 font-bold italic">linkedin</a></p>
      <p className="text-center text-xl pt-12 text-white">my.<a href="https://twitter.com/JayJayFae/" className=" text-blue-500 font-bold italic">twitta</a></p>
      <p className="text-center text-xl py-12 text-white">my.<a href="https://github.com/Jayziv" className="font-bold italic">github</a></p>
    </div>
  )
}
