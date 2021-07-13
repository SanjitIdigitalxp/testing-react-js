import React, { Component } from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Login from './Login';
import { findByTestAttr } from '../../test/testUtils';
Enzyme.configure({ adapter: new EnzymeAdapter() });

const setup = () => shallow(<Login />);

test('render without error', () => {
	const wrapper = setup();
	const loginComponent = findByTestAttr(wrapper, 'component-login');
	expect(loginComponent.length).toBe(1);
});

test('render input field for email', () => {
	const wrapper = setup();
	const inputEmail = findByTestAttr(wrapper, 'inputEmail');
	expect(inputEmail.length).toBe(1);
});

test('render input field for password', () => {
	const wrapper = setup();
	const inputPassword = findByTestAttr(wrapper, 'inputPassword');
	expect(inputPassword.length).toBe(1);
});

test('render login button', () => {
	const wrapper = setup();
	const loginButton = findByTestAttr(wrapper, 'loginButton');
	expect(loginButton.length).toBe(1);
});

test('getEmail initial input value', () => {
	const wrapper = setup();
	const getEmail = findByTestAttr(wrapper, 'getEmail').text();
	expect(getEmail).toBe('');
});

test.skip('clicking on button give login to user', () => {
	const wrapper = setup();
	const inputEmail = findByTestAttr(wrapper, 'inputEmail').simulate('change', {
		target: { value: 'sanjitmaji08@gmail.com' },
	});
	console.log(inputEmail.debug());
	// inputEmail.simulate('change', {
	// 	target: { value: 'sanjitmaji08@gmail.com' },
	// });
	const inputPassword = findByTestAttr(wrapper, 'inputPassword').simulate(
		'change',
		{ target: { value: 'Sanjit@09' } },
	);
	// inputPassword.simulate('change', {
	// 	target: { value: 'Sanjit@09' },
	// });

	//find the button
	const loginButton = findByTestAttr(wrapper, 'loginButton');

	//click the button
	loginButton.simulate('click');
	//find the email address, and test that the we get users email id

	expect(inputEmail).toBe('sanjitmaji08@gmail.com');
	expect(inputPassword).toBe('Sanjit@09');
});
