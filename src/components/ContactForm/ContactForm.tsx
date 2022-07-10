import clsx from 'clsx';

import Button from '@/components/buttons/Button';
import Form from '@/components/form-elements/Form';
import Input from '@/components/form-elements/Input';
import Textarea from '@/components/form-elements/Textarea';

import { contactFormSchema } from './validation-schema';

export interface FormValues {
  fullName: string;
  email: string;
  phoneNumber: string;
  message: string;
}

interface ContactFormProps {
  className?: string;
  onSubmit: (data: FormValues) => void;
  isSubmitting: boolean;
}

const ContactForm: React.FC<ContactFormProps> = ({
  className,
  onSubmit,
  isSubmitting,
}) => {
  return (
    <Form<FormValues>
      onSubmit={onSubmit}
      validationSchema={contactFormSchema}
      className={clsx('w-full space-y-8', className)}
    >
      {({ register, formState: { errors } }) => (
        <>
          <Input
            type='text'
            variant='normal'
            {...register('fullName')}
            label='Imię i nazwisko'
            error={errors?.fullName && errors.fullName?.message}
          />
          <Input
            type='email'
            variant='normal'
            {...register('email')}
            label='Adres e-mail'
            error={errors?.email && errors.email?.message}
          />
          <Input
            type='text'
            variant='normal'
            {...register('phoneNumber')}
            label='Numer telefonu (opcjonalnie)'
            error={errors?.phoneNumber && errors.phoneNumber?.message}
          />
          <div>
            <Textarea
              rows={5}
              variant='normal'
              {...register('message')}
              label='Treść wiadomości'
              error={errors?.message && errors.message?.message}
            />
          </div>
          <Button
            type='submit'
            variant='primary'
            isLoading={isSubmitting}
            disabled={isSubmitting}
            className='w-full'
          >
            Wyślij wiadomość
          </Button>
        </>
      )}
    </Form>
  );
};

export default ContactForm;
