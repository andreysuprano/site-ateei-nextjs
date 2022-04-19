import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import personImage from "@images/resources/contact-person-1-1.png";

const ContactForm = () => {
  return (
    <section className="contact-one">
      <Container
            style={{ marginBottom:'100px'}}
      >
        <div className="inner-container">
          <Row className="align-items-end">
            <div className="col-sm-12 col-md-12 text-center text-md-center text-lg-center text-xl-left">
            </div>
            <div className="col-sm-12 col-md-12 col-lg-11">
              <form action="#" className="contact-one__form">
                <h3>Queremos conhecer você!</h3>
                <Row>
                  <div className="col-sm-12 col-md-6">
                    <div className="form-group">
                      <input type="text" placeholder="Seu nome" name="name" />
                      <i className="far fa-user"></i>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="form-group">
                      <input type="text" placeholder="Email" name="email" />
                      <i className="far fa-envelope-open"></i>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="form-group">
                      <input type="text" placeholder="Telefone" name="phone" />
                      <i className="far fa-phone"></i>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6">
                    <div className="form-group">
                      <input type="text" placeholder="Assunto" name="subject" />
                      <i className="far fa-edit"></i>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12">
                    <div className="form-group">
                      <textarea
                        name="message"
                        placeholder="Mensagem"
                      ></textarea>
                      <i className="far fa-comment"></i>
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-12">
                    <button type="submit" className="thm-btn">
                      Enviar
                      <i className="fa fa-arrow-circle-right"></i>
                    </button>
                  </div>
                </Row>
              </form>
            </div>
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default ContactForm;
