import React, { InputHTMLAttributes } from 'react';

import s from './Input.module.css';

import clsxm from '@/lib/clsxm';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  Icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
  name: string;
  error?: string;
  type?: string;
  shadow?: boolean;
  showErrorMessage?: boolean;
  variant?: 'normal' | 'solid' | 'outline' | 'line';
  dimension?: 'small' | 'medium' | 'big';
}

const Input = React.forwardRef<HTMLInputElement, Props>(
  (
    {
      className,
      Icon,
      iconPosition = 'left',
      name,
      error,
      variant = 'normal',
      disabled = false,
      type = 'text',
      ...rest
    },
    ref
  ) => {
    const rootClasses = clsxm(s.root);

    const inputClasses = clsxm(className, s.input, {
      [s.normal]: variant === 'normal',
      [s.solid]: variant === 'solid',
      [s.outline]: variant === 'outline',
      [s.line]: variant === 'line',
      [s.disabled]: disabled,
      [s.error]: error,
    });

    return (
      <div className={rootClasses}>
        {iconPosition === 'left' && Icon}
        <input
          id={name}
          name={name}
          type={type}
          ref={ref}
          className={inputClasses}
          disabled={disabled}
          {...rest}
        />
        {iconPosition === 'right' && Icon}
      </div>
    );
  }
);

Input.displayName = 'Input';

export default Input;
