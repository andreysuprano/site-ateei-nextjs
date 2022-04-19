import React from "react";
import { Container } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Autoplay, Pagination, EffectFade } from "swiper";
import { Link as ScrollLink } from "react-scroll";
import bgImage1 from "@images/backgrounds/slider-bg-1-1.jpg";
import bgImage2 from "@images/backgrounds/slider-bg-1-2.jpg";
SwiperCore.use([Autoplay, Pagination, EffectFade]);

const SliderOne = () => {
  const carouselOptions = {
    slidesPerView: 1,
    loop: true,
    effect: "fade",
    pagination: {
      el: "#main-slider-pagination",
      type: "bullets",
      clickable: true
    },
    autoplay: {
      delay: 5000
    }
  };
  return (
    <section className="main-slider">
      <Swiper className="thm-swiper__slider" {...carouselOptions}>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${bgImage1})` }}
          ></div>

          <Container>
            <div className="main-slider__box">
              <div className="block-title text-left">
                <p>
                  <span></span>Excelência em montagem de placas eletrônicas
                </p>
                <h3>
                  Qualidade e<span> Eficiência</span>
                </h3>
              </div>

              <p>
              A Ateei Group está sempre em busca da excelência para colocar-se à disposição de seus clientes sem deixar de adaptar os produtos às suas necessidades específicas.
              </p>
              <ScrollLink
                activeClass="current"
                className="thm-btn"
                role="button"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Saiba Mais <i className="fa fa-arrow-circle-right"></i>{" "}
              </ScrollLink>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${bgImage2})` }}
          ></div>

          <Container>
            <div className="main-slider__box">
              <div className="block-title text-left">
                <p>
                  <span></span>Tecnologia ao seu alcance
                </p>
                <h3>
                  Tenologia <span>de ponta</span>
                </h3>
              </div>

              <p>
                Possuímos uma linha de produção contando com maquinas de montagem SMT e THT trazendo assim a qualidade de solda de grandes fabricantes ao seu produto.
              </p>
              <ScrollLink
                activeClass="current"
                className="thm-btn"
                role="button"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
              Saiba Mais <i className="fa fa-arrow-circle-right"></i>{" "}
              </ScrollLink>
            </div>
          </Container>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="image-layer"
            style={{ backgroundImage: `url(${bgImage1})` }}
          ></div>

          <Container>
            <div className="main-slider__box">
              <div className="block-title text-left">
                <p>
                  <span></span>Qualidade sempre em foco
                </p>
                <h3>
                  Somos <span>certificados</span>
                </h3>
              </div>

              <p>
                Somos certificados na ISO 9001 e ISO 13485 entregando processos robustos e bem gerenciados, além de trabalharmos em conformidade com os regulamentos para produção de equipamentos médicos/hospitalares.
              </p>
              <ScrollLink
                activeClass="current"
                className="thm-btn"
                role="button"
                to="about"
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
              >
                Saiba Mais <i className="fa fa-arrow-circle-right"></i>{" "}
              </ScrollLink>
            </div>
          </Container>
        </SwiperSlide>
        <div className="swiper-pagination" id="main-slider-pagination"></div>
      </Swiper>
    </section>
  );
};

export default SliderOne;
