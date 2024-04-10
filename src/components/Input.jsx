import React from "react";

const Input = ({ label, inputId, ...props }) => {
	return (
		<div>
			<label htmlFor={inputId}>{label}</label>
			<input id={inputId} {...props} />
		</div>
	);
};

export default Input;
