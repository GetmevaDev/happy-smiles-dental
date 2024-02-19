import { useState, useCallback } from 'react';
import type SwiperClass from 'swiper';

const useSwiperControl = () => {
  const [swiperRef, setSwiperRef] = useState<SwiperClass | null>(null);
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);

  const updateSwiperState = useCallback(() => {
    if (swiperRef) {
      setIsEnd(swiperRef.isEnd);
      setIsBeginning(swiperRef.isBeginning);
    }
  }, [swiperRef]);

  const handlePrevious = useCallback(() => {
    if (swiperRef) {
      swiperRef.slidePrev();
      updateSwiperState();
    }
  }, [swiperRef, updateSwiperState]);

  const handleNext = useCallback(() => {
    if (swiperRef) {
      swiperRef.slideNext();
      updateSwiperState();
    }
  }, [swiperRef, updateSwiperState]);

  return { swiperRef, setSwiperRef, isBeginning, isEnd, handlePrevious, handleNext };
};

export default useSwiperControl;
