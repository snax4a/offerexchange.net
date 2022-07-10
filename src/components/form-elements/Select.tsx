import clsx from 'clsx';
import { Control, Controller } from 'react-hook-form';

import FormError from '@/components/form-elements/FormError';
import Label from '@/components/form-elements/Label';
import SelectBox from '@/components/SelectBox';
import { SelectBoxOption } from '@/components/SelectBox/SelectBox';

interface SelectProps {
  control: Control;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  rules?: any;
  name: string;
  disabled?: boolean;
  loading?: boolean;
  error?: string;
  showErrorMessage?: boolean;
  className?: string;
  label?: string;
  size?: 'big' | 'medium' | 'small' | 'test';
  options: SelectBoxOption[];
}

const Select: React.FC<SelectProps> = ({
  name,
  rules,
  control,
  options,
  loading,
  disabled,
  className,
  label,
  error,
  showErrorMessage = true,
  size,
  ...rest
}) => {
  return (
    <Controller
      control={control}
      name={name}
      rules={rules}
      {...rest}
      render={({ field: { value, onChange } }) => {
        return (
          <div className={clsx(className, 'text-left')}>
            {label && <Label htmlFor={name}>{label}</Label>}
            <SelectBox
              value={value}
              onChange={onChange}
              size={size}
              loading={loading}
              options={options}
              disabled={disabled}
              error={!!error}
            />
            {showErrorMessage && error && <FormError>{error}</FormError>}
          </div>
        );
      }}
    />
  );
};

export default Select;
