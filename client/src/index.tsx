import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import NavBar from './NavBar';
import Footer from './Footer';

import './Main.scss';

const root = createRoot(document.getElementById('root')!);
root.render( <StrictMode><NavBar/><Footer/></StrictMode>);
