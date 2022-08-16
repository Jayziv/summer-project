import fs from "fs";
import matter from "gray-matter";
import ReactMarkdown from "react-markdown";
import rehypeRaw from "rehype-raw";

// The page for each post
export default function Post({frontmatter, content}) {

    var {title, author, category, date, bannerImage, tags} = frontmatter
    var bannerImageStripped = bannerImage.replace("![[", "/obsidian/images/");
    var bannerImageStripped = bannerImageStripped.replace("]]", "");
    var bannerImage = bannerImageStripped
  
    // bannerImage = "/obsidian/images/" + bannerImage + ".png"

    var strippedContent = content.replace("![[", "<img className='w-2/3 mx-auto my-4 border border-solid border-slate border-slate-700' src='/obsidian/images/");
    var strippedContent = strippedContent.replace("]]", "' />")

    return <main className="w-2/3 flex flex-col align-middle justify-center self-auto mx-auto text-slate-300">
       <div className="flex p-4 container-card justify-around">
        <img className="w-60 h-60 border border-solid border-slate border-slate-700" src={bannerImage}/>
        <div className="pl-3">
          <h1 className="font-bold text-4xl mb-2 mx-auto">{title}</h1>
          <h2 className="text-xl mb-2 ">Written by: {author} || Creation date: {date}</h2>
          <h3 className="pb-6 border-b border-solid border-slate border-slate-700">Category: {category}  Tags: {tags.join()}</h3>
        </div>
       </div>
      
      
      <br/>

      <ReactMarkdown components={{
        h3: ({node, ...props}) => <h3 className="mb-6 text-xl">{props.children}</h3>,
        p: ({node, ...props}) => <p className="my-3">{props.children}</p>,
        pre: ({node, ...props}) => <pre className="bg-slate-900 border border-solid border-slate border-slate-700 rounded p-4 my-2">{props.children}</pre>,
        code :({node, ...props}) => <code className="">{props.children}</code>
      }} rehypePlugins={[rehypeRaw]}>{strippedContent}</ReactMarkdown>
        
    </main>
}

// Generating the paths for each post
export async function getStaticPaths() {
  // Get list of all files from our posts directory
  const files = fs.readdirSync("public/obsidian/articles");
  // Generate a path for each one
  const paths = files.map((fileName) => ({
    params: {
      slug: fileName.replace(".md", ""),
    },
  }));
  // return list of paths
  return {
    paths,
    fallback: false,
  };
}


// Generate the static props for the page
export async function getStaticProps({ params: { slug } }) {
    const fileName = fs.readFileSync(`public/obsidian/articles/${slug}.md`, 'utf-8');
    var { data: frontmatter, content } = matter(fileName);

    return {
      props: {
        frontmatter,
        content,
      },
    };
  }