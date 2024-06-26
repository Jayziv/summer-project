import fs from "fs";
import matter from "gray-matter";
import Image from "next/image";
import Link from "next/link";
function convertDate(inputFormat) {
  let parts = inputFormat.split("-");
  return new Date(parts[2], parts[1] - 1, parts[0]);
}
// The Blog Page Content
export default function Blog({ posts }) {
  posts.sort(
    (a, b) => convertDate(b.frontmatter.date) - convertDate(a.frontmatter.date)
  );
  return (
    <main className="container-content mx-auto mt-2 flex flex-col justify-center self-auto align-middle text-slate-300">
      <div className="container-card mb-2 text-slate-50">
        <p>
          I&rsquo;ve built this to act as my own CMS so I can create notes in my
          preferred note taking software (
          <a href="https://obsidian.md/" className="underline">
            Obsidian
          </a>
          ) to help crystalise things I&rsquo;m learning.
        </p>
        <p>
          There are clear bugs in how this is done currently and you&rsquo;ll
          see them littering my posts - I plan to address them, but who knows, I
          might not :)
        </p>
        <p>
          If you like this approach you can copy pretty much the whole repo at{" "}
          <a
            href="https://github.com/Jayziv/summer-project"
            target="_blank"
            className="underline"
            rel="noreferrer"
          >
            https://github.com/Jayziv/summer-project
          </a>
        </p>
      </div>
      <div className="container-card grid-1234 text-slate-50">
        {posts.map((post) => {
          //extract slug and frontmatter
          const { blogSlug, frontmatter } = post;

          //extract frontmatter properties
          var { title, author, category, date, bannerImage, tags } =
            frontmatter;

          //create pathing to bannerImage
          var bannerImageStripped = bannerImage?.replace(
            "![[",
            "/BlogVault/images/"
          );
          var bannerImageStripped = bannerImageStripped?.replace("]]", "");
          var bannerImage = bannerImageStripped;

          //JSX for individual blog listing
          return (
            <article key={title} className="image-card-p-2">
              <Link href={`/slugs/${blogSlug}`}>
                <div className="">
                  <img className="w-screen" src={bannerImage} />
                  <div className="p-5 text-slate-300">
                    <h2 className="font-bold">{title}</h2>
                    {/* <h3>{author}</h3> */}
                    <h3 className="mt-4 text-right italic">{date}</h3>
                  </div>
                </div>
              </Link>
            </article>
          );
        })}
      </div>
    </main>
  );
}

//Generating the Static Props for the Blog Page
export async function getStaticProps() {
  // get list of files from the posts folder
  const files = fs.readdirSync("public/BlogVault/articles");

  // get frontmatter & slug from each post
  const posts = files.map((fileName) => {
    const blogSlug = fileName.replace(".md", "");
    const readFile = fs.readFileSync(
      `public/BlogVault/articles/${fileName}`,
      "utf-8"
    );
    const { data: frontmatter } = matter(readFile);

    return {
      blogSlug,
      frontmatter,
    };
  });

  // Return the pages static props
  return {
    props: {
      posts,
    },
  };
}
