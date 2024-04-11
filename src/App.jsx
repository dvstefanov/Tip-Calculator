import { useState, useRef } from "react";

import Input from "./components/Input/Input";
import Result from "./components/Result/Result";
import Modal from "./components/Modal/Modal";

function App() {
	const [totalBill, setTotalBill] = useState(0);
	const [totalTip, setTotalTip] = useState(0);
	const [tipPerPerson, setTipPerPerson] = useState(0);

	const billRef = useRef();
	const tipRef = useRef();
	const peopleRef = useRef();
	const dialogRef = useRef();

	const handleCalcualate = () => {
		const bill = Number(billRef.current.value);
		const tipPercent = Number(tipRef.current.value);
		const tipPeople = Number(peopleRef.current.value);

		const isBillInputInvalid = checkForNegativeNum(bill, 0, dialogRef);
		const isTipInputInvalid = checkForNegativeNum(tipPercent, 0, dialogRef);
		const isPeopleInputInvalid = checkForNegativeNum(tipPeople, 1, dialogRef);

		if (isBillInputInvalid || isTipInputInvalid || isPeopleInputInvalid) {
			dialogRef.current.open();
			return;
		}

		const billResult = bill + bill * (tipPercent / 100);
		const tipResult = bill * (tipPercent / 100);

		setTotalBill(Math.round(billResult * 100) / 100);
		setTotalTip(Math.round(tipResult * 100) / 100);
		setTipPerPerson(Math.round((tipResult / tipPeople) * 100) / 100);
	};

	const handleReset = () => {
		billRef.current.value = 200;
		tipRef.current.value = 15;
		peopleRef.current.value = 1;

		setTotalBill(0);
		setTotalTip(0);
		setTipPerPerson(0);
	};

	return (
		<div id="wrapper">
			<header id="heading-wrapper">
				<h2 id="heading">Tip Calculator</h2>
			</header>

			<div id="main-content">
				<Modal
					ref={dialogRef}
					heading="Incorrect input."
					text="Make sure that bill amount, tip and number of people are positive numbers!"
				/>
				<Input
					ref={billRef}
					type="number"
					label="Bill Amount"
					inputId="bill-input"
					min="0"
					defaultValue="200"
				/>
				<Input
					ref={tipRef}
					type="number"
					label="Tip %"
					inputId="tip-input"
					min="0"
					defaultValue="15"
				/>
				<Input
					ref={peopleRef}
					type="number"
					label="Number of People"
					inputId="people-input"
					min="0"
					max="5"
					defaultValue="1"
				/>

				<div id="btns-group">
					<button onClick={handleCalcualate}>Calculate</button>
					<button onClick={handleReset}>Reset</button>
				</div>

				<div id="result-wrapper">
					<Result text="Total Amount (bill + tip)" value={totalBill} />
					<Result text="Total Tip" value={totalTip} />
					<Result text="Tip per Person" value={tipPerPerson} />
				</div>
			</div>
		</div>
	);
}

export default App;

function checkForNegativeNum(num, minValue, ref) {
	if (num < minValue || Number.isNaN(num)) {
		return true;
	}

	return false;
}
