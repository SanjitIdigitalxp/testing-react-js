import React from 'react';
import { findByTestAttr, checkProps } from '../../test/testUtils';
import { shallow } from 'enzyme';
import Input from './Input';
//Mock entire module for destructuring useState on import//////////
// const mockSetCurrentGuess = jest.fn();
// jest.mock('react', ()=>({
//     ...jest.requireActual('react'),
//     useState: (initialState) => [initialState, mockSetCurrentGuess]
// }))

const setup = (success=false, secretWord = 'party') => {
	return shallow(<Input success={success} secretWord={secretWord} />);
};

describe('render', ()=>{
    describe('success is true',()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = setup(true);
        })
        test('Input renders without error', () => {
            wrapper = setup();
            const inputComponent = findByTestAttr(wrapper, 'component-input');
            expect(inputComponent.length).toBe(1);
        });

        test('input box dose not show', ()=>{
            const inputBox = findByTestAttr(wrapper, 'input-box')
            expect(inputBox.exists()).toBe(false);
        })
        test('submit button dose not show', ()=>{
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.exists()).toBe(false);
        })
    })
    describe('success is false',()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = setup(false);
        })
        test('Input renders without error', () => {
            wrapper = setup();
            const inputComponent = findByTestAttr(wrapper, 'component-input');
            expect(inputComponent.length).toBe(1);
        });

        test('input box shows', ()=>{
            const inputBox = findByTestAttr(wrapper, 'input-box')
            expect(inputBox.exists()).toBe(true);
        })
        test('submit button shows', ()=>{
            const submitButton = findByTestAttr(wrapper, 'submit-button');
            expect(submitButton.exists()).toBe(true);
        })

    })
})



test('dose not throw warning with expected props', () => {
	checkProps(Input, { secretWord: 'party' });
});

describe('state controlled input field', () => {
	let mockSetCurrentGuess = jest.fn();
	let wrapper;
	let originalUseState;
	beforeEach(() => {
		mockSetCurrentGuess.mockClear();
		originalUseState = React.useState;
		React.useState = jest.fn(() => ['', mockSetCurrentGuess]);
		wrapper = setup();
	});

	afterEach(() => {
		React.useState = originalUseState;
	});
	test('state updates with value of input box upon change', () => {
		const inputBox = findByTestAttr(wrapper, 'input-box');

		const mockEvent = { target: { value: 'train' } };
		inputBox.simulate('change', mockEvent);

		expect(mockSetCurrentGuess).toHaveBeenCalledWith('train');
	});

	test('field is cleared upon submit button click', () => {
		const submitButton = findByTestAttr(wrapper, 'submit-button');

		submitButton.simulate('click', { preventDefault() {} });
		expect(mockSetCurrentGuess).toHaveBeenCalledWith('');
	});
});
