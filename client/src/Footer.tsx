import { Container, Row } from 'react-bootstrap';
import logoW from './img/logoW.png'
import { ReactComponent as Copy } from './img/copyright.svg'

import { ReactComponent as Bootstrap } from './img/bootstrap.svg'
import { ReactComponent as Css3 } from './img/css3.svg'
import { ReactComponent as Html5 } from './img/html5.svg'
import { ReactComponent as Js } from './img/js.svg'
import { ReactComponent as React } from './img/react.svg'
import { ReactComponent as Sass } from './img/sass.svg'
import { ReactComponent as Ts } from './img/ts.svg'



function Footer() {
    return (
        <footer className="text-center footer position-relative">
            <Container className='py-10' >
                <Row className="mx-auto" >
                    <div className="container is-narrow"><a className="logo" href="/"><img src={logoW} alt="Axy David | Designer, Front-end Developer &amp; Back-end Developer" height="48" /></a>
                        <div className="columns is-centered">
                            <div className="column is-one-third">
                                <div className='pt-4 lead fw-normal lh-sm' style={{fontFamily:"Titillium Web"}}>Live, learn &amp; progress  <br/>one day at a time.</div>
                            </div>
                        </div>
                        <div className="pt-5" style={{fontSize: '15px'}}>
                            Handcrafted by me
                            <span>
                                &nbsp;
                                <Copy style={{ margin: 'auto', maxWidth: '16px' }} />
                                &nbsp;
                            </span>
                            Axy David
                        </div>
                        <div className="made-by-bulma pt-5">
                            Made with: <br/>
                            <a className="btn btn-outline-light btn-sm m-1 aSpecial" href="https://getbootstrap.com/">
                            <Bootstrap className="bSpecial"/> Bootstrap
                            </a>
                            <a className="btn btn-outline-light btn-sm m-1 aSpecial" href="https://reactjs.org/">
                            <React className="bSpecial"/> React
                            </a>
                            <a className="btn btn-outline-light btn-sm m-1 aSpecial" href="https://www.typescriptlang.org/">
                            <Ts className="bSpecial"/> TypeScript
                            </a>
                            <a className="btn btn-outline-light btn-sm m-1 aSpecial" href="https://www.javascript.com/">
                            <Js className="bSpecial"/> JavaScript
                            </a>
                            <a className="btn btn-outline-light btn-sm m-1 aSpecial" href="https://html.spec.whatwg.org/multipage/">
                            <Html5 className="bSpecial"/> HTML5
                            </a>
                            <a className="btn btn-outline-light btn-sm m-1 aSpecial" href="https://www.w3.org/TR/CSS/">
                            <Css3 className="bSpecial"/> CSS3
                            </a>
                            <a className="btn btn-outline-light btn-sm m-1 aSpecial" href="https://sass-lang.com/">
                            <Sass className="bSpecial"/> SASS
                            </a>
                        </div>
                    </div>

                </Row>
            </Container>
        </footer>
    );
}


export default Footer;

