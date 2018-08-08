import React from 'react'
import Footer from '../Footer'
import Adapter from 'enzyme-adapter-react-16'
import Enzyme, { shallow } from 'enzyme'
import { shallowToJson } from 'enzyme-to-json'

Enzyme.configure({ adapter: new Adapter() })

describe('A Footer Component ', () => {
  // Jest module test
  it('It should render without throwing an error ', () => {
    const wrapper = shallow(<Footer />)
    expect(shallowToJson(wrapper)).toMatchSnapshot()
  })
})
