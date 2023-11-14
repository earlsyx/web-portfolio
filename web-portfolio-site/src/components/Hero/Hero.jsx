import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Earl Syx</h1>
        <p className={styles.description}>
          I'm a Fresh Graduate in Applied Mathematics, a full-stack developer, front-end and back-end. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:hernandezearlsyxmail@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img 
        src={getImageUrl("about/Aboutimage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
