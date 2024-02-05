"use client";

import classNames from "classnames";
import { useState } from "react";
import { GoStarFill } from "react-icons/go";

import { Button } from "../button/button";

import styles from "./rating.module.scss";

export const Rating = () => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState("");
  const [name, setName] = useState("");

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <div className={styles.rating_inner}>
      <div>
        <h2 className={styles.title}>Leave your own review</h2>

        <form
          acceptCharset="UTF-8"
          action="https://www.formbackend.com/f/6f02367c305cc066"
          className={styles.form}
          method="POST"
          onSubmit={submitForm}
        >
          <label className={styles.label} htmlFor="name">
            Your name*
            <input
              className={styles.input}
              id="name"
              name="name"
              onChange={(e) => setName(e.target.value)}
              placeholder="Please write a name"
              required
              value={name}
            />
          </label>

          <div className={styles.star_rating}>
            <span className={styles.label}>Your rating*</span>
            {Array.from({ length: 5 }, (_, index) => index + 1).map((index) => (
              <button
                key={index}
                aria-label={`Rate ${index} star${index > 1 ? "s" : ""}`}
                className={classNames(
                  styles.button,
                  index <= (hover || rating) ? styles.on : styles.off,
                )}
                onClick={() => setRating(index)}
                onDoubleClick={() => {
                  setRating(0);
                  setHover(0);
                }}
                onMouseEnter={() => setHover(index)}
                onMouseLeave={() => setHover(rating)}
                type="button"
              >
                <GoStarFill className="star" height={27} width={27} />
              </button>
            ))}
          </div>

          <label className={styles.label} htmlFor="review">
            Your review*
            <textarea
              className={styles.textarea}
              id="review"
              name="review"
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Please write a review"
              required
              rows={10}
              value={feedback}
            />
          </label>
          <Button className={styles.send} type="submit">
            Submit
          </Button>
        </form>
      </div>

      <div className={styles.map}>
        <iframe
          height="625"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6044.908682250772!2d-73.69869505476483!3d40.752030800912905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c260ee424f965f%3A0x3fe2726e12738bdf!2sDr.%20Diana%20Gerov%20DDS!5e0!3m2!1sru!2sru!4v1707146751790!5m2!1sru!2sru"
          style={{ border: 0 }}
          title="map"
          width="625"
        />
      </div>
    </div>
  );
};
