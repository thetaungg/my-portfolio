import React from "react";
import DefaultLayout from "@/layouts/DefaultLayout";
import Header from "@/components/Header/Header.component";
import About from "@/components/About/About.component";
import MyProjects from "@/components/MyProjects/MyProjects.component";
import ContactMe from "@/components/ContactMe/ContactMe.component";

const IndexPage = () => (
    <DefaultLayout>
        <>
            <Header />
            <About />
            <MyProjects />
            <ContactMe />
        </>
    </DefaultLayout>
);

export default IndexPage;
