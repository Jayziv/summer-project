import fs from "fs";
import matter from "gray-matter";

// enable html - oh no
var md = require('markdown-it')({
  html: true,
});

// The page for each post
export default function Post({frontmatter, content}) {

    var {title, author, category, date, bannerImage, tags} = frontmatter

    var bannerImageStripped = bannerImage.replace("![[", "/obsidian/images/");
    var bannerImageStripped = bannerImageStripped.replace("]]", "");
    var bannerImage = bannerImageStripped
  
    // bannerImage = "/obsidian/images/" + bannerImage + ".png"

    var strippedContent = content.replace("![[", "<img className='w-full' src='/obsidian/images/");
    var strippedContent = strippedContent.replace("]]", "' />")

    return <main className="w-2/3 flex flex-col align-middle justify-center self-auto mx-auto text-slate-300">
       
      <img className="mb-10 object-cover" src={bannerImage}/>
      <h1 className="font-bold text-2xl mb-2 mx-auto">{title}</h1>
      <h2 className="text-xl mb-2">Written by: {author} || Creation date: {date}</h2>

      <h3 className="mb-6">Category: {category}  Tags: {tags.join()}</h3>
      <div dangerouslySetInnerHTML={{ __html: md.render(strippedContent) }} />
        
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