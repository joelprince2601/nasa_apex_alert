'use client';

import React from 'react';
import { cn } from '@/lib/utils';

interface SmoothHoverProps {
  text: string;
  className?: string;
}

const SmoothHover = ({ text, className }: SmoothHoverProps) => {
  return (
    <div
      className={cn(
        'transition-all duration-300 ease-in-out hover:text-blue-400 hover:scale-105 cursor-pointer',
        className
      )}
    >
      {text}
    </div>
  );
};

export default SmoothHover;
