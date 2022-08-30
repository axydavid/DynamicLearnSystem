import { useState, useEffect, useRef } from "react";
import SunEditor from 'suneditor-react';
import './modified_stepper/suneditor.min.css'; // Import Sun Editor's CSS File
import { Container, Button, Form, Col, Row } from 'react-bootstrap';
import axios from 'axios';

export declare type Option = string;

export default function Test3() {
  const [content, setContent] = useState('');
  const [title, setTitle] = useState('');
  const [subject, setSubject] = useState('');
  const [topic, setTopic] = useState('');
  const [id, setId] = useState(0);
  const [list, setList] = useState([]);
  const [toggleS, setToggleS] = useState(true)
  const [toggleT, setToggleT] = useState(true)
  const topicSel = useRef<any>(null);

  useEffect(() => {
    axios.get(`http://localhost:3001/getList?type=all`)
      .then(res => {
        setList(res.data.data);
        setId(res.data.data[res.data.data.length - 1].id + 1);
        // subjectList.map((category) => topicSel.current?.children.push(`<option value=${category}>${category}</option>`));
        //console.log(res.data.data);

      });
  }, []);

  const saveData = () => {
    // console.log(content);
    // console.log(title);
    // console.log(subject);
    // console.log(topic);

    try {
      axios.post(`http://localhost:3001/addArticle`, {
        title,
        content,
        subject,
        topic
        // ids:props.editPostID
      })
        .then(res => { // then print response status
          if (res.data.success === true) {
            //history.push('/');
            setId(id + 1)
            console.log("DONE")
          }
        })
    } catch (error) { throw error; }
    // axios.get(`http://localhost:3001/danger?type=${title}`)
    //   .then(res => {
    //     console.log(res.data)
    //   })
  }


  return (
    <Container className='mt-5 pt-5'>

      <SunEditor onChange={setContent} setOptions={{
        buttonList: [
          [
            "bold",
            "underline",
            "italic"],
          [
            "list",
            "align",
            "formatBlock"],
          [
            "table",
            "image",
            'codeView'
          ], ['undo', 'redo']
        ],
        defaultTag: 'div',
        textTags: { bold: 'strong' },
        mode: 'inline',
        font: ['Roboto'],
        fontSize: [17, 24, 32],
        imageUrlInput: false,
        imageAccept: '.jpg',
        defaultStyle: "font-family: Roboto; font-size: 1.2rem;",
        textStyles: [
          'translucent',
          { name: 'Emphasis', style: '-webkit-text-emphasis: filled;', tag: 'span' }
        ]
      }} />
      <p />

      <Row style={{ maxWidth: '800px' }} className="m-auto">
        <Col><Form.Label>Title</Form.Label><Form.Control placeholder="Title" onChange={e => setTitle(e.target.value)} /></Col>
        <Col style={{ maxWidth: '200px' }}><Form.Label>Subject</Form.Label>
          {toggleS ? (<Form.Select ref={topicSel} placeholder="Subject" onChange={e => setSubject(e.target.value)} onDoubleClick={() => setToggleS(false)}>
            {list.map((data: any) => <option value={data.subject}>{data.subject}</option>)}
          </Form.Select>) : (<Form.Control autoFocus onChange={e => setSubject(e.target.value)} onDoubleClick={() => setToggleS(true)} />)}
        </Col>

        <Col style={{ maxWidth: '200px' }}><Form.Label>Topic</Form.Label>
          {toggleT ? (<Form.Select placeholder="Topic" onChange={e => setTopic(e.target.value)} onDoubleClick={() => setToggleT(false)} >
            {list.map((data: any) => <option value={data.topic}>{data.topic}</option>)}
          </Form.Select>) : (<Form.Control autoFocus onChange={e => setTopic(e.target.value)} onDoubleClick={() => setToggleT(true)} />)}
        </Col>

        <Col style={{ maxWidth: '80px' }}><Form.Label>ID</Form.Label><Form.Control placeholder="ID" readOnly value={id} /></Col>
        <Col style={{ maxWidth: 'fit-content' }} className="d-flex"><Button className="mt-auto" onMouseDown={saveData} > Save </Button></Col>

      </Row>
      <p />
      <p />
    </Container>
  );
}
