import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

// The Blog Page Content
export default function Blog({posts}){
    return <main className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-1 overflow-hidden py-4 bg-slate-800 rounded border-solid border border-slate-700 px-2">
        {posts.reverse().map(post => {
            //extract slug and frontmatter
            const {slug, frontmatter} = post
            //extract frontmatter properties
            var {title, author, category, date, bannerImage, tags} = frontmatter

            var bannerImageStripped = bannerImage.replace("![[", "/obsidian/images/");
            var bannerImageStripped = bannerImageStripped.replace("]]", "");
            var bannerImage = bannerImageStripped

            //JSX for individual blog listing
            return <article key={title} className="p-3 text-white ">
                <Link href={`/posts/${slug}`}>
                    <div className="cursor-pointer bg-slate-900 text-white inline-block rounded overflow-hidden	border hover:border border-transparent hover:border-slate-600">
                        <img className="w-screen" src={bannerImage}/>
                        <div className="p-5 text-slate-300">
                            <h2 className="font-bold">{title}</h2>
                            {/* <h3>{author}</h3> */}
                            <h3 className="italic mt-4 text-right">{date}</h3>
                        </div>
                    </div>
                </Link>
            </article>
        })}
    </main>
}

//Generating the Static Props for the Blog Page
export async function getStaticProps(){
    // get list of files from the posts folder
    const files = fs.readdirSync('public/obsidian/articles');

    // get frontmatter & slug from each post
    const posts = files.map((fileName) => {
        const slug = fileName.replace('.md', '');
        const readFile = fs.readFileSync(`public/obsidian/articles/${fileName}`, 'utf-8');
        const { data: frontmatter } = matter(readFile);
        
        return {
          slug,
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