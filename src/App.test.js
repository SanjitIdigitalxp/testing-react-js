import React, { Component } from 'react';
import Enzyme, { shallow } from 'enzyme';
import EnzymeAdapter from '@wojtekmaj/enzyme-adapter-react-17';
import App from './App';

Enzyme.configure({ adapter: new EnzymeAdapter() });

test('renders app component without error', () => {
	const wrapper = shallow(<App />);
	const loginComponent = wrapper.find("[data-test='component-app']");
	expect(loginComponent.length).toBe(1);
});
