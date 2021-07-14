import logo from './logo.svg';
import './App.css';
import Login from './components/Login';
import GuessedWords from './components/GuessedWord';
import Congrats from './components/Congrats';

function App() {
	return (
		<div data-test='component-app' className='container'>
			<Login />

			<h1>Jotto</h1>
			<Congrats success={true} />
			<GuessedWords
				guessedWords={[{ guessedWord: 'train', letterMatchCount: 3 }]}
			/>
		</div>
	);
}

export default App;
