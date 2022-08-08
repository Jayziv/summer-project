import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

// The Blog Page Content
export default function Blog({posts}){
    return <main className="bg-red-500 columns-3 gap-8 rounded">
        {posts.map(post => {
            //extract slug and frontmatter
            const {slug, frontmatter} = post
            //extract frontmatter properties
            var {title, author, category, date, bannerImage, tags} = frontmatter
            bannerImage = "/obsidian/images/" + bannerImage + ".png"

            //JSX for individual blog listing
            return <article key={title} className="p-5 text-white">
                <Link href={`/posts/${slug}`}>
                    <div className="cursor-pointer bg-white text-black inline-block rounded overflow-hidden	">
                        <img className="w-full" src={bannerImage}/>
                        <div className="p-5">
                            <h2 className="font-bold">{title}</h2>
                            <h3>{author}</h3>
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