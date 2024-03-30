import React from "react";
import { getImageUrl } from "../../utils";
import styles from "./Hero.module.css";
export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>{`Hi, I'm Ben`}</h1>
        <p
          className={styles.description}
        >{`IT intern eager to apply academic knowledge. Enthusiastic team player, proactive problem-solver, and tech enthusiast.`}</p>
        <a href="mailto:phatben234@gmail.com" className={styles.contactBtn}>Contact Me</a>
      </div>
      <img src={getImageUrl("hero/heroImage.png")} alt="Hero image of me" className={styles.heroImg} />
      <div className={styles.top} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
