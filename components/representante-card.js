import React from "react";

const RepresentanteCard = ({ data }) => {
  const { pais, nome, endereco, telefone, site, email } = data;
  return (
    <div
      className="service-one__single"
      data-wow-duration="1500ms"
      data-wow-delay="100ms"
    >
      <h3>{pais}</h3>
      <p>{nome}</p>
      <p>{endereco}</p>
      <p>Telefone: {telefone}</p>
      <p>Site: {site}</p>
      <p>Email: {email}</p>
    </div>
  );
};

export default RepresentanteCard;
