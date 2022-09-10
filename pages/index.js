import Image from 'next/image'
import { user } from '../gitignore/user'

export default function Home() {
  return (
    <div className="container-card">
      <p className="text-center text-xl pt-24 px-3 text-slate-300"><strong className="text-2xl">Hi i&rsquo;m {user.userName}</strong><br />
        a {user.occupation} based in England.</p>
      <p className="text-center text-xl py-24 px-3 text-slate-300">I created this site / blog to learn about, store and share some of the things I create.</p>
    </div>
  )
}
