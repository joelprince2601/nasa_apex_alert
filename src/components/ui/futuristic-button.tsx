
'use client';

import Link from 'next/link';
import { cn } from '@/lib/utils';
import SmoothHover from './smooth-hover';

interface FuturisticButtonProps {
  text: string;
  href: string;
  className?: string;
}

const FuturisticButton = ({ text, href, className }: FuturisticButtonProps) => {
  const isExternal = href.startsWith('http');

  return (
    <Link
      href={href}
      target={isExternal ? '_blank' : undefined}
      rel={isExternal ? 'noopener noreferrer' : undefined}
      className={cn(
        'group relative inline-block p-2 sm:p-3 text-white font-nav text-xs sm:text-base transition-all duration-300 hover:bg-white/10 hover:shadow-lg rounded-md border border-transparent hover:border-blue-400/50',
        className
      )}
    >
      <SmoothHover text={text} />
    </Link>
  );
};

export default FuturisticButton;
