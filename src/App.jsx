import { useState } from "react";
import Input from "./components/Input";

function App() {
	const [result, setResult] = useState(0);

	return (
		<>
			<Input type="number" label="Bill Amount" inputId="bill" min="0" />
			<Input type="number" label="Number of People" inputId="tip" min="0" />


			<button>Calculate</button>
			<button>Reset</button>
			<div>Result: {total}</div>
		</>
	);
}

export default App;
