import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

// The page for each post
export default function Post({ frontmatter, content }) {
  var { title, author, category, date, bannerImage, tags } = frontmatter;
  var bannerImageStripped = bannerImage.replace("![[", "/BlogVault/images/");
  var bannerImageStripped = bannerImageStripped.replace("]]", "");
  var bannerImage = bannerImageStripped;
  var strippedContent = content.replace(
    "![[",
    "<img className='w-2/3 mx-auto my-4 border border-solid border-slate border-slate-700' src='/BlogVault/images/"
  );
  var strippedContent = strippedContent.replace("]]", "' />");

  return (
    <main className="container-content mx-auto flex flex-col justify-center self-auto align-middle text-slate-300">
      <div className="container-card flex justify-around p-4">
        <img
          className="border-slate h-60 w-60 border border-solid border-slate-700"
          src={bannerImage}
        />
        <div className="pl-3">
          <h1 className="mx-auto mb-2 text-4xl font-bold">{title}</h1>
          <h2 className="mb-2 text-xl ">
            Written by: {author} || Creation date: {date}
          </h2>
          <h3 className="border-slate border-b border-solid border-slate-700 pb-6">
            Category: {category} Tags: {tags.join()}
          </h3>
        </div>
      </div>

      <br />

      <ReactMarkdown
        components={{
          h3: ({ node, ...props }) => (
            <h3 className="mb-6 text-xl">{props.children}</h3>
          ),
          p: ({ node, ...props }) => <p className="my-3">{props.children}</p>,
          pre: ({ node, ...props }) => (
            <pre className="border-slate my-2 rounded border border-solid border-slate-700 bg-slate-900 p-4">
              {props.children}
            </pre>
          ),
          code: ({ node, ...props }) => (
            <code className="">{props.children}</code>
          ),
        }}
        rehypePlugins={[rehypeRaw]}
      >
        {strippedContent}
      </ReactMarkdown>
    </main>
  );
}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("public/BlogVault/articles");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      blogSlug: fileName.replace(".md", ""),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}

// Generate the static props for the page
export async function getStaticProps({ params: { blogSlug } }) {
  const fileName = fs.readFileSync(
    `public/BlogVault/articles/${blogSlug}.md`,
    "utf-8"
  );
  var { data: frontmatter, content } = matter(fileName);

  return {
    props: {
      frontmatter,
      content,
    },
  };
}
