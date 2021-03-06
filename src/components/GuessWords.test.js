import React from 'react';
import { shallow } from 'enzyme';
import { findByTestAttr, checkProps } from '../../test/testUtils';
import GuessedWords from './GuessedWord';

const defaultProps = {
	guessedWords: [{ guessedWord: 'train', letterMatchCount: 3 }],
};

const setup = (props = {}) => {
	const setupProps = { ...defaultProps, ...props };
	return shallow(<GuessedWords {...setupProps} />);
};

test('dose not throw waring with expected props', () => {
	checkProps(GuessedWords, defaultProps);
});

describe('if there are no words gussed', () => {
	let wrapper;
	beforeEach(() => {
		wrapper = setup({ guessedWords: [] });
	});
	test('renders without error', () => {
		const component = findByTestAttr(wrapper, 'component-guessed-words');
		expect(component.length).toBe(1);
	});
	test('renders instructions to guess a word', () => {
		const instructions = findByTestAttr(wrapper, 'guess-instructions');
		expect(instructions.text().length).not.toBe(0);
	});
});

describe('if there are words guessed', () => {
	const guessedWords = [
		{ guessedWord: 'train', letterMatchCount: 3 },
		{ guessedWord: 'agile', letterMatchCount: 1 },
		{ guessedWord: 'party', letterMatchCount: 5 },
	];
	let wrapper;
	beforeEach(() => {
		wrapper = setup({ guessedWords });
	});
	test('renders without error', () => {
		const component = findByTestAttr(wrapper, 'component-guessed-words');
		expect(component.length).toBe(1);
	});

	test('renders "guessed words" section', () => {
		const guessedWordsNode = findByTestAttr(wrapper, 'guessed-word');
		expect(guessedWordsNode.length).toBe(3);
	});
	test('correct number of guessed words', () => {
		const guessedWordsNodes = findByTestAttr(wrapper, 'guessed-word');
		expect(guessedWordsNodes.length).toBe(guessedWords.length);
	});
});
