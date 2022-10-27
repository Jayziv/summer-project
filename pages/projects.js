import fs from 'fs';
import matter from 'gray-matter';
import Link from 'next/link';

// The Project Page Content
export default function Project({projects}){

    const reversedProjects = projects.slice().reverse();

    return <main className="container-card grid-1234">
        {reversedProjects.map(project => {
            //extract slug and frontmatter
            const {slug, frontmatter} = project

            //extract frontmatter properties
            var {title, author, category, date, bannerImage, tags} = frontmatter

            //create pathing to bannerImage
            var bannerImageStripped = bannerImage.replace("![[", "/obsidian/images/");
            var bannerImageStripped = bannerImageStripped.replace("]]", "");
            var bannerImage = bannerImageStripped

            //JSX for individual Project listing
            return <article key={title} className="image-card-p-2">
                <Link href={`/projects/${slug}`}>
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

//Generating the Static Props for the Project Page
export async function getStaticProps(){
    // get list of files from the projects folder
    const files = fs.readdirSync('pages/projects');

    // get frontmatter & slug from each project
    const projects = files.map((fileName) => {

        const slug = fileName;
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
          projects,
        },
    };
}