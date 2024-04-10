import { useState, useRef } from "react";
import Input from "./components/Input";

function App() {
	const [totalBill, setTotalBill] = useState(0);
    const [totalTip, setTotalTip] = useState(0);
	const [tipPerPerson, setTipPerPerson] = useState(0);

	const billRef = useRef();
	const tipRef = useRef();
	const peopleRef = useRef();

	const handleCalcualate = () => {
		const bill = Number(billRef.current.value);
        const tipPercent = Number(tipRef.current.value) / 100;
		const tipPeople = Number(peopleRef.current.value);

		const billResult = bill + (bill * tipPercent);
        const tipResult = bill * tipPercent;

		setTotalBill(Math.round(billResult * 100) / 100);
        setTotalTip(Math.round(tipResult * 100) / 100);
        setTipPerPerson(Math.round((tipResult / tipPeople) * 100) / 100);
	};

	const handleReset = () => {
		billRef.current.value = 0;
        tipRef.current.value = 15;
		peopleRef.current.value = 1;

        setTotalBill(0);
        setTotalTip(0);
        setTipPerPerson(0);
	};

	return (
		<>
			<Input
				ref={billRef}
				type="number"
				label="Bill Amount"
				inputId="bill-input"
				min="0"
				defaultValue="0"
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

			<button onClick={handleCalcualate}>Calculate</button>
			<button onClick={handleReset}>Reset</button>

			<div>Total Amount (bill + tip): {totalBill}</div>
			<div>Total Tip: {totalTip}</div>
			<div>Tip per Person: {tipPerPerson}</div>
		</>
	);
}

export default App;
