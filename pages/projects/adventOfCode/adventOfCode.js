import Link from "next/link";
import fs from "fs";

export default function AdventOfCode({ advents }) {
  return (
    <main className="container-content align-center mx-auto mt-2 flex flex-col justify-center self-auto align-middle text-slate-300">
      <div className="container-card grid-1234">
        {advents.map((advent) => {
          return (
            <div
              key={advent}
              className="container-card p-4 text-center text-4xl capitalize underline"
            >
              <Link href={`/projects/adventOfCode/${advent}/${advent}`}>
                {advent}
              </Link>
            </div>
          );
        })}
      </div>
    </main>
  );
}

export async function getStaticProps() {
  let advents = fs.readdirSync("pages/projects/adventOfCode").filter((file) => {
    return file !== "adventOfCode.js";
  });

  // let adventRoots = fs.readdirsync("pages/projects/adventOfCode/`${advents}`")

  return {
    props: {
      advents,
    },
  };
}
