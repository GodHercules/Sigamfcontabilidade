'use client';

import type { AnchorHTMLAttributes, MouseEvent, ReactNode } from 'react';

type SectionLinkProps = Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href' | 'onClick'> & {
  sectionId: string;
  children: ReactNode;
  onNavigate?: () => void;
};

function isModifiedEvent(event: MouseEvent<HTMLAnchorElement>) {
  return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey;
}

export function SectionLink({ sectionId, children, onNavigate, ...anchorProps }: SectionLinkProps) {
  const href = `/#${sectionId}`;

  const handleClick = (event: MouseEvent<HTMLAnchorElement>) => {
    if (event.defaultPrevented || isModifiedEvent(event) || event.button !== 0) {
      return;
    }

    event.preventDefault();

    const target = document.getElementById(sectionId);
    if (!target) {
      return;
    }

    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    target.scrollIntoView({
      behavior: prefersReducedMotion ? 'auto' : 'smooth',
      block: 'start',
    });

    window.history.replaceState({}, '', window.location.pathname + window.location.search);
    onNavigate?.();
  };

  return (
    <a {...anchorProps} href={href} onClick={handleClick}>
      {children}
    </a>
  );
}
