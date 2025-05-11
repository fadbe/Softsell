import React from 'react';
import { cn } from '../utils/cn';

type ButtonProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className,
  ...props
}) => {
  const baseStyles = "rounded-lg font-medium transition-all duration-200 inline-flex items-center justify-center";
  
  const variantStyles = {
    primary: "bg-teal-600 text-white hover:bg-teal-700 active:bg-teal-800 shadow-md hover:shadow-lg",
    secondary: "bg-slate-800 text-white hover:bg-slate-900 active:bg-black shadow-md hover:shadow-lg",
    outline: "bg-transparent border-2 border-slate-800 text-slate-800 hover:bg-slate-50 active:bg-slate-100",
  };
  
  const sizeStyles = {
    sm: "text-sm px-4 py-1.5",
    md: "px-6 py-2.5",
    lg: "text-lg px-8 py-3",
  };
  
  return (
    <button 
      className={cn(
        baseStyles, 
        variantStyles[variant], 
        sizeStyles[size], 
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;