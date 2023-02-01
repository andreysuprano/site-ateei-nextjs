import React from "react";
import Layout from "@components/layout";

import Miriam from "../../assets/images/cards/miriam.jpeg";
import Instagram from "../../assets/images/icons/instagram.svg";
import Linkedin from "../../assets/images/icons/linkedin.svg";
import WhatsApp from "../../assets/images/icons/whatsapp.svg";
import Location from "../../assets/images/icons/location.svg";
import Meet from "../../assets/images/icons/meet.svg";
import Link from "../../assets/images/icons/link.svg";
import Logo from "../../assets/images/logo-light.png";

import Footer from "../../components/footer";

const Blog = () => {
  return (
    <Layout pageTitle="Miriam Almeida | Digital Card">
      <div className="digital-card-bg">
        <a href="">
          <img src={Logo} className="card-logo" />
        </a>
        <div className="top-area">
          <div className="person-picture">
            <img src={Miriam} alt="" className="person-avatar" />
          </div>
          <div className="person-details">
            <h1 className="person-name">Miriam Almeida</h1>
            <div className="send-mail">
              <h6 className="send-mail-text">miriam.almeida@ateei.com.br</h6>
            </div>
            <p className="person-position">Analista de Novos Negócios</p>
          </div>
        </div>
        <div className="social">
          <div className="social-links">
            <div>
              <a href="">
                <img src={Instagram} alt="" className="social-link" />
              </a>
            </div>
            <div>
              <a href="">
                <img src={Linkedin} alt="" className="social-link" />
              </a>
            </div>
            <div>
              <a href="">
                <img src={WhatsApp} alt="" className="social-link" />
              </a>
            </div>
            <div>
              <a href="">
                <img src={Location} alt="" className="social-link" />
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom-sheet">
        <div className="bts-content">
          <div className="make-meet">
            <div className="meet-button">
              <img src={Meet} className="meet-icon" />
              <h3>Agendar uma reunião!</h3>
            </div>
          </div>
          <p className="presentation">
            Reconhecido ao longo da carreira profissional pelo respeito, ética e
            aprendizado rápido, com excelente capacidade de análise e raciocínio
            lógico. Disponível a atender as necessidades do ambiente que esta
            inserido, com máxima dedicação, presteza e atenção, focado em
            objetivos e metas se dedicando ao máximo para alcançar o que lhe é
            solicitado. Sou Fã de café e de atividades ao ar livre, sempre
            disposto a uma boa caminhada, tenho o bom humor como grande aliado
            com energia boa para enfrentar os desafios! A disposição para seu
            contato e para alcançarmos os objetivos juntos!”
          </p>
		  <div className="make-link">
            <div className="link-button">
              <img src={Link} className="meet-icon" />
              <h3>Apresentação comercial</h3>
            </div>
          </div>
		  <div className="make-link">
            <div className="link-button">
              <img src={Link} className="meet-icon" />
              <h3>Apresentação comercial</h3>
            </div>
          </div>
		  <div className="make-link">
            <div className="link-button">
              <img src={Link} className="meet-icon" />
              <h3>Apresentação comercial</h3>
            </div>
          </div>
        </div>
      </div>
	<Footer />
    </Layout>
  );
};

export default Blog;
