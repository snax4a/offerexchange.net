import clsx from 'clsx';

type Props = React.LabelHTMLAttributes<HTMLLabelElement> & {
  variant?: 'default' | 'light';
};

const Label: React.FC<Props> = ({
  className,
  children,
  variant = 'default',
  ...rest
}) => {
  return (
    <label
      {...rest}
      className={clsx('mb-3 block pl-2 text-sm leading-none', className, {
        'font-semibold': variant === 'default',
        'font-medium text-primary': variant === 'light',
      })}
    >
      {children}
    </label>
  );
};

export default Label;
