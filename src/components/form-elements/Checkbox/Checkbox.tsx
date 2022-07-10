import React, { InputHTMLAttributes } from 'react';

import s from './Checkbox.module.css';

import FormError from '@/components/form-elements/FormError';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  label?: string;
  name: string;
  error?: string;
}

const Checkbox = React.forwardRef<HTMLInputElement, Props>(
  ({ className, label, name, error, ...rest }, ref) => {
    return (
      <div className={className}>
        <div className='flex items-center'>
          <input
            id={name}
            ref={ref}
            name={name}
            type='checkbox'
            className={s.input}
            {...rest}
          />

          <label htmlFor={name} className='text-body font-poppins text-sm'>
            {label}
          </label>
        </div>

        {error && <FormError>{error}</FormError>}
      </div>
    );
  }
);

Checkbox.displayName = 'Checkbox';

export default Checkbox;
