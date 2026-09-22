import React from 'react';
import { ThemeMode } from '../types';
import { Check, AlertCircle } from 'lucide-react';

interface FormInputProps {
  id: string;
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  type?: string;
  error?: string;
  isValid?: boolean;
  theme: ThemeMode;
  isRequired?: boolean;
  disabled?: boolean;
}

export const FormInput: React.FC<FormInputProps> = ({
  id,
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  error,
  isValid,
  theme,
  isRequired = false,
  disabled = false,
}) => {
  const isDark = theme === 'dark';

  return (
    <div className="space-y-1.5 w-full text-left">
      <div className="flex items-center justify-between">
        <label
          htmlFor={id}
          className={`block text-xs font-semibold tracking-wide uppercase ${
            isDark ? 'text-neutral-300' : 'text-neutral-700'
          }`}
        >
          {label} {isRequired && <span className="text-red-500">*</span>}
        </label>
        {isValid && !error && (
          <span className="flex items-center gap-1 text-[11px] font-bold text-emerald-500">
            <Check className="w-3.5 h-3.5" />
            Válido
          </span>
        )}
      </div>

      <div className="relative">
        <input
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full px-4 py-3 rounded-xl text-sm transition-all duration-150 outline-none border ${
            error
              ? 'border-red-500 bg-red-500/10 text-red-200 focus:ring-2 focus:ring-red-500/40'
              : isValid
              ? 'border-emerald-500/80 bg-emerald-500/5 text-emerald-400 focus:border-emerald-500'
              : isDark
              ? 'bg-neutral-950/80 border-neutral-800 text-neutral-100 placeholder-neutral-500 focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500'
              : 'bg-white border-neutral-300 text-neutral-900 placeholder-neutral-400 focus:border-black focus:ring-1 focus:ring-black'
          } ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
        />

        {error && (
          <div className="absolute right-3 top-1/2 -translate-y-1/2 text-red-500 pointer-events-none">
            <AlertCircle className="w-4 h-4" />
          </div>
        )}
      </div>

      {error && <p className="text-xs text-red-500 font-medium pl-1">{error}</p>}
    </div>
  );
};
