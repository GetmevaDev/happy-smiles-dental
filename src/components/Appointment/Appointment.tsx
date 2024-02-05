import React from "react";

import styles from "./Appointment.module.scss";
import Image from "next/image";
import { Button } from "@/ui/button/button";

export const Appointment = () => {
  return (
    <div className={styles.appointment}>
      <div className={styles.info}>
        <h1 className={styles.title}>Happy Smiles Dental In New Hyde Park</h1>

        <div className={styles.description}>
          General & Cosmetic Dentistry | 5 Star Patient Rating | Accepting New
          Patients | Dentist Near You
        </div>

        <div className={styles.make}>
          <Button>Make an appointment</Button>

          <div className={styles.phone}>
            <div className={styles.bg_phone}>
              <div className={styles.bg_phone_inner}>
                <Image alt="phone" width={24} height={24} src="/phone.svg" />
              </div>
            </div>

            <div className={styles.text}>
              <a href="tel:516-354-7551" className={styles.call}>
                Click to call
              </a>
              <div className={styles.number}>516-354-7551</div>
            </div>
          </div>
        </div>
      </div>

      <Image src="/tooth.png" alt="tooth" width={501} height={502} />
    </div>
  );
};
