import clsx from 'clsx';

interface FormErrorProps {
  className?: string;
  children: React.ReactNode;
}

const FormError: React.FC<FormErrorProps> = ({ className, children }) => {
  return <p className={clsx(className, 'my-2 ml-2 text-xs text-red-400')}>{children}</p>;
};

export default FormError;
