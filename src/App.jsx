import { useState, useRef } from "react";
import Input from "./components/Input";

function App() {
	const [total, setTotal] = useState(0);
    const billRef = useRef();
    const peopleRef = useRef();
    

    const handleCalcualate = () => {
        
    };
    const handleReset = () => {
        
    };

	return (
		<>
			<Input ref={billRef} type="number" label="Bill Amount" inputId="bill" min="0" />
			<Input ref={peopleRef} type="number" label="Number of People" inputId="tip" min="0" />


			<button onClick={handleCalcualate}>Calculate</button>
			<button onClick={handleReset}>Reset</button>
			<div>Result: {total}</div>
		</>
	);
}

export default App;
