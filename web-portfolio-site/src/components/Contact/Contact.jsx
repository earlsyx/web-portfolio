import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Contact.module.css";

export const Contact = () => {
    return (
    <footer  className={styles.container} id="contact">
        <div className={styles.text}>
            <h2>Contact</h2>
            <p>Feel free to reach out!</p>
        </div>
        <ul className={styles.links}>
            <li className={styles.link}>
                <img src={getImageUrl("contact/emailIcon.png")} alt = "Email Icon" />
            < a href="mailto:hernandezearlsyxmail@gmail.com">hernandezearlsyxmail@gmail.com</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/linkedinIcon.png")} alt = "Email Icon" />
            < a href="https://www.linkedin.com/in/earl-syx-hernandez-33a970155/">linkedin.com/earl-syx-hernandez</a>
            </li>
            <li className={styles.link}>
                <img src={getImageUrl("contact/githubIcon.png")} alt = "Github Icon" />
            < a href="https://www.github.com/earlsyx">github.com/earlsyx</a>
            </li>
        </ul>
    </footer>
    );
};