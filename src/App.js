import styled from '@emotion/styled';
import './App.css';
import ObjectBuilder from './components/builders/objectBuilder';

function App() {

	// ------------------------------Styling-----------------------------------
	const Container = styled.div `
		justify-content: center;
		text-align: center;
		margin: 3rem;
	`;
	// ------------------------------------------------------------------------

	return (
		<Container>
			<ObjectBuilder />
		</Container>
	);
}

export default App;
