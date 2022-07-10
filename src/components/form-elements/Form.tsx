/* eslint-disable @typescript-eslint/no-explicit-any */
import { zodResolver } from '@hookform/resolvers/zod';
import { SubmitHandler, useForm, UseFormProps, UseFormReturn } from 'react-hook-form';

type FormProps<TFormValues> = {
  onSubmit: SubmitHandler<TFormValues>;
  children: (methods: UseFormReturn<TFormValues>) => React.ReactNode;
  options?: UseFormProps<TFormValues>;
  validationSchema?: any; // don't worry it's not important for this case
  className?: string;
  [key: string]: unknown;
};

const Form = <TFormValues extends Record<string, any> = Record<string, any>>({
  onSubmit,
  children,
  options,
  className,
  validationSchema,
  ...props
}: FormProps<TFormValues>) => {
  const methods = useForm<TFormValues>({
    ...(!!validationSchema && { resolver: zodResolver(validationSchema) }),
    ...(!!options && options),
  });
  return (
    <form
      onSubmit={methods.handleSubmit(onSubmit)}
      className={className}
      noValidate
      {...props}
    >
      {children?.(methods)}
    </form>
  );
};

export default Form;
