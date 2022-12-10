import fs from 'fs';

export default function Elfsnacks() {

    const blob = fs.readFile;

    return (
    
        <div className="container-content flex flex-col align-middle justify-center self-auto mx-auto text-slate-300 mt-2">
            <div className="container-card">
                <p> a based in England.</p>
            </div>
        </div>
    
    )
}

export async function getStaticProps(){
    const file = fs.readFileSync('./data/elfsnacks.txt', 'utf-8');
}
