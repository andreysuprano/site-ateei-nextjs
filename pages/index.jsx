import React from "react";
import Layout from "@components/layout";
import HeaderOne from "@components/header-one";
import MobileNav from "@components/mobile-nav";
import SliderOne from "@components/slider-one";
import About from "@components/about";
import Services from "@components/services";
import Institutional from "@components/institucional";
import Quality from "@components/quality";
import ContactTop from "@components/contact-top";
import ContactForm from "@components/contact-form";
import Head from 'next/head';
import Subscribe from "@components/subscribe";
import Footer from "@components/footer";
import CookieConsent from "react-cookie-consent";
import ModalAlerta from '../components/modal';

const Index = () => {
  return (
    <>
    <Head>
      <script src="//code.jivosite.com/widget/gTm2pRzqMY" async></script>
    </Head>
    <Layout pageTitle="Ateei Group | A Tecnologia ao seu alcance!">
      <HeaderOne />
      <MobileNav />
      <SliderOne />
      <About />
      <Services />
      <Quality />
      <Institutional />
      <ContactTop />
      <ContactForm />
      <Subscribe />
      <Footer />
      <CookieConsent
        location="bottom"
        buttonText="Aceitar os Cookies"
        cookieName="myAwesomeCookieName2"
        style={{ background: "#2B373B" }}
        buttonStyle={{ backgroundColor:"var(--primary)",color: "#2B373B", fontSize: "18px" }}
        expires={150}
        enableDeclineButton
        declineButtonStyle={{ fontSize: "18px" }}
        declineButtonText="Não Aceito"
        onDecline={() => {
          alert("nay!");
        }}
      >
        Ao clicar em "Aceitar todos os cookies", concorda com o armazenamento de cookies no seu dispositivo para melhorar a navegação no site, analisar a utilização do site e ajudar nas nossas iniciativas de marketing.{" "}
      </CookieConsent>
    </Layout>
    </>
  );
};

export default Index;
