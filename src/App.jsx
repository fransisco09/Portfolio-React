import './App.css';
import Contact from './sections/Contact/ Contact';
import Footer from './sections/Footer/Footer';
import Hero from './sections/Hero/Hero';
import Projects from './sections/Projects/Projects';
import Review from './sections/Review/Review';
import Skills from './sections/Skills/Skill';

function App() {
    return (
        <>
            <Hero />
            <Projects />
            <Skills />
            <Review />
            <Contact />
            <Footer />
        </>
    );
}

export default App;
