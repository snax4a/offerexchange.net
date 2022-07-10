import { Listbox, Transition } from '@headlessui/react';
import { CheckIcon, ChevronDownIcon } from '@heroicons/react/solid';
import React from 'react';

import s from './SelectBox.module.css';

import clsxm from '@/lib/clsxm';

import Spinner from '@/components/Spinner';

const sizes = {
  big: 'py-3 lg:py-4 pl-5 pr-10',
  medium: 'py-3 lg:py-3 pl-5 pr-10',
  small: 'py-2 pl-4 pr-11',
  tiny: 'h-10 pl-4 pr-12 !text-sm !font-medium',
  test: 'pl-5 pr-10 h-12',
};

export interface SelectBoxOption {
  label: string;
  value: string;
}

export interface SelectBoxProps {
  value: SelectBoxOption;
  size?: keyof typeof sizes;
  disabled?: boolean;
  loading?: boolean;
  error?: boolean;
  options: SelectBoxOption[];
  onChange: (value: SelectBoxOption) => void;
  rootClassName?: string;
  buttonClassName?: string;
}

const SelectBox: React.FC<SelectBoxProps> = ({
  value,
  error,
  size = 'big',
  disabled = false,
  loading = false,
  options,
  rootClassName,
  buttonClassName,
  onChange,
}) => {
  const isDisabled = disabled || !options.length;

  return (
    <div className={clsxm('relative h-auto w-full', rootClassName)}>
      <Listbox value={value} onChange={onChange} disabled={isDisabled}>
        {({ open }) => (
          <>
            <Listbox.Button
              disabled={loading}
              className={clsxm(
                s.button,
                `${sizes[size]}`,
                {
                  'text-primary': !isDisabled,
                  '!cursor-not-allowed text-gray-300': isDisabled,
                  [s.error]: error,
                  [s.open]: open,
                },
                buttonClassName
              )}
            >
              <span className='block truncate'>{value?.label}</span>
              <span className='pointer-events-none absolute inset-y-0 right-0 flex items-center pr-4'>
                {loading ? (
                  <Spinner />
                ) : (
                  <ChevronDownIcon
                    width={24}
                    height={24}
                    aria-hidden='true'
                    className={clsxm('transition duration-200 ease-in-out', {
                      'rotate-180': open,
                      'text-gray-200': isDisabled,
                    })}
                  />
                )}
              </span>
            </Listbox.Button>

            <Transition
              as={React.Fragment}
              enter='transition ease-out duration-200'
              enterFrom='opacity-0 -translate-y-20'
              enterTo='opacity-100 translate-y-0'
              leave='transition ease-in duration-150'
              leaveFrom='opacity-100 translate-y-0'
              leaveTo='opacity-0 -translate-y-2'
            >
              <Listbox.Options className={s.optionContainer}>
                {options.map((option, index) => (
                  <Listbox.Option
                    key={index}
                    value={option}
                    className={({ active }) =>
                      `${
                        active ? 'bg-accent-2' : ''
                      } relative cursor-default select-none py-2.5 pl-9 pr-4 text-left text-sm outline-none`
                    }
                  >
                    {({ selected, active }) => (
                      <>
                        <span
                          className={`${
                            selected ? 'font-medium' : 'font-normal'
                          } block truncate`}
                        >
                          {option.label}
                        </span>
                        {selected && (
                          <span
                            className={`${active ? 'text-amber-600' : 'text-amber-600'}
                          absolute inset-y-0 left-0 flex items-center pl-3`}
                          >
                            <CheckIcon
                              className='h-4 w-4 text-secondary'
                              aria-hidden='true'
                            />
                          </span>
                        )}
                      </>
                    )}
                  </Listbox.Option>
                ))}
              </Listbox.Options>
            </Transition>
          </>
        )}
      </Listbox>
    </div>
  );
};

export default SelectBox;
