import styles from './HeroStyle.module.css'
import heroimg from '../../assets/danna.jpg'
import sun from '../../assets/sun.svg';
import moon from '../../assets/moon.svg';
import twitterLight from '../../assets/twitter-light.svg'
import twitterDark from '../../assets/twitter-dark.svg'
import githubLight from '../../assets/github-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import cv from '../../assets/CV Danna.pdf'
import { useTheme } from '../../common/ThemeContext';

function Hero() {
    const {theme, toggleTheme} = useTheme();

    const themeIcon = theme === 'light' ? sun : moon;
    const twitterIcon = theme === 'light' ? twitterLight : twitterDark;
    const githubIcon = theme === 'light' ? githubLight : githubDark;
    const linkedinIcon = theme === 'light' ? linkedinLight : linkedinDark;
  return (
    <section id='hero' className={styles.container}>
      <div className={styles.colorModeContainer}>
        <img className={styles.hero} src={heroimg} alt='Profile picture'/>
        <img className={styles.colorMode} src={themeIcon} alt='color mode' onClick={toggleTheme}/>
      </div>
      <div className={styles.info}>
        <h1>
            Danna
            Saputra, S.Kom, M.Kom
        </h1>
        <h2>Fullstack Web Developer</h2>
        <span>
            <a href='https://twitter.com/' target='_blank'>
                <img src={twitterIcon} alt='twitter'/>
            </a>
            <a href='https://github.com/' target='_blank'>
                <img src={githubIcon} alt='github'/>
            </a>
            <a href='https://linkedin.com/' target='_blank'>
                <img src={linkedinIcon} alt='linkedin'/>
            </a>
        </span>
        <p>
            with a passion for developing modern website app for commercial bussiness.
        </p>
        <a href={cv} download>
            <button className='hover'> Resume</button>
        </a>
      </div>
    </section>
  )
}

export default Hero
