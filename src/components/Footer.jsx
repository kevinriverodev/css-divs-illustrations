import { FaLinkedin } from "react-icons/fa6";
import { FaSquareGithub } from "react-icons/fa6";
import classes from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={classes.footer}>
      <p className={classes.copyright}>Website and illustrations designed by <span>Kevin Rivero</span></p>
      <div className={classes.socialContainer}>
        <a href="https://www.linkedin.com/in/kevin-rivero-gonz%C3%A1lez-52652a1b7/" target="_blank"><FaLinkedin className={classes.icon}/></a>
        <a href="https://github.com/kevinriverodev" target="_blank"><FaSquareGithub className={classes.icon}/></a>
      </div>
    </footer>
  )
}