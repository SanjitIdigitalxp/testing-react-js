import React, { Component } from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import Login from './Login';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('render without error', () => {
	const wrapper = shallow(<Login />);
	const loginComponent = wrapper.find("[data-test='component-login']");
    expect(loginComponent.length).toBe(1);
});

test('render input field for email', () => {});

test('render input field for password', () => {});

test('render login button', () => {});

test('on click login show alert with login data', () => {});
