import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: React.ReactNode;
}

export default function Button({ 
  variant = 'primary', 
  size = 'md', 
  children, 
  className = '', 
  disabled,
  ...props 
}: ButtonProps) {
  const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-200';
  
  const variants = {
    primary: `bg-emerald-600 text-white hover:bg-emerald-700 focus:ring-4 focus:ring-emerald-300
              dark:bg-emerald-500 dark:hover:bg-emerald-600 dark:focus:ring-emerald-800
              disabled:bg-emerald-300 dark:disabled:bg-emerald-700`,
    secondary: `bg-amber-100 text-emerald-700 hover:bg-amber-200 focus:ring-4 focus:ring-amber-100
                dark:bg-amber-800 dark:text-emerald-100 dark:hover:bg-amber-700
                disabled:bg-amber-50 dark:disabled:bg-amber-900`,
    outline: `border-2 border-emerald-600 text-emerald-600 hover:bg-emerald-50 focus:ring-4 focus:ring-emerald-100
              dark:border-emerald-400 dark:text-emerald-400 dark:hover:bg-emerald-900
              disabled:border-emerald-300 dark:disabled:border-emerald-700`
  };

  const sizes = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-base',
    lg: 'px-6 py-3 text-lg'
  };

  return (
    <button
      className={`
        ${baseStyles} 
        ${variants[variant]} 
        ${sizes[size]} 
        ${disabled ? 'cursor-not-allowed opacity-60' : ''} 
        ${className}
      `}
      disabled={disabled}
      {...props}
    >
      {children}
    </button>
  );
}