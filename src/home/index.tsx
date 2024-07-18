import { Footer } from '../components/footer';
import { Header } from '../components/header';
import Hero from '../components/hero';
import Projects from '../components/projects';

import './style.css';

export default function Home(){
    return(
        <>
            <Header/>
            <Hero/>
            <Projects/>
            <Footer/>
        </>
    )
}