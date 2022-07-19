import React from "react";
import NavBar from "@/components/NavBar/NavBar.component";
import SEO from "@/components/seo";
import Footer from "@/components/Footer/Footer.component";
import "@/assets/css/global.css";

const DefaultLayout = ({ title = "Hi, I'm Thet Aung", children }: LayoutProps) => {
    return (
        <>
            <SEO title={title} />
            <NavBar />
            <main style={{ maxWidth: `var(--max-width)`, margin: `0 auto` }}>{children}</main>
            <Footer />
        </>
    );
};

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
}

export default DefaultLayout;
