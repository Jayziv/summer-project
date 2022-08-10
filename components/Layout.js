import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div className="relative pt-20 md:pt-0">
            <Header />
            {children}
            <Footer />
        </div>
    );
}
