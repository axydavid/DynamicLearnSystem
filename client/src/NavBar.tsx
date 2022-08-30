import Home from "./newHome";
import { data } from "./Data";
import Enter from './Enter';
import Test2 from './Test2';
import Add from './Add';

import { useState, useRef, useEffect } from "react";
import Contact from "./Contact";
import { HashRouter, Routes, Route, Link } from "react-router-dom";
import Logo from './img/logo.svg'
import Back from './img/backIcon.svg'
import BackBack from './img/backBack.svg'
import { Container, Navbar, Nav, NavItem } from 'react-bootstrap';
import StickyBox from "react-sticky-box";

export default function Main() {
    const delay = (ms: number) => new Promise(res => setTimeout(res, ms));
    const [colorL, setColorL] = useState<any>('rgba(0, 0, 0, 0.55)');
    const [show, setShow] = useState(true);
    const hashRev = useRef<(HTMLDivElement | null)>(null);
    document.body.style.transition = 'background .15s ease-out';

    useEffect(() => {
        hashRev.current!.className = 'cClass cClassShow';
        //preload img
        data.forEach((item) => {
            if (item.img !== undefined)
                item!.img.forEach((imge: any) => {
                    const img = new Image();
                    img.src = imge;
                });
        });
    }, []);

    const hideNav = async () => {
        if (window.innerWidth > 720) hashRev.current!.className = 'cClass';
    }

    const switchNav = async (color: boolean = false, button?: boolean) => {
        //e!.preventDefault();
        if (window.innerWidth < 720) hashRev.current!.className = 'cClass';

        if (window.innerWidth > 720) await delay(100);
        else await delay(0)
        hashRev.current!.className = 'cClass cClassShow';
        if (color) {
            setColorL('rgba(255, 255, 255, 0.55)');
            document.body.style.backgroundColor = "#2a2a2a";
            document.body.style.color = "white";
        }
        else {
            setColorL('rgba(0, 0, 0, 0.55)');
            document.body.style.backgroundColor = "unset";
            document.body.style.color = "unset";
        }
        button && setShow(false); window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });

    }

    function handleChange(vari: boolean) {
        console.log(vari);
        setShow(vari);
        switchNav(false)

    }

    return (
        <HashRouter>
            <div className='fixed-top pe-none'>
                {/* <div className="p-4 mb-5 d-none"> */}
                {/* <Navbar.Brand>
                                <Link style={{ color: colorL }} onClick={(e) => switchNav(false, e)} onMouseDown={hideNav} className="nav-link py-0" to="/">

                                    <Logo className="nav-logo" style={{ display: 'block', maxWidth: '60px', minWidth: '32px', width: '60px' }} /></Link>
                            </Navbar.Brand> */}
                <Nav className={`buttonNav justify-content-end ${show ? 'opacity-100 ' : 'opacity-0 translate-middle-y'}`}>
                    <Link className="backBack pe-all" style={{ backgroundImage: `url(${BackBack})` }} onClick={() => switchNav(false, true)} onMouseDown={hideNav} to="/" ><NavItem className="nav-link backButton" ><img style={{ width: '17px' }} src={Back} alt="Back" /></NavItem></Link>

                    {/* <NavItem ><Link style={{ color: colorL }} onClick={(e) => switchNav(false, e)} onMouseDown={hideNav} className="nav-link " to="/">Home</Link></NavItem>
                                <NavItem ><Link style={{ color: colorL }} onClick={(e) => switchNav(true, e)} onMouseDown={hideNav} className="nav-link " to="/portofolio">Course</Link></NavItem>
                                <NavItem ><Link style={{ color: colorL }} onClick={(e) => switchNav(false, e)} onMouseDown={hideNav} className="nav-link" to="/contact">Contact</Link></NavItem>
                                <NavItem ><Link style={{ color: colorL }} onClick={(e) => switchNav(false, e)} onMouseDown={hideNav} className="nav-link" to="/test">Labs</Link></NavItem>
                                <NavItem ><Link style={{ color: colorL }} onClick={(e) => switchNav(false, e)} onMouseDown={hideNav} className="nav-link" to="/test2">Labs2</Link></NavItem>
                                <NavItem ><Link style={{ color: colorL }} onClick={(e) => switchNav(false, e)} onMouseDown={hideNav} className="nav-link" to="/test3">Labs3</Link></NavItem> */}
                </Nav>
            </div>
            <div className="cClass content" ref={hashRev} >
                <Routes>
                    <Route path='/' element={<Home onChange={handleChange} onMouseD={hideNav} />} ></Route>
                    <Route path="/enter" element={<Enter />}></Route>
                    <Route path="/add" element={<Add />}></Route>
                    <Route path="/contact" element={<Contact />}></Route>
                </Routes>
            </div>
        </HashRouter>
    );
}