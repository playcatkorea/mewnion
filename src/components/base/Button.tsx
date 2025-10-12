
import { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'secondary' | 'outline';
type Size = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: Variant;
  size?: Size;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  ...props
}: ButtonProps) {
  const baseClasses =
    'whitespace-nowrap cursor-pointer font-medium transition-all duration-300 rounded-full flex items-center justify-center';

  const variantClasses: Record<Variant, string> = {
    primary: 'bg-[#f6b73c] text-white hover:bg-[#e5a632] shadow-lg hover:shadow-xl',
    secondary: 'bg-[#7e5bef] text-white hover:bg-[#6d4ce0] shadow-lg hover:shadow-xl',
    outline: 'border-2 border-[#f6b73c] text-[#f6b73c] hover:bg-[#f6b73c] hover:text-white',
  };

  const sizeClasses: Record<Size, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const { disabled, ...rest } = props;

  return (
    <button
      {...rest}
      type={type}
      disabled={disabled}
      className={`${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className} ${
        disabled ? 'opacity-50 cursor-not-allowed' : ''
      }`}
    >
      {children}
    </button>
  );
}
