import * as React from 'react';

import clsxm from '@/lib/clsxm';

import UnstyledLink, { UnstyledLinkProps } from '@/components/links/UnstyledLink';

const PrimaryLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ className, children, ...rest }, ref) => {
    return (
      <UnstyledLink
        ref={ref}
        {...rest}
        className={clsxm(
          'inline-flex items-center',
          'font-medium text-indigo-600 hover:text-indigo-500',
          'focus:outline-none focus-visible:rounded focus-visible:ring focus-visible:ring-secondary focus-visible:ring-offset-2',
          className
        )}
      >
        {children}
      </UnstyledLink>
    );
  }
);

export default PrimaryLink;
