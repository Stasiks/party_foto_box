import { TextareaHTMLAttributes } from "react";

interface TextareaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
}

export const Textarea = ({ label, className = "", ...props }: TextareaProps) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-sm font-medium font-sans text-zinc-700">
        {label} {props.required && <span className="text-red-500">*</span>}
      </label>
      <textarea
        className={`w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50 font-sans text-zinc-900 focus:outline-none focus:border-red-500 focus:bg-white transition-colors min-h-[120px] ${className}`}
        {...props}
      />
    </div>
  );
};
