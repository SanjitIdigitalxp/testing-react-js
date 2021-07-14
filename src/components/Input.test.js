import React from 'react'
import { findByTestAttr} from '../../test/testUtils'
import {shallow} from 'enzyme'
import Input from './Input'

const setup = () =>{
    return shallow(<Input />)
}

test('test renders without error', ()=>{
    const wrapper = setup();
    const inputComponent = findByTestAttr(wrapper, 'component-input')
    expect(inputComponent.length).toBe(1);
})