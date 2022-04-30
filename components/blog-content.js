import React from "react";
import RepresentanteCard from '@components/representante-card'
import { REPRESENTANTES_DATA } from "@data/index";

const BlogContent = () => {
  return (
    <section className="blog-details" style={{backgroundColor:'#0a1829'}}>
      <div className="container">
        <div className="cards-box">
          {REPRESENTANTES_DATA.map((service, index) => (
            <RepresentanteCard data={service} key={`service-card-${index}`} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogContent;
