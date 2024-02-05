import React from "react";

import styles from "./Block.module.scss";
import Image from "next/image";

export const Block = () => {
  return (
    <div className={styles.banner}>
      <div className={styles.banner_inner}>
        <Image width={387} height={394} alt="tooth" src="/tooth-1.png" />

        <div className={styles.block}>
          <h2 className={styles.title}>Welcome to Happy Smiles Dental</h2>

          <div className={styles.description}>
            A dynamic New Hyde Park Dentist office and progressive practice
            where the highest standard of care is paired with our concern for
            our patients’ comfort in procedures which range from pediatric
            dentistry to ensuring the health and beauty of our older patients’
            smiles through our expertise in all manner of restorative and
            cosmetic dentistry.
            <br />
            This approach sets patients on the road to recovery and long term
            oral health. Dr. Diana Gerov is trained in the latest technologies
            and procedures at New York University college of dentistry to meet
            all your oral healthcare needs. (516) 271-4215
          </div>
        </div>
      </div>
    </div>
  );
};
