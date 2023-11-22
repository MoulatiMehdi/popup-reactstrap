import logo from "./logo.svg";
import "./App.css";
import Popup from "./Popup";

import { useState } from "react";
const data = [
	{ value: "A", label: "B" },
	{ value: "b", label: "B" },
	{ value: "c", label: "B" },
	{ value: "d", label: "B" },
	{ value: "e", label: "B" },
	{ value: "f", label: "B" },
	{ value: "g", label: "B" },
];
function App() {
	const [isOpenModal, setIsOpenModal] = useState(false);
	return (
		<div className='App'>
			<button onClick={() => setIsOpenModal(true)}>Open Modal</button>
			<Popup
				procedureCatergory={data}
				isOpen={isOpenModal}
				toggle={() => setIsOpenModal((prev) => !prev)}
			/>
		</div>
	);
}

export default App;
