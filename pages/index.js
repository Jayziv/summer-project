import Image from "next/image";
import { user } from "../configs/user";

export default function Home() {
  return (
    <div className="container-content mx-auto mt-2 flex flex-col justify-center self-auto align-middle text-slate-300">
      <div className="container-card">
        <p className="px-3 py-24 text-center text-xl text-slate-300">
          <strong className="text-2xl">Hi i&rsquo;m {user.userName}</strong>
          <br />
          {user.occupation} based in England.
          <br />I enjoy making things that are good.
        </p>
      </div>
    </div>
  );
}
