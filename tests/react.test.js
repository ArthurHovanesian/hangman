import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Home from '../src/Home/Home.jsx';
import App from '../src/App/App.jsx';

describe('<Home />', () => {
  it('renders home page', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });
})

describe('<App />', () => {
  it('renders game', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });
})
