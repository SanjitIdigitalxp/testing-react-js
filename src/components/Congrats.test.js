import  { shallow } from 'enzyme';
import Congrats from './Congrats';
import { findByTestAttr, checkProps } from '../../test/testUtils';

const defaultProps = {success : false}

const setup = (props = {}) => {
    const setupProps = {...defaultProps, ...props}
	return shallow(<Congrats {...setupProps} />);
};

test('renders without error', () => {
	const wrapper = setup({ success: false });
	const component = findByTestAttr(wrapper, 'component-congrats');
	expect(component.length).toBe(1);
});

test('renders no text when success prop is false', () => {
	const wrapper = setup({ success: false });
	const component = findByTestAttr(wrapper, 'component-congrats');
	expect(component.text()).toBe('');
});

test('render non-empty congrats message when sucess prop is true', () => {
	const wrapper = setup({ success: true });
	const message = findByTestAttr(wrapper, 'congrats-message');
	expect(message.text().length).not.toBe(0);
});

test('dose not throw warnings with expected props', () => {
	const expectedProps = { success: false };
	checkProps(Congrats, expectedProps);
});
