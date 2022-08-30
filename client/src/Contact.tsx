import { Container, Col, Form, Row, Button } from 'react-bootstrap';
import { useRef, useState } from "react";

import selfieB from './img/selfieB.png'
import selfieN from './img/selfieN.png'
import selfieS from './img/selfieS.png'
import emailjs from '@emailjs/browser';

function Contact() {
  const form = useRef<any>();
  const textC = useRef<any>();
  const smil = useRef<any>();
  const [top1, setTop] = useState('0px');
  const [isDisabled, setDisabled] = useState(false);
  const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
  const sendEmail = async (e: any) => {
    e.preventDefault();

    textC.current.style.opacity = 0;
    emailjs.sendForm('service_p3u4adr', 'template_0jyarmn', form.current, '3-lia-PghOxw4NeYn')
      .then((result) => {

        // await delay(200);
        setDisabled(true);
        smil.current.style.opacity = 1;
        textC.current.innerHTML = "Your message has been received✔️<br>I will reply to you as soon as possible."
        textC.current.style.opacity = 1;
      }, (error) => {
        textC.current.style.opacity = 1;
        textC.current.innerHTML = "An error has occurred❌<br> Please try again."
      });


  };

  return (
    <Container className="pt-5 mt-5">

      <Row className="justify-content-center mt-5 position-relative pe-none logo" style={{ top: "-120px", marginBottom: "-120px" }}>
        <img ref={smil} className="smil" src={selfieS} style={{ maxWidth: '200px', zIndex: 1  }} />
        <img className="brows" src={selfieB} style={{ maxWidth: '200px', top: top1}} />
        <img className="pe-auto" onMouseEnter={() => setTop('-3px')} onMouseLeave={() => setTop('0px')} src={selfieN} style={{ maxWidth: '200px' }} />
      </Row>
      <p className='mt-5' />
      <Col className='m-auto text-center' style={{ maxWidth: "960px" }}>
        <h1 className='fw-normal recText' ref={textC}>Thanks for reaching out to me. <br />How can I help you today?</h1>

        <Form ref={form} onSubmit={sendEmail} className='m-auto py-5 text-start formEmail' style={{ maxWidth: "640px" }}  >
          <Row>
            <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput1" >
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" name="from_name" placeholder="" disabled={isDisabled} />
            </Form.Group>
            <Form.Group as={Col} className="mb-3" controlId="exampleForm.ControlInput2" >
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" name="reply_to" placeholder="" disabled={isDisabled} />
            </Form.Group>
          </Row>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" name="message" rows={5} disabled={isDisabled} />
          </Form.Group>
          <Row className="py-5">
            <Button className="m-auto btn-round " variant="outline-primary" type="submit" disabled={isDisabled}>
              Submit
            </Button>
          </Row>
        </Form>

      </Col>
    </Container>
  );
}


export default Contact;