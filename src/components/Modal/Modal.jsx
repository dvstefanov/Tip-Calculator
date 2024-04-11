import { createPortal } from "react-dom";
import { useRef, forwardRef, useImperativeHandle } from "react";

import classes from "./Modal.module.css";

const Modal = forwardRef(function Modal({ heading, text }, ref) {
	const dialogRef = useRef();

	useImperativeHandle(ref, () => {
		return {
			open() {
				dialogRef.current.showModal();
			},
		};
	});

	return createPortal(
		<dialog ref={dialogRef} className={classes.dialog}>
			<h2>{heading}</h2>
			<p>{text}</p>
			<form method="dialog">
				<button>Close</button>
			</form>
		</dialog>,
		document.getElementById("modal-root")
	);
});

export default Modal;
