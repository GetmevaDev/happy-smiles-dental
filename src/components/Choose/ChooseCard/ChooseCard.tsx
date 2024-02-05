import React, { FC } from "react";

import styles from "./ChooseCard.module.scss";
import classNames from "classnames";
import Image from "next/image";

type ChooseCardProps = {
  color?: string;
};

export const ChooseCard: FC<ChooseCardProps> = ({ color }) => {
  return (
    <div className={classNames(styles.choose_card)}>
      <Image width={100} height={100} src="/users.svg" alt="users" />

      <div className={styles.text}>Professional Team</div>
      <div className={styles.description}>
        We are a team of exceptional oral care experts offering personalized and
        high-quality dental care for the whole family. From routine cleaning to
        dental implants, we have the technology and experience to effectively
        and gently take care of your dental needs. When you visit our Kew
        Gardens Hills office with an emergency, or a check-up; your smile is our
        top priority. Our office features a staff of highly trained
        professionals committed to your satisfaction and comfort.
      </div>
    </div>
  );
};
