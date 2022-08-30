import { useEffect, useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Col, Container } from 'react-bootstrap';
// import { Stepper } from './modified_stepper';
import { ReactComponent as Logo } from './img/logo.svg'
import { CookiesProvider, useCookies } from "react-cookie";
// const Stepper:any = require('awesome-react-stepper')
interface Step {
  title: string;
  content?: JSX.Element;
  icon?: typeof Logo;
  href?: string;
  onClick?: () => void;
}

export default function Test() {
  useEffect(() => {
    // setCookie("progress", 1, {
    //   path: "/",
    //   maxAge: 31536000000,
    //   sameSite: "strict"
    // });
    for(let i=0;i<cookies.progress;i++)
    {
      console.log(i)
      setAct(i+1); 
    }
 
  }, []);
  const [cookies, setCookie] = useCookies(["progress"]);

  const [act, setAct] = useState(0);

  function handleCookie(location:number) {
    setCookie("progress", location, {
      path: "/",
      maxAge: 31536000000,
      sameSite: "strict"
    });
    console.log(location);
  }

  const pageControl = (location:number) => {
    if (location > steps.length-1 || location < 0) {
      return;
    }
    setAct(location);
    handleCookie(location);
  };

const steps: Array<Step> = [
  { title: 'Step 1', content: <div>1</div>, icon:Logo},
  { title: 'Step 2', content: <div>2</div>},
  { title: 'Step 3', content: <div>3</div>},
];

  return (
    <CookiesProvider>
    <Container>
      {/* <Stepper steps={steps} activeStep={act} completeBarColor="rgb(80, 150, 255)" size={52} titleTop={-1} lineMarginOffset={-1} /> */}
      <Button disabled={act===0?true:false} onMouseDown={() =>pageControl(act-1)}> Click - </Button>  
      <Button disabled={act===steps.length-1?true:false} onMouseDown={() =>pageControl(act+1)}> Click + </Button>
    </Container>
    </CookiesProvider>
  )
}