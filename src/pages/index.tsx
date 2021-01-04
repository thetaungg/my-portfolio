import React from "react";
import DefaultLayout from "../layouts/DefaultLayout";
import Header from "../components/Header/Header.component";
import About from "../components/About/About.component";
import MyProjects from "../components/MyProjects/MyProjects.component";

const IndexPage = () => (
  <DefaultLayout>
    <div>
      <Header />
      <About />
      <MyProjects />
    </div>
  </DefaultLayout>
);

export default IndexPage;
