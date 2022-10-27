import fs from 'fs';
import matter from 'gray-matter';
import Image from 'next/image';
import Link from 'next/link';

// The Blog Page Content
export default function Blog({posts}){

    const reversedPosts = posts.slice().reverse();

    return <main className="container-card grid-1234">
        {reversedPosts.map(post => {
            //extract slug and frontmatter
            const {blogSlug, frontmatter} = post

            //extract frontmatter properties
            var {title, author, category, date, bannerImage, tags} = frontmatter

            //create pathing to bannerImage
            var bannerImageStripped = bannerImage.replace("![[", "/BlogVault/images/");
            var bannerImageStripped = bannerImageStripped.replace("]]", "");
            var bannerImage = bannerImageStripped

            //JSX for individual blog listing
            return <article key={title} className="image-card-p-2">
                <Link href={`/slugs/${blogSlug}`}>
                    <div className="">
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
    const files = fs.readdirSync('public/BlogVault/articles');

    // get frontmatter & slug from each post
    const posts = files.map((fileName) => {
    const blogSlug = fileName.replace('.md', '');
    const readFile = fs.readFileSync(`public/BlogVault/articles/${fileName}`, 'utf-8');
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