import Link, { LinkProps } from 'next/link';
import * as React from 'react';

export type UnstyledLinkProps = {
  href: string;
  children: React.ReactNode;
  openNewTab?: boolean;
  className?: string;
  nextLinkProps?: Omit<LinkProps, 'href'>;
} & React.ComponentPropsWithRef<'a'>;

const UnstyledLink = React.forwardRef<HTMLAnchorElement, UnstyledLinkProps>(
  ({ children, href, openNewTab, className, nextLinkProps, ...rest }, ref) => {
    const isExternalLink = href && !href.startsWith('/') && !href.startsWith('#');

    if (!isExternalLink && !openNewTab) {
      return (
        <Link href={href} {...nextLinkProps}>
          <a ref={ref} {...rest} className={className}>
            {children}
          </a>
        </Link>
      );
    }

    return (
      <a
        ref={ref}
        target={openNewTab === undefined || openNewTab === true ? '_blank' : undefined}
        rel='noopener noreferrer'
        href={href}
        {...rest}
        className={className}
      >
        {children}
      </a>
    );
  }
);

export default UnstyledLink;
