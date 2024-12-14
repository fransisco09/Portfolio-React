import React from 'react';
import styles from './HeroStyles.module.css';
import heroImg from '../../assets/hero-img.png';
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import instagramLight from '../../assets/twitter-light.svg';
import instagramDark from '../../assets/twitter-dark.svg';
import githubLight from '../../assets/github-light.svg';
import githubDark from '../../assets/github-dark.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemaContext';

function Hero() {
    const { theme, toggleTheme } = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const instagramIcon = theme === 'light' ? instagramLight : instagramDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

    return (
        <section
            id="hero"
            className={styles.container}
        >
            <div className={styles.colorModeContainer}>
                <img
                    className={styles.hero}
                    src={heroImg}
                    alt="Profile Picture"
                />
                <img
                    className={styles.colorMode}
                    src={themeIcon}
                    alt="Color Mode Icon"
                    onClick={toggleTheme}
                />
            </div>
            <div className={styles.info}>
                <h1>Daniel Fransisko Sitio </h1>
                <h2>Fullstack Developer</h2>
                <span>
                    <a
                        href="htpps://instagram.com/fransisco.09"
                        target="_blank"
                    >
                        <img
                            src={instagramIcon}
                            alt="Intagram Icon"
                        />
                    </a>
                    <a
                        href="htpps://instagram.com/fransisco.09"
                        target="_blank"
                    >
                        <img
                            src={githubIcon}
                            alt="Github Icon"
                        />
                    </a>
                    <a
                        href="htpps://linkedin.com/in/fransisco09"
                        target="_blank"
                    >
                        <img
                            src={linkedinIcon}
                            alt="Linkedin Icon"
                        />
                    </a>
                </span>
                <p className={styles.description}>With Passion in Web Dvelopment i wont to be a Fullstack Developer for comercial Bussines</p>
                <a
                    href={CV}
                    download
                >
                    <button className="hover">Resume</button>
                </a>
            </div>
        </section>
    );
}

export default Hero;
