import 'bootstrap/dist/css/bootstrap.min.css';
import room from './img/commercialRoom.jpg'
import fb from './img/fb.svg'
import li from './img/li.svg'
import vid from "./img/video.mp4";

import { Container, Col, Card, Row, Button } from 'react-bootstrap';
import { useState, useEffect, useRef } from "react";
import { Link } from 'react-router-dom'
import { CookiesProvider, useCookies } from "react-cookie";

function Home(props: any) {
  const [cookies, setCookie] = useCookies(["progress"]);
  const [blur, setBlur] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    handleChange(false)
    setBlur(true);
    if (videoRef !== null) videoRef.current!.playbackRate = 0.3;
  }, []);

  function handleChange(vari: boolean) {
    props.onChange(vari)

  }

  function onMouseD() {
    props.onMouseD();
  }

  return (
    <div className="d-flex flex-row " style={{ height: '100vh' }}>
      <div className="w-50 text-center d-flex flex-column ">
        {/* <img className={`position-absolute blurImg${blur && ' blurTrans'}`} src={room} /> */}
        <div className="w-100 h-100 d-flex flex-column backDrop">
          <div className='pt-5'>
            <h5>Christian Johansson</h5>
          </div>

          <div className='mt-auto' >
            <h1 style={{ fontWeight: '700', fontSize: '70px' }}>WELCOME</h1>
            <div className="d-inline-flex">
              <Link to="/enter" className="" onMouseDown={() => onMouseD()} onMouseUp={() => handleChange(true)}>
                <Button variant="outline-primary me-1" style={{ borderWidth: 2 }}> {cookies.progress > 1 ? 'Continue' : 'Start'} </Button>
              </Link>
              <Link to="/Contact" className="" onMouseDown={() => onMouseD()} onMouseUp={() => handleChange(true)}>
                <Button variant="outline-primary" style={{ borderWidth: 0, position: 'relative', top: '2px' }}> Contact </Button>
              </Link>

            </div>
          </div>

          <div className='pb-5 mt-auto'>
            <a className="me-1 effectButton" href="https://facebook.com/" >
              <img src={fb} />
            </a>
            <a className="effectButton" href="https://linkedin.com/">
              <img src={li} />
            </a>
          </div>
        </div>
        <video className="blurVid w-50 h-100" autoPlay src={vid} ref={videoRef} />

      </div>


      <div className="d-flex w-50">
        <img className="w-100" src={room} style={{ objectFit: 'cover' }} />
      </div>
    </div>
  );
}


export default Home;