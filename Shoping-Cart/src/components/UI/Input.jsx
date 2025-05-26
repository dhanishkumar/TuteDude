import { forwardRef } from 'react';

const Input = forwardRef(({ label, input }, ref) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor={input.id} className="font-medium">{label}</label>
      <input
        ref={ref}
        {...input}
        className="border px-2 py-1 rounded w-20"
      />
    </div>
  );
});

export default Input;
