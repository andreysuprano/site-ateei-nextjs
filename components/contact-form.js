import React from 'react';
import { Container, Row, Button, Spinner } from 'react-bootstrap';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

const ContactForm = () => {
	const [ nome, setNome ] = useState();
	const [ loading, setLoading ] = useState(false);
	const [ email, setEmail ] = useState();
	const [ assunto, setAssunto ] = useState();
	const [ telefone, setTelefone ] = useState();
	const [ mensagem, setMensagem ] = useState();
	const [ heading, setHeading ] = useState();
	const [ alertMessage, setAlertMessage ] = useState();
	const [ alertVariation, setAlertVariation ] = useState('warning');

	const [ show, setShow ] = useState(false);

	const handleForm = () => {
		if (!nome || !email || !assunto || !telefone) {
			setAlertMessage('Todos os campos são obrigatórios');
			setHeading('Erro');
			setAlertVariation('danger');
			return setShow(true);
		}

		const options = {
			method: 'POST',
			body: JSON.stringify({
				nome,
				email,
				assunto,
				telefone,
				mensagem
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		};
		setLoading(true);
		fetch('https://sitemail.ateei.com.br/ateei/mail', options)
			.then((response) => {
				if (response.status != 200) {
					setAlertMessage('Algo deu errado');
					setAlertVariation('danger');
					setHeading('Erro');
					setShow(true);
					setLoading(false);
					return;
				}
				setAlertMessage('Aguarde em breve nosso time comercial entrara em contato!');
				setAlertVariation('success');
				setHeading('Sucesso');
				setShow(true);
				setLoading(false);
			})
			.catch(() => {
				setAlertMessage('Algo deu errado');
				setAlertVariation('danger');
				setHeading('Erro');
				setShow(true);
				setLoading(false);
			});
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
				<Modal.Body>{alertMessage}</Modal.Body>
				<Modal.Footer>
					<Button variant="secondary" onClick={handleClose}>
						Close
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
											<input
												type="text"
												placeholder="Assunto"
												name="subject"
												onChange={(e) => setAssunto(e.target.value)}
											/>
											<i className="far fa-edit" />
										</div>
									</div>
									<div className="col-sm-12 col-md-12">
										<div className="form-group">
											<textarea
												name="message"
												placeholder="Mensagem"
												onChange={(e) => setMensagem(e.target.value)}
											/>
											<i className="far fa-comment" />
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
