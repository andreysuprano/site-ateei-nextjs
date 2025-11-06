import React from "react";
import ServiceCard from "@components/service-card";
import { MISSAO_DATA } from "@data/index";

const Institutional = () => {
  return (
    <section className="service-one" id="services">
      <div className="container">
        <div className="block-title text-center">
          <p>
            <span></span>Institucional
          </p>
          <h3>
          Empresa <br />{" "}
            
          </h3>
        </div>
        <div>
          <p className="institucional-text">
          A Ateei Group, iniciou as suas atividades em 2001 e vem se consolidando no mercado como referência em equipamentos de proteção e sinalização para a indústria e montagem de placas eletrônicas. Dentro deste grupo, encontram-se as empresas ATEEI e a ATEEI INTERNATIONAL, empresas que nasceram com o objetivo de prestar serviços para montagem de placas eletrônicas, desenvolvimento de produtos eletrônicos, montagens especiais, testes, importação de material eletrônico para a montagem das placas eletrônicas e parcerias em O&M / C&M. 
          Atuando na terceirização de Montagem de Placas e Produtos Eletrônicos (Contract Manufacturing) disponibiliza soluções em eletrônica para empresas com agilidade, qualidade e segurança, com os melhores recursos em tecnologia.
          
          <br></br><br></br>A Ateei Group utiliza todo o seu conhecimento e experiência para prestar serviços diversificados visando o aumento da competitividade de seus clientes como: administração de logística de insumos, montagem de placas utilizando a tecnologia de superfície (SMT) e a tecnologia tradicional (THT), além do desenvolvimento de projetos e testes funcionais.
          <br></br><br></br>
          </p>
        </div>
        // <div className="service-one__3-col">
        //   {MISSAO_DATA.map((service, index) => (
        //     <ServiceCard data={service} key={`service-card-${index}`} />
        //   ))}
        // </div>
      </div>
    </section>
  );
};

export default Institutional;

