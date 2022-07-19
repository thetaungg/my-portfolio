import React from "react";
import SEO from "@/components/seo";
import "@/assets/css/global.css";

const EmptyLayout = ({ title = "Hi, I'm Thet Aung", children }: LayoutProps) => {
    return (
        <>
            <SEO title={title} />
            <main style={{ maxWidth: `var(--max-width)`, margin: `0 auto` }}>{children}</main>
        </>
    );
};

interface LayoutProps {
    children: React.ReactNode;
    title?: string;
}

export default EmptyLayout;
