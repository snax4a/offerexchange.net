import React, { InputHTMLAttributes } from 'react';

import s from './Radio.module.css';

import FormError from '@/components/form-elements/FormError';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  name: string;
  id: string;
  error?: string;
  showErrorMessage?: boolean;
}

const Radio = React.forwardRef<HTMLInputElement, Props>(
  ({ className, label, name, id, error, showErrorMessage = true, ...rest }, ref) => {
    return (
      <div className={className}>
        <div className='flex items-center'>
          <input
            id={id}
            name={name}
            type='radio'
            ref={ref}
            className={s.input}
            {...rest}
          />

          <label htmlFor={id} className='text-body text-sm'>
            {label}
          </label>
        </div>

        {error && showErrorMessage && <FormError>{error}</FormError>}
      </div>
    );
  }
);

Radio.displayName = 'Radio';

export default Radio;
