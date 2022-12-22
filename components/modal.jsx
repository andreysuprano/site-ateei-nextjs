import React, {useState} from "react";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Image } from "react-bootstrap";

const ModalAlerta = () => {
  const [show, setShow] = useState(true);
  const [visible, setVisible] = useState(false);

  const handleClose = () => setShow(false);

  useEffect(()=>{
    if(!visible){
      setTimeout(()=>{
        setShow(true);
        setVisible(true);
      }, 1500); 
    }
  });

  return (
    <Modal  show={show} onHide={handleClose}>
      {/* <Modal.Header closeButton>
        <Modal.Title>Aviso de férias!</Modal.Title>
      </Modal.Header>

      <Modal.Body>
        <p>Informamos a todos os nossos clientes, amigos e fornecedores que entraremos em recesso e férias coletivas. </p>
        <p>Com Início em <strong>26/12/22</strong>.</p>
        <p>E Retorno em <strong>16/01/23</strong>.</p>
      </Modal.Body> */}

      <Modal.Body>
        <div style={{display:'flex', justifyContent:'flex-end'}}>
          <i className="themify-icon-close" style={{fontSize:30, cursor:'pointer'}} onClick={()=>handleClose()}></i>
        </div>
        <Image src="https://firebasestorage.googleapis.com/v0/b/siteateei.appspot.com/o/COMUNICADO-DE-FE%CC%81RIAS.png?alt=media&token=3a1c0163-8e9d-40a3-a7a6-c9fc1d6e398d" style={{width:'100%', marginTop:20}}/>
      </Modal.Body>
    </Modal>
  );
};

export default ModalAlerta;
