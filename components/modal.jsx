import React, {useState} from "react";
import { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Image } from "react-bootstrap";
import AvisoFerias from '../assets/images/AvisoFerias.jpeg';

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
        <Image src={AvisoFerias} style={{width:'100%', marginTop:20}}/>
      </Modal.Body>
    </Modal>
  );
};

export default ModalAlerta;
