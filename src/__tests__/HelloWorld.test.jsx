// @flow

import React from 'react'
import HelloWorld from '../HelloWorld'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, {shallow} from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() })

describe('A Hello World Component', () => {
  // Jest module test
  it('Should render without throwing an error', async () => {
    const output = shallow(<HelloWorld />)
    expect(shallowToJson(output)).toMatchSnapshot()
  })
})
