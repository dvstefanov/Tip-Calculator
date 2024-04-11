import { forwardRef } from "react";

import classes from "./Input.module.css";

const Input = forwardRef(function Input({ label, inputId, ...props }, ref) {
	return (
		<div className={classes.group}>
			<label className={classes.label} htmlFor={inputId}>{label}</label>
			<input className={classes.input} ref={ref} id={inputId} {...props} />
		</div>
	);
});

export default Input;
