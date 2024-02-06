'use client';

import classNames from 'classnames';
import type { FC } from 'react';
import React, { useState } from 'react';
import { GoStarFill } from 'react-icons/go';

import { Button } from '@/ui/button/button';

import styles from './Review.module.scss';

export const Review: FC<{ leaveForm?: boolean }> = ({ leaveForm }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [name, setName] = useState('');

  const submitForm = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  return (
    <div>
      <h2 className={styles.title}>Leave your own review</h2>

      <form
        acceptCharset='UTF-8'
        action='https://www.formbackend.com/f/6f02367c305cc066'
        className={styles.form}
        method='POST'
        onSubmit={submitForm}
      >
        <label className={styles.label} htmlFor='name'>
          Your name*
          <input
            className={styles.input}
            id='name'
            name='name'
            onChange={(e) => setName(e.target.value)}
            placeholder='Please write a name'
            required
            value={name}
          />
        </label>

        <div className={styles.star_rating}>
          <span className={styles.label}>Your rating*</span>
          {Array.from({ length: 5 }, (_, index) => index + 1).map((index) => (
            <button
              key={index}
              aria-label={`Rate ${index} star${index > 1 ? 's' : ''}`}
              className={classNames(
                styles.button,
                index <= (hover || rating) ? styles.on : styles.off
              )}
              onClick={() => setRating(index)}
              onDoubleClick={() => {
                setRating(0);
                setHover(0);
              }}
              onMouseEnter={() => setHover(index)}
              onMouseLeave={() => setHover(rating)}
              type='button'
            >
              <GoStarFill className='star' height={27} width={27} />
            </button>
          ))}
        </div>

        <label className={styles.label} htmlFor='review'>
          Your review*
          <textarea
            className={styles.textarea}
            id='review'
            name='review'
            onChange={(e) => setFeedback(e.target.value)}
            placeholder='Please write a review'
            required
            rows={10}
            value={feedback}
          />
        </label>
        <Button className={leaveForm ? styles.leaveBtn : styles.send} type='submit'>
          Submit
        </Button>
      </form>
    </div>
  );
};
