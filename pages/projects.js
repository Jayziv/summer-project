import Link from "next/link";

// The Blog Page Content
export default function Projects() {
  return (
    <main className="container-content align-center mx-auto mt-2 flex flex-col justify-center self-auto align-middle text-slate-300">
      <div className="container-card grid-1234">
        <p className="mx-auto text-center text-white ">
          <a
            className="text-4xl text-orange-500 underline"
            href="https://www.enrichmentmusic.co.uk"
            target="_blank"
            rel="noreferrer"
          >
            Enrichment Music
          </a>
          <br />
          <br />
          Built using <strong>NextJS</strong> and <strong>TailwindCSS</strong>{" "}
          for a friend who had a Wix site - so I recreated it and hosted it for
          him :)
        </p>
        <p className="mx-auto text-center text-white">
          <Link
            className="text-4xl underline"
            href="/projects/adventOfCode/adventOfCode"
          >
            Advent of Code
          </Link>
        </p>
        <p className="mx-auto text-center text-white">
          You&rsquo;re in one is that not enough. gawd.
        </p>
        <p className="mx-auto text-center text-white">
          You&rsquo;re in one is that not enough. gawd.
        </p>
      </div>
    </main>
  );
}
