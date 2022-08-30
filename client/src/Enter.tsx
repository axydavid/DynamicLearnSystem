import { SetStateAction, useEffect, useState, useRef } from 'react';
import { sendData, getData } from './ServerCon';
import axios from 'axios';
import DOMPurify from 'isomorphic-dompurify';
import { CookiesProvider, useCookies } from "react-cookie";

import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, Row, Col, Container, Accordion } from 'react-bootstrap';
import { ReactComponent as Logo } from './img/logo.svg'
import { data } from './Data';
import StickyBox from "react-sticky-box";
const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export default function Test() {
  const [idList, setIdList] = useState<any>([]);
  const [accKey, setAccKey] = useState<any>([]);
  const [list, setList] = useState<any>([]);
  const [curID, setCurID] = useState(-1);
  const [content1, setContent1] = useState('');
  const [disable, setDisable] = useState(false);
  const [disable1, setDisable1] = useState(false);
  const [cookies, setCookie] = useCookies(["progress"]);
  const [f, setF] = useState(-1);

  useEffect(() => {
    axios.get(`http://localhost:3001/getList?type=all`)
      .then(res => {
        setIdList(res.data.data.map((data: any) => data.id));
        setList(res.data.data.map((data: any) => data));
        pageControl(cook);
        cook === 1 ? setDisable(true) : setDisable(false)

        // !idList.includes(cook) ? setDisable1(true) : setDisable1(false)
        // subjectList.map((category) => topicSel.current?.children.push(`<option value=${category}>${category}</option>`));

      });
    let cook: number = Number(cookies.progress);
    if(cookies.progress === undefined) cook = 1;


  }, []);

  useEffect(() => {
    if (f !== -1) hClick(undefined, f)
    window.scrollTo({top: 0, left: 0, behavior: 'smooth' });

  }, [f]);

  const pageControl = async (page: number, e?: any) => {
    if (e !== undefined) e.preventDefault();
    if (!idList.includes(page) && e !== undefined) return;
    
    let post = await axios.get(`http://localhost:3001/getPost?id=${page}`)
    setCurID(page);
    //if (e !== undefined || page !== 0)
    setContent1(post.data.data[0].content);
    if (!(!idList.includes(page - 1) && !idList.includes(page + 1))) {
      !idList.includes(page - 1) ? setDisable(true) : setDisable(false)
      !idList.includes(page + 1) ? setDisable1(true) : setDisable1(false)
    }
    //if(e === undefined) setF(2);

    // subjectList.map((category) => topicSel.current?.children.push(`<option value=${category}>${category}</option>`));
  }

  function groupBy(array: any, property: any) {
    let hash: any = {};
    for (var i = 0; i < array.length; i++) {
      if (!hash[array[i][property]]) hash[array[i][property]] = [];
      hash[array[i][property]].push(array[i]);
    }
    return hash;
  }

  const hClick = (e?: React.MouseEvent<HTMLElement, MouseEvent>, inp?: number) => {
    let ind, id: any;
    if (e !== undefined) {
      id = e!.currentTarget;
      id = id.firstChild.childNodes[1].data - 1;
      id = id.toString();
      ind = accKey.indexOf(id);
    } else if (inp !== undefined) {

      ind = accKey.indexOf(inp);
      id = inp.toString();
    }
    ind === -1 ? setAccKey((oldArray: any) => [...oldArray, id]) : setAccKey(accKey.filter((acc: string) => acc !== id));

  }

  function Accord(props: any) {
    let groupedData = groupBy(props.data1, 'subject');
    const ret: Array<JSX.Element> = [];

    Object.keys(groupedData).map((key: any, index: number) => {
      const ret1: Array<JSX.Element> = [];
      let data1 = groupedData[key];


      data1.map((data2: any, i: any) => {
        let d = '';

        if (data2.id === Number(curID)) {
          d = " ective";
          setF(index);
          setCookie("progress", curID, {
            path: "/",
            maxAge: 31536000000,
            sameSite: "strict"
          });
        }
        ret1.push(<div className={`d-flex p-2 subjButton${d}`} onMouseDown={(e) => pageControl(data2.id, e)}><div>{data2.id}. </div> <div><div id={data2.id.toString()} className="mx-1 d-flex "> {data2.title}</div><div className='topiButton mx-1 lh-sm' >{data2.topic}</div></div></div>);
        // if (data2.id === curID)hClick(undefined, index);
        // <div className="d-flex" onMouseDown={(e) => pageControl(e, data2.id)}><div id={data2.id.toString()} className="mx-1 d-flex"> {data2.id}.{data2.title}</div></div>
      });
      ret.push(<Accordion.Item style={{}} eventKey={index.toString()} key={index.toString()} ><Accordion.Header onMouseUp={(e) => hClick(e)} key={index.toString()}>Section {' ' + (index + 1)}: {data1[0].subject}</Accordion.Header>
        <Accordion.Body className="p-0">{ret1}</Accordion.Body>
      </Accordion.Item>);
      //
    })
    // if (f !== -1) { hClick(undefined, f); f = -1; }
    // props.data1.map((data: any, i:any) => {
    //   //  if(i===0 || data.subject!==list[i-1].subject)
    //   return <div className="d-flex" onMouseDown={(e) => pageControl(e, data.id)}><div id={data.id.toString()} className="mx-1 d-flex"> {data.id}.{data.title}</div></div>
    // })
    return (<Accordion className='my-auto w-100' defaultActiveKey={props.defaultActiveKey} alwaysOpen>
      {ret}
    </Accordion>)
  }

  return (
    <Container className="contentContainer" style={{ display: "flex", alignItems: "flex-start"}}>
      <StickyBox className="sticky opacity-50 optional" offsetTop={0}>
        <Col className="chapIndex w-100 d-flex" style={{ minHeight:'100vh' }}>
          <Accord className='' data1={list} defaultActiveKey={accKey} />
        </Col>
      </StickyBox>
      {/* <Col className="me-5" style={{ maxWidth: '25%', height: '100px' }}>
      </Col> */}
      <Col className="pt-5 ps-5 d-flex flex-column" style={{ minHeight: '100vh' }}>
        <div dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(content1) }} />
        <div className="py-4 mt-auto ms-auto opacity-50 optional">
          {/* //this is the dumbest bug in the universe of coding, all variable and params are type number, 
        //yet the compiler still sees them as strings, use Number to force the right type */}
          <Button className="me-1" disabled={disable} onMouseDown={(e) => pageControl(Number(curID * 1 - 1), e)}> Previous </Button>
          <Button disabled={disable1} onMouseDown={(e) => pageControl(Number(curID * 1 + 1), e)}> Next </Button>
        </div>
      </Col>
    </Container>
  );
}