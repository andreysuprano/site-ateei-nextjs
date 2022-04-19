import React from "react";
import Layout from "@components/layout";
import HeaderOne from "@components/header-one";
import MobileNav from "@components/mobile-nav";
import SliderOne from "@components/slider-one";
import About from "@components/about";
import Services from "@components/services";
import Quality from "@components/quality";
import ContactTop from "@components/contact-top";
import ContactForm from "@components/contact-form";
import BlogHome from "@components/blog-home";
import Subscribe from "@components/subscribe";
import Footer from "@components/footer";
const Index = () => {
  return (
    <Layout pageTitle="Ateei Group | A Tecnologia ao seu alcance!">
      <HeaderOne />
      <MobileNav />
      <SliderOne />
      <About />
      <Services />
      <Quality />
      <ContactTop />
      <ContactForm />
      <Subscribe />
      <Footer />
    </Layout>
  );
};

export default Index;
