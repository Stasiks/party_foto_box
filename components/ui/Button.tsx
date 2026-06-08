import { ButtonHTMLAttributes, ReactNode } from "react";
import Link from "next/link";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string; // Если передан href, рендерим Link, иначе button
}

export const Button = ({ 
  children, 
  variant = "primary", 
  size = "md", 
  href,
  className = "",
  ...props 
}: ButtonProps) => {
  // Базовые стили для всех кнопок
  const baseStyles = "inline-flex items-center justify-center rounded-md font-heading transition-colors focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2";
  
  // Маппинг вариантов
  const variants = {
    primary: "bg-red-500 text-white hover:bg-orange-500 shadow-sm",
    secondary: "bg-zinc-100 text-zinc-900 hover:bg-zinc-200",
    outline: "border-2 border-zinc-200 text-zinc-900 hover:border-red-500 hover:text-red-500",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const combinedClasses = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {children}
      </Link>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {children}
    </button>
  );
};