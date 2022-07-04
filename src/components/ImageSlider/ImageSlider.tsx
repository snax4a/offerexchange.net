import { a } from '@react-spring/web';
import { useKeenSlider } from 'keen-slider/react';
import React, { Children, isValidElement, useEffect, useRef, useState } from 'react';
import { useHover } from 'usehooks-ts';

import s from './ImageSlider.module.css';

import clsxm from '@/lib/clsxm';

import ImageSliderControl from '@/components/ImageSliderControl';

interface ImageSliderProps {
  children: React.ReactNode[];
  showThumbnails?: boolean;
  autoPlay?: boolean;
  className?: string;
}

const DEFAULT_AUTOPLAY_DELAY = 6000; // 6s

const ImageSlider: React.FC<ImageSliderProps> = ({
  children,
  autoPlay = true,
  showThumbnails = true,
  className = '',
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMounted, setIsMounted] = useState(false);
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const thumbsContainerRef = useRef<HTMLDivElement>(null);
  const isHover = useHover(sliderContainerRef);

  const [ref, slider] = useKeenSlider<HTMLDivElement>({
    loop: true,
    slides: { perView: 1, spacing: 50 },
    created: () => setIsMounted(true),
    slideChanged(s) {
      const slideNumber = s.track.details.rel;
      setCurrentSlide(slideNumber);

      if (thumbsContainerRef.current) {
        const $el = document.getElementById(`thumb-${slideNumber}`);
        if (slideNumber >= 3) {
          thumbsContainerRef.current.scrollLeft = $el?.offsetLeft ?? 0;
        } else {
          thumbsContainerRef.current.scrollLeft = 0;
        }
      }
    },
  });

  // Stop the history navigation gesture on touch devices
  useEffect(() => {
    const preventNavigation = (event: TouchEvent) => {
      // Center point of the touch area
      const touchXPosition = event.touches[0].pageX;
      // Size of the touch area
      const touchXRadius = event.touches[0].radiusX || 0;

      // We set a threshold (10px) on both sizes of the screen,
      // if the touch area overlaps with the screen edges
      // it's likely to trigger the navigation. We prevent the
      // touchstart event in that case.
      if (
        touchXPosition - touchXRadius < 10 ||
        touchXPosition + touchXRadius > window.innerWidth - 10
      )
        event.preventDefault();
    };

    const slider = sliderContainerRef.current;

    slider?.addEventListener('touchstart', preventNavigation);

    return () => {
      if (slider) {
        slider.removeEventListener('touchstart', preventNavigation);
      }
    };
  }, []);

  const onPrev = React.useCallback(() => slider.current?.prev(), [slider]);
  const onNext = React.useCallback(() => slider.current?.next(), [slider]);

  // Autoplay
  useEffect(() => {
    const autoPlayInterval = setInterval(() => {
      if (autoPlay && !isHover) onNext();
    }, DEFAULT_AUTOPLAY_DELAY);

    return () => clearInterval(autoPlayInterval);
  }, [autoPlay, isHover, onNext]);

  return (
    <div className={clsxm(s.root, className)} ref={sliderContainerRef}>
      <div ref={ref} className={clsxm(s.slider, { [s.show]: isMounted }, 'keen-slider')}>
        {slider && <ImageSliderControl onPrev={onPrev} onNext={onNext} />}
        {Children.map(children, (child) => {
          // Add the keen-slider__slide className to children
          if (isValidElement(child)) {
            return {
              ...child,
              props: {
                ...child.props,
                className: `${
                  child.props.className ? `${child.props.className} ` : ''
                }keen-slider__slide`,
              },
            };
          }
          return child;
        })}
      </div>

      {showThumbnails && (
        <a.div className={s.album} ref={thumbsContainerRef}>
          {slider &&
            Children.map(children, (child, idx) => {
              if (isValidElement(child)) {
                return {
                  ...child,
                  props: {
                    ...child.props,
                    className: clsxm(child.props.className, s.thumb, {
                      [s.selected]: currentSlide === idx,
                    }),
                    id: `thumb-${idx}`,
                    onClick: () => {
                      slider.current?.moveToIdx(idx);
                    },
                  },
                };
              }
              return child;
            })}
        </a.div>
      )}
    </div>
  );
};

export default ImageSlider;
