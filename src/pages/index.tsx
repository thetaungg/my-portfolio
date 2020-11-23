import React from "react";
import Image from "../components/image";
import DefaultLayout from "../layouts/DefaultLayout";

const IndexPage = () => (
  <DefaultLayout>
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
  </DefaultLayout>
);

export default IndexPage;
