import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Home from '../src/Home/Home.jsx';
import App from '../src/App/App.jsx';
import Word from '../src/Word/Word.jsx';
import Button from '../src/Button/Button.jsx';
import Keyboard from '../src/Keyboard/Keyboard.jsx';
import defaultKeys from '../src/App/utilities.js';
import checkUserGuess from '../src/App/App.jsx';

function onClickFunction(){};

describe('<Home />', () => {
  it('renders home page', () => {
    const wrapper = shallow(<Home />);
    expect(wrapper).toMatchSnapshot();
  });

  it('button click fires click event', () => {
    const click = jest.fn();
    const button = shallow(<Button level={0} handleNoName={click}/>);
    button.find('button').first().simulate('click');
    expect(click).toHaveBeenCalled();
  });
})

describe('<App />', () => {
  it('renders game', () => {
    const wrapper = shallow(<App />);
    expect(wrapper).toMatchSnapshot();
  });

  it('key click fires click event', () => {
    const click = jest.fn();
    const word = mount(<Word reveal={ [{letter: 'Q', show: false},{letter: 'B', show: false},{letter: 'C', show: false}] }/>);
    const keyboard = mount(<Keyboard keys={defaultKeys} checkUserGuess={click} attemptsLeft={3} />);
    keyboard.find('.key').first().simulate('click');
    expect(click).toHaveBeenCalled();
  });

  it('should reduce number of attempts by 1 after incorrect guess', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({word: ['A','B','C']})
    wrapper.instance().checkUserGuess('T');
    expect(wrapper.state().attemptsLeft).toEqual(5)
  });

  // it('should game over after 6 incorrect guesses', () => {
  //   const wrapper = mount(<App />);
  //   wrapper.setState({word: ['A','B','C']})
  //   wrapper.instance().checkUserGuess('T');
  //   wrapper.instance().checkUserGuess('P');
  //   wrapper.instance().checkUserGuess('R');
  //   wrapper.instance().checkUserGuess('E');
  //   wrapper.instance().checkUserGuess('L');
  //   wrapper.instance().checkUserGuess('S');
  //   wrapper.instance().getLeaderBoard('a','easy',5);
  //   console.log(wrapper.state())
  //   expect(wrapper.state().gameOver).toEqual(true)
  // });


})
