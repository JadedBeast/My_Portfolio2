import styles from './HeroStyles.module.css';
import heroImg from '../../assets/My_Picture.png';
import eiffel from "../../assets/eiffel_tower.png"
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import linkedinLight from '../../assets/linkedin-light.svg';
import linkedinDark from '../../assets/linkedin-dark.svg';
import CV from '../../assets/cv.pdf';
import { useTheme } from '../../common/ThemeContext';

function Hero() {
  const { theme, toggleTheme } = useTheme();

  const themeIcon = theme === 'light' ? sun : moon;
  const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;

  return (
    <section id="hero" className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img
          src={heroImg}
          className={styles.hero}
          alt="Profile picture of Bahae-Eddine JMAHRI"
        />
        <img
          className={styles.colorMode}
          src={themeIcon}
          alt="Color mode icon"
          onClick={toggleTheme}
        />
      </div>
      <div className={styles.info}>
        <h1>
          Bahae-Eddine
          <br />
          JMAHRI
        </h1>
        <h2>Embedded Software Engineer</h2>
        <p className={styles.description}>
        <img
          src={eiffel}
          className={styles.parisIcon}
          alt="Eiffel tower icon"
        />
          <br />
          Based in Paris.
          <br />
          <span>
          <a href="https://www.linkedin.com/in/bahae-eddine-jmahri/" target="_blank">
            <img src={linkedinIcon}  className={styles.LinkedinIconConf} alt="Linkedin icon" />
          </a>
        </span>
        </p>


      </div>
    </section>
  );
}

export default Hero;
