import { Button, Form } from './components';
import styled from 'styled-components';
function App() {
	return (
		<Container c>
			<Form />
		</Container>
	);
}
const Container = styled.main`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100vh;
`;

export default App;
