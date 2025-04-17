import React from "react";

interface InputProps {
  id: string;
  label: string;
  type?: string;
  disabled?: boolean;
}

export const FormInput = React.forwardRef<HTMLInputElement, InputProps>(
  ({ id, label, type = "text", disabled }, ref) => {
    return (
      <div className="w-full relative">
        <input
          id={id}
          name={id}
          ref={ref}
          disabled={disabled}
          placeholder=""
          type={type}
          className={`
          peer
          w-full
          p-4
          pt-6
          font-bold
          bg-white
          border-2
          rounded-md
          outline-none
          transition
          disabled:opacity-70
          disabled:cursor-not-allowed
          pl-4
        `}
        />
        <label
          className={`
          absolute
          text-md
          duration-150
          transform
          -translate-y-3
          top-5
          bg-white
          text-zinc-400
          z-10
          origin-[0]
          left-4
          peer-placeholder-shown:scale-100
          peer-placeholder-shown:translate-y-0
          peer-focus:scale-80
          peer-focus:top-1
          peer-focus:font-bold
          peer-focus:text-black
          peer-focus:-translate-y-4
        `}
        >
          {label}
        </label>
      </div>
    );
  }
);

FormInput.displayName = "FormInput";