import { InputHTMLAttributes, ReactNode } from "react";

interface CheckboxProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "label"> {
  label: ReactNode;
}

export const Checkbox = ({ label, className = "", ...props }: CheckboxProps) => {
  return (
    <label className="flex items-start gap-3 cursor-pointer group">
      <input
        type="checkbox"
        className={`mt-1 w-4 h-4 text-red-500 focus:ring-red-500 accent-red-500 cursor-pointer ${className}`}
        {...props}
      />
      <span className="text-sm font-sans text-zinc-600 select-none leading-relaxed group-hover:text-zinc-900 transition-colors">
        {label}
      </span>
    </label>
  );
};
