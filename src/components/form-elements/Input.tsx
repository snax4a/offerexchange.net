import React, { InputHTMLAttributes } from 'react';

import clsxm from '@/lib/clsxm';

import FormError from '@/components/form-elements/FormError';
import Label from '@/components/form-elements/Label';
import InputField from '@/components/Input/Input';

export interface Props extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  inputClassName?: string;
  label?: string | React.ReactNode;
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
      label,
      name,
      error,
      Icon,
      iconPosition,
      variant,
      disabled = false,
      showErrorMessage = true,
      type = 'text',
      inputClassName,
      ...rest
    },
    ref
  ) => {
    return (
      <div className={clsxm(className, 'relative text-left')}>
        {label && <Label htmlFor={name}>{label}</Label>}
        <InputField
          id={name}
          name={name}
          type={type}
          ref={ref}
          className={inputClassName}
          disabled={disabled}
          Icon={Icon}
          variant={variant}
          iconPosition={iconPosition}
          autoComplete='dummy_string_to_fix_edge_autocomplete_issue'
          autoCorrect='off'
          autoCapitalize='off'
          spellCheck='false'
          aria-invalid={error ? 'true' : 'false'}
          error={error}
          {...rest}
        />
        {error && showErrorMessage && (
          <FormError className='absolute -bottom-7'>{error}</FormError>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
export default Input;
