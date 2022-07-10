import React, { TextareaHTMLAttributes } from 'react';

import s from '@/components/Input/Input.module.css';

import clsxm from '@/lib/clsxm';

import FormError from '@/components/form-elements/FormError';
import Label from '@/components/form-elements/Label';

export interface Props extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  className?: string;
  inputClassName?: string;
  label?: string | React.ReactNode;
  name: string;
  error?: string;
  shadow?: boolean;
  showErrorMessage?: boolean;
  variant?: 'normal' | 'solid' | 'outline' | 'line';
  dimension?: 'small' | 'medium' | 'big';
}

const Textarea = React.forwardRef<HTMLTextAreaElement, Props>(
  (
    {
      className,
      label,
      name,
      error,
      variant = 'normal',
      dimension = 'medium',
      shadow = false,
      disabled = false,
      showErrorMessage = true,
      inputClassName,
      ...rest
    },
    ref
  ) => {
    const inputClasses = clsxm(
      'py-4',
      s.input,
      {
        [s.normal]: variant === 'normal',
        [s.solid]: variant === 'solid',
        [s.outline]: variant === 'outline',
        [s.line]: variant === 'line',
        [s.disabled]: disabled,
        'focus:shadow': shadow,
        [s.error]: error,
        'text-sm h-10': dimension === 'small',
      },
      inputClassName
    );

    return (
      <div className={clsxm(className, 'relative text-left')}>
        {label && <Label htmlFor={name}>{label}</Label>}
        <textarea
          id={name}
          name={name}
          ref={ref}
          className={inputClasses}
          disabled={disabled}
          autoComplete='dummy_string_to_fix_edge_autocomplete_issue'
          autoCorrect='off'
          autoCapitalize='off'
          spellCheck='false'
          aria-invalid={error ? 'true' : 'false'}
          {...rest}
        />
        {error && showErrorMessage && (
          <FormError className='absolute -bottom-6'>{error}</FormError>
        )}
      </div>
    );
  }
);

Textarea.displayName = 'Textarea';
export default Textarea;
