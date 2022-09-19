import { user } from '../configs/user';
function Footer(props) {
    return (
        <footer className="py-6 text-center sticky-bot">
            <p className="text-slate-300">Portfolio + Blog by {user.userName}<br />built with <span className="font-bold">NextJS</span> + <span className="font-bold">TailwindCSS</span></p>
        </footer>
    )
}

export default Footer