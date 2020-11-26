import React from "react";
import Button from "../../components/Button";
import Layout from "../../components/Layout/";

const Index = () => {
  return (
    <Layout>
      <Button isGreen={false}>Test</Button>
      <Button isGreen>Test</Button>
    </Layout>
  );
};

export default Index;
