import 'bootstrap/dist/css/bootstrap.min.css';
import lep from './img/lep.png'
import selfieN from './img/selfieN.png'
import selfieB from './img/selfieB.png'
import frontEnd from './img/frontEnd.png'
import design from './img/design.png'
import backEnd from './img/backEnd.png'
import git from './img/git.png'
import { Container, Col, Card, Row, Button } from 'react-bootstrap';
import { useState } from "react";

function Home() {
  const [top1, setTop] = useState('0px');

  return (<>
    <section>
      <Container className='pt-5'>
        <Col>
          <h1 className='text-center'>Designer, Full Stack Developer & Consultant</h1>
          <div className='text-center pt-4 lead'>I develop and code web applications ❤️</div>
          <Row className="justify-content-center mt-5 position-relative" >
          <img className="brows pe-none" src={selfieB} style={{ maxWidth: '250px', top:top1 }} />
            <img className="" onMouseEnter={() => setTop('-4px')} onMouseLeave={() => setTop('0px')} src={selfieN} style={{ maxWidth: '250px' }} />
          </Row>
          <Row className="justify-content-center mt-5 " >
            <img src={lep} style={{ maxWidth: '650px', marginBottom: '-1px' }} />
          </Row>

        </Col>

      </Container>
    </section>
    <section style={{ backgroundColor: '#6a2fea', color: 'white', paddingBottom: '16rem' }}>
      <Container className='py-10' >
        <Row className="mx-auto" style={{ maxWidth: '820px' }}>
          <h3 className="text-center ">Hi, I’m David. Nice to meet you.</h3>
          <div className="text-center pt-4">My journey as a full-stack developer began nearly 7 years ago, I've done remote work for agencies, consulted for startups, and collaborated with talented people to create digital products for both business and consumer use. I'm quietly confident, naturally curious, and perpetually working on improving my chops one design problem at a time.
          </div>
        </Row>
      </Container>
    </section>
    <section>
      <Container style={{ marginTop: "-14rem",  fontSize: "17px" }}>
        <Card>
          <div className="d-flex flex-wrap lh-base sCardC">
            <Col className="text-center p-5" >
              <Row className="justify-content-center mb-4 " >
                <img className={'imgTri'} src={design} style={{ maxHeight: '48px', width: 'auto' }} />
              </Row>
              <h5 className="fw-bold mb-2">Designer</h5>
              <p>I do simple content structures, clean design principles, and meaningful interactions.</p>
              <p className="text-primary fw-bold  mt-5 mb-1">Things I enjoy designing:</p>
              <p>UX, UI, Web, Mobile, Apps, Logos</p>
              <p className="text-primary fw-bold mt-5 mb-1">Design Tools:</p>
              <ul className="list-unstyled">
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>Indesign</li>
                <li>Canvas</li>
                <li>Pen &amp; Paper</li>
                <li>Calligrapher</li>
              </ul>
            </Col>

            <Col className="text-center lh-base p-5" >
              <Row className="justify-content-center mb-4" >
                <img className={'imgTri'}  src={frontEnd} style={{ maxHeight: '48px', width: 'auto' }} />
              </Row>
              <h5 className="fw-bold mb-2">Front-end Developer</h5>
              <p>I enjoy coding things from the ground up and bringing them to life in the browser. </p>
              <p className="text-primary fw-bold mt-5 mb-1">Languages:</p>
              <p>HTML, CSS, JavaScript, TypeScript</p>
              <p className="text-primary fw-bold mt-5 mb-1">Dev Tools:</p>
              <ul className="list-unstyled">
                <li>Bootstrap</li>
                <li>React</li>
                <li>jQuery</li>
                <li>Github</li>
                <li>VS Code</li>
                <li>Terminal</li>
                <li>Codepen</li>
                <li>Node.js</li>
              </ul>
            </Col>

            <Col className="text-center lh-base p-5" >
              <Row className="justify-content-center mb-4 " >
                <img className={'imgTriL'}  src={backEnd} style={{ maxHeight: '60px', width: 'auto', marginTop: '-11px'}} />
              </Row>
              <h5 className="fw-bold mb-2">Back-end Developer</h5>
              <p>I enjoy designing databases and seeing the data flow between them and the user.</p>
              <p className="text-primary fw-bold mt-5 mb-1">Languages:</p>
              <p>PHP, Python, Java, JavaScript</p>
              <p className="text-primary fw-bold mt-5 mb-1">Dev Tools:</p>
              <ul className="list-unstyled">
                <li>MySQL</li>
                <li>VS Code</li>
                <li>Terminal</li>
                <li>Apache</li>
                <li>WAMP/LAMP</li>
              </ul>
            </Col>
          </div>
        </Card>
      </Container>
    </section>
    <section className="visitSec" >
        <Container className="position-relative" style={{ top: "-14rem" }}>
        <Row className="m-auto" style={{ maxWidth: '1200px' }}>

          <Card bg={'dark'} key={'dark'} text={'white'} className="mb-2" >
            <Card.Body className="m-4">
              <Row className="align-content-center sRow">
                <Col className="column level-item d-flex">
                  <h3 className="title m-auto">Browse my projects</h3>
                </Col>
                <Col className="column level-item d-flex">
                  <p className="m-auto text-center" style={{ fontSize: '18px' }}>Want to see some of my code? Feel free to look at my GitHub!</p>
                </Col>
                <Col className="column level-item d-flex">
                  <Button style={{ maxHeight: '54px', borderRadius: '50px', borderWidth: '2px', fontWeight: 'bold', color: 'white' }} className="m-auto" variant="outline-primary" onClick={(e) => {
                    e.preventDefault();
                    window.open('https://github.com/axydavid?tab=repositories');
                  }}>&nbsp;&nbsp;&nbsp;&nbsp;            
                  <img className="position-relative imgButton1" src={git} style={{ maxWidth: '26px',top: "-2px" }} />
                  &nbsp;GitHub&nbsp;&nbsp;&nbsp;&nbsp;</Button>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          </Row>

        </Container>
    </section>
  </>
  );
}


export default Home;