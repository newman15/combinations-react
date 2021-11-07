import styled from '@emotion/styled';
// import { useState } from 'react';
import './App.css';
import ObjectBuilder from './components/builders/objectBuilder';
// import BuildHtmlList from './components/builders/output/listBuilder';
// import BuildHtmlTable from './components/builders/output/tableBuilder';
// const combo = require("./functions/combinations");

function App() {

	// ------------------------------Styling-----------------------------------
	const Container = styled.div `
		justify-content: center;
		text-align: center;
		margin: 3rem;
	`;
	// ------------------------------------------------------------------------

	// const getLinearCombo = (type) => {
	// 	let newCombination = combo.linearBuild();
	// 	// setView(<BuildHtmlList arrayOfObj={newCombination} />);
	// 	switch (type) {
	// 		case "list":
	// 			setView(<BuildHtmlList arrayOfObj={newCombination} />);
	// 			break;
	// 		case "table":
	// 			setView(<BuildHtmlTable arrayOfObj={newCombination} />);
	// 			break;
	// 		default:
	// 			alert("Something went wrong bitch...  :( ");
	// 			break;
	// 	}
	// }

	// const getRandomCombo = (type) => {
	// 	let newCombination = combo.randomBuild();
	// 	// setView(<BuildHtmlList arrayOfObj={newCombination} />);
	// 	switch (type) {
	// 		case "list":
	// 			setView(<BuildHtmlList arrayOfObj={newCombination} />);
	// 			break;
	// 		case "table":
	// 			setView(<BuildHtmlTable arrayOfObj={newCombination} />);
	// 			break;
	// 		default:
	// 			alert("Something went wrong bitch...  :( ");
	// 			break;
	// 	}
	// }
	
	// let test = (
	// 	<div>
	// 		<div>
	// 			<button onClick={(e) => {e.preventDefault(); getLinearCombo("list")}}>Linear Build - List</button>
	// 			<button	onClick={(e) => {e.preventDefault(); getRandomCombo("list")}}>Random Build - List</button>
	// 		</div>

	// 		<div>
	// 			<button onClick={(e) => {e.preventDefault(); getLinearCombo("table")}}>Linear Build - Table</button>
	// 			<button	onClick={(e) => {e.preventDefault(); getRandomCombo("table")}}>Random Build - Table</button>
	// 		</div>
	// 	</div>
	// );

	// const [view, setView] = useState(test);
	// const [view, setView] = useState(<ObjectBuilder />);

	return (
		<Container>
			<ObjectBuilder />
		</Container>
	);
}

export default App;
