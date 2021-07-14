import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import GuessedWords from './components/GuessedWord';

function App() {
	return (
		<div data-test='component-app'>
			<Login />
			{/* <GuessedWords /> */}
		</div>
	);
}

export default App;
