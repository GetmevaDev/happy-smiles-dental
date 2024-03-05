'use client';

import emailjs from '@emailjs/browser';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import type { FC } from 'react';
import React, { useState, useRef } from 'react';
import { GoStarFill } from 'react-icons/go';

import type { Review as IReview } from '@/types/home-page';
import { Button } from '@/ui/button/button';

import styles from './Review.module.scss';

export const Review: FC<{ leaveForm?: boolean; review: IReview }> = ({ leaveForm, review }) => {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);
  const [feedback, setFeedback] = useState('');
  const [reviewSent, setReviewSent] = useState(false);
  const [reviewSending, setReviewSending] = useState(false);
  const form = useRef<HTMLFormElement | null>(null);

  const sendEmail = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setReviewSending(true);

    emailjs
      .sendForm(review.serviceId, review.templateId, form.current || '', {
        publicKey: review.publicKey
      })
      .then(
        () => {
          setReviewSending(false);
          setReviewSent(true);
        },
        (error) => {
          setReviewSending(false);
          console.log('FAILED...', error);
        }
      );
  };

  if (!review) {
    return null;
  }

  return (
    <div className={styles.reviewWrapper}>
      <h2 className={styles.title}>Write A Review</h2>

      {reviewSent ? (
        <span className={styles.label}>{review.feedbackReceivedMessage}</span>
      ) : (
        <form ref={form} acceptCharset='UTF-8' className={styles.form} onSubmit={sendEmail}>
          <div className={styles.star_rating}>
            <h2 className={styles.title}>Step 1</h2>

            <span className={styles.label}>
              Thank you for visiting Happy Smiles Dental, please take a moment to leave feedback.
            </span>
            <div className={styles.starWrapper}>
              {Array.from({ length: 5 }, (_, index) => index + 1).map((index) => (
                <button
                  key={index}
                  aria-label={`Rate ${index} star${index > 1 ? 's' : ''}`}
                  className={classNames(
                    styles.button,
                    styles.star,
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
                  <GoStarFill />
                </button>
              ))}
            </div>
          </div>
          {!!rating && (
            <>
              <h2 className={styles.title}>Step 2</h2>

              {rating < 5 && (
                <>
                  <label className={styles.label} htmlFor='review'>
                    Please let us know in the text box below what we can do to improve our service.
                    <textarea
                      className={styles.textarea}
                      id='review_'
                      name='review'
                      onChange={(e) => setFeedback(e.target.value)}
                      required
                      rows={6}
                      value={feedback}
                    />
                  </label>
                  <Button
                    className={classNames(leaveForm ? styles.leaveBtn : styles.send)}
                    disabled={reviewSending}
                    type='submit'
                  >
                    Submit
                  </Button>
                </>
              )}
              {rating === 5 && (
                <Link
                  href={review.googleReviewUrl}
                  onClick={() => setReviewSent(true)}
                  target='_blank'
                >
                  <div className={classNames(styles.share_google, styles.label)}>
                    Share This Story! <Image alt='le' height={20} src='/google.png' width={60} />
                  </div>
                </Link>
              )}
            </>
          )}
        </form>
      )}
    </div>
  );
};
