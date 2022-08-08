import Link from "next/link";
import Header from "./Header";
import Footer from "./Footer";

export default function Layout({ children }) {
    return (
        <div className="container mx-auto">
            <Header />
            {children}
            <Footer />
        </div>
    );
}
