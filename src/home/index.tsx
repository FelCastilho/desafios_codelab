import { Header } from '../components/header';
import Hero from '../components/hero';
import { Projects } from '../components/projects';
import './style.css';

export function Home(){
    return(
        <>
            <Header/>
            <Hero/>
            <Projects/>
        </>
    )
}