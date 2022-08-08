import fs from "fs";
import matter from "gray-matter";
import md from 'markdown-it';


// The page for each post
export default function Post({frontmatter, content}) {

    var {title, author, category, date, bannerImage, tags} = frontmatter
    bannerImage = "/obsidian/images/" + bannerImage + ".png"

    var strippedContent = content.replace("![[", "<img className='w-full' src='/obsidian/images/");
    var strippedContent = strippedContent.replace("]]", "' />")

    return <main>
        <img src={bannerImage}/>
        <h1 className="font-bold text-2xl mb-2">{title}</h1>
        <h2 className="text-xl mb-2">{author} || {date}</h2>
        <h3 className="mb-6">{category} || {tags.join()}</h3>
        <div dangerouslySetInnerHTML={{ __html: md().render(strippedContent) }} />
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