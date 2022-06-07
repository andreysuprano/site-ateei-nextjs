import React from "react";
import ServiceCard from "@components/service-card";
import { SERVICE_DATA } from "@data/index";

const Services = () => {
  return (
    <section className="service-one" id="services">
      <div className="container">
        <div className="block-title text-center">
          <p>
            <span></span>Porque nos escolher
          </p>
          <h3>
          Gerenciamento de projetos e suporte técnico <br />{" "}
            <span> estruturado e especializado, para que o seu produto possa ser entregue com efetividade no mercado!</span>
          </h3>
        </div>
        <div className="service-one__3-col">
          {SERVICE_DATA.map((service, index) => (
            <ServiceCard data={service} key={`service-card-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
