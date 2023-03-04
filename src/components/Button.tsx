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
        `border border-gray-400
      px-4 py-1
      rounded
      flex items-center justify-center
      space-x-2`,
        className,
      ].join(' ')}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
