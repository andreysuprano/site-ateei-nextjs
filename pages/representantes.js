import React from "react";
import Layout from "@components/layout";
import HeaderTwo from "@components/header-two";
import BlogContent from "@components/blog-content";
import PageHeader from "@components/page-header";
import Footer from "@components/footer";
import MobileNav from "@components/mobile-nav";

const BlogDetails = () => {
  return (
    <Layout pageTitle="Ateei Group | Representantes">
      <HeaderTwo />
      <MobileNav />
      <PageHeader title={`Representantes`} />
      <BlogContent />
      <Footer />
    </Layout>
  );
};

export default BlogDetails;
