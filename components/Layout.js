import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div className="relative px-2">
            <Header />
            {children}
            <Footer />
        </div>
    );
}
