import Image from 'next/image'
import { user } from '../configs/user'

export default function Home() {
  return (
    <div className="container-content flex flex-col align-middle justify-center self-auto mx-auto text-slate-300 mt-2">
      <div className="container-card">
        <p className="text-center text-xl pt-24 px-3 text-slate-300"><strong className="text-2xl">Hi i&rsquo;m {user.userName}</strong><br />
          a {user.occupation} based in England.</p>
        <p className="text-center text-xl py-24 px-3 text-slate-300">I created this site / blog to learn about, store and share some of the things I create.<br/>As you can see this is a <strong>work in progress</strong>.</p>
      </div>
    </div>
  )
}
