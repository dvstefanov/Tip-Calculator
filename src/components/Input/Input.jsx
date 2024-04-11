import { forwardRef } from "react";

const Input = forwardRef(function Input({ label, inputId, ...props }, ref) {
	return (
		<div>
			<label htmlFor={inputId}>{label}</label>
			<input ref={ref} id={inputId} {...props} />
		</div>
	);
});

export default Input;
