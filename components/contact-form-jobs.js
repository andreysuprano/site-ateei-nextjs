import React from 'react';
import { Container, Row, Button, Spinner } from 'react-bootstrap';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import { uploadWithBase64 } from 'utils/firebase-utils';

const ContactForm = () => {
	const [ nome, setNome ] = useState();
	const [ loading, setLoading ] = useState(false);
	const [ email, setEmail ] = useState();
	const [ setor, setSetor ] = useState();
	const [ telefone, setTelefone ] = useState();
	const [ arquivo, setArquivo ] = useState();
	const [ arquivoLink, setArquivoLink ] = useState();
	const [ heading, setHeading ] = useState();
	const [ alertMessage, setAlertMessage ] = useState();
	const [ alertVariation, setAlertVariation ] = useState('warning');

	const [ show, setShow ] = useState(false);

	const handleFileChange = (event) => {
		const file = event.target.files[0];
	
		if (file) {
		  const reader = new FileReader();
	
		  reader.onload = (event) => {
			const base64String = event.target.result;
			setArquivo(base64String)
		  };
	
		  reader.readAsDataURL(file);
		}
	  };

	const handleForm = () => {
		setLoading(true);
		uploadWithBase64(arquivo).then((link)=>{
			const data = {
				nome,
				email,
				telefone,
				setor,
				arquivo: link,
			}

			fetch('https://andreysuprano-n8n.em5vrs.easypanel.host/webhook/send-mail', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json'
				},
				body: JSON.stringify(data)
			})

			setLoading(false);
			setShow(true)
		})
	};

	const handleClose = () => {
		setShow(false);
		window.location.reload();
	};

	return (
		<section className="contact-one">
			<Modal show={show} onHide={handleClose}>
				<Modal.Header closeButton>
					<Modal.Title>{heading}</Modal.Title>
				</Modal.Header>
				<Modal.Body>Sua candidatura foi enviada com sucesso, nosso time de recrutamento entrará em contato com você, <br></br>Obrigado por querer construir história com a Ateei!</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Fechar
					</Button>
				</Modal.Footer>
			</Modal>
			<Container style={{ marginBottom: '100px' }}>
				<div className="inner-container">
					<Row className="align-items-end">
						<div className="col-sm-12 col-md-12 text-center text-md-center text-lg-center text-xl-left" />
						<div className="col-sm-12 col-md-12 col-lg-11">
							<form action="#" className="contact-one__form">
								<h3>Queremos conhecer você!</h3>
								<Row>
									<div className="col-sm-12 col-md-6">
										<div className="form-group">
											<input
												type="text"
												placeholder="Seu nome"
												name="name"
												onChange={(e) => setNome(e.target.value)}
											/>
											<i className="far fa-user" />
										</div>
									</div>
									<div className="col-sm-12 col-md-6">
										<div className="form-group">
											<input
												type="text"
												placeholder="Email"
												name="email"
												onChange={(e) => setEmail(e.target.value)}
											/>
											<i className="far fa-envelope-open" />
										</div>
									</div>
									<div className="col-sm-12 col-md-6">
										<div className="form-group">
											<input
												type="text"
												placeholder="Telefone"
												name="phone"
												onChange={(e) => setTelefone(e.target.value)}
											/>
											<i className="far fa-phone" />
										</div>
									</div>
									<div className="col-sm-12 col-md-6">
										<div className="form-group">
										<select class="form-control" onChange={(e)=>{setSetor(e.target.value)}}>
											<option selected>Selecione o setor pretendido</option>
											<option value="Almoxarifado">Almoxarifado</option>
											<option value="Comercial">Comercial</option>
											<option value="Expedição">Expedição</option>
											<option value="Financeiro">Financeiro</option>
											<option value="Fiscal">Fiscal</option>
											<option value="GQ">GQ</option>
											<option value="Industrial/Projeto">Industrial/Projeto</option>
											<option value="Manutenção">Manutenção</option>
											<option value="PCP">PCP</option>
											<option value="Produção">Produção</option>
											<option value="Qualidade">Qualidade</option>
											<option value="Recebimento">Recebimento</option>
											<option value="RH">RH</option>
											<option value="Suprimentos">Suprimentos</option>
											<option value="TI">TI</option>
										</select>
										</div>
									</div>
									<div className="col-sm-12 col-md-12">
										<div className="form-group">
											<label for="exampleFormControlFile1">Anexe o seu curriculo no formato PDF</label>
											<input type="file" accept='.pdf' class="form-control-file" id="exampleFormControlFile1" onChange={(e)=>{handleFileChange(e)}}/>
										</div>
									</div>
									<div className="col-sm-12 col-md-12">
										<button type="button" className="thm-btn" onClick={handleForm}>
											{loading ? <Spinner animation="grow" variant="light" /> : <> Enviar <i className="fa fa-arrow-circle-right" /></> }
											
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
