import React from "react";

import styles from "./Choose.module.scss";
import { ChooseCard } from "./ChooseCard/ChooseCard";

export const Choose = () => (
    <div className={styles.choose}>
      <div className={styles.choose_inner}>
        <h2 className={styles.title}>Why choose Happy Smiles Dental?</h2>
        <div className={styles.description}>
          We seek not only to meet your needs but also to exceed your
          expectations of how beneficial and comfortable a visit to the
          dentist’s office can be. We look forward to the opportunity to work
          with you in assessing and addressing what is (or is not!) necessary to
          bring your smile up to speed – as it is our hope for our patients that
          a properly-treated patient whose dental issues have been addressed
          should not experience a millisecond of self-consciousness when
          something inspires a genuine smile.
        </div>

        <div className={styles.cards}>
          <ChooseCard />
          <ChooseCard />
          <ChooseCard />
        </div>
      </div>
    </div>
  );
