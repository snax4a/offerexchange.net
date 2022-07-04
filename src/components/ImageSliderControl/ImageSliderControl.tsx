import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/solid';
import cn from 'clsx';
import { FC, memo, MouseEventHandler } from 'react';

import s from './ImageSliderControl.module.css';

interface ImageSliderControl {
  onPrev: MouseEventHandler<HTMLButtonElement>;
  onNext: MouseEventHandler<HTMLButtonElement>;
}

const ImageSliderControl: FC<ImageSliderControl> = ({ onPrev, onNext }) => (
  <div className={s.control}>
    <button className={cn(s.leftControl)} onClick={onPrev} aria-label='Previous Image'>
      <ArrowLeftIcon className='h-5 w-5' />
    </button>
    <button className={cn(s.rightControl)} onClick={onNext} aria-label='Next Image'>
      <ArrowRightIcon className='h-5 w-5' />
    </button>
  </div>
);

export default memo(ImageSliderControl);
