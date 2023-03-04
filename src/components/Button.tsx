import React from 'react';

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  className?: string;
}

export default function Button({ children, onClick, className }: ButtonProps) {
  return (
    <button
      className={[
        `border 
      px-4 py-1
      rounded
      flex items-center justify-center
      space-x-2
      transition duration-150
      bg-white/20 backdrop-blur-sm hover:bg-white/50`,
        className,
      ].join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
