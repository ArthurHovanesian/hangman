import React from 'react';
import { shallow, mount, render } from 'enzyme';

import Home from '../src/Home/Home.jsx';
import App from '../src/App/App.jsx';
import Word from '../src/Word/Word.jsx';
import Title from '../src/Title/Title.jsx';
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

  it('should flicker title screen', () => {
    const wrapper = mount(<Title />);
    const initial = wrapper.state().letterTick
    let next;
    setTimeout(() => {
      next = wrapper.state().letterTick
    }, 100)
    setTimeout(() => {
      expect(initial === next).toBe(False);
    }, 105)
  });

  it('should set state on input field change', () => {
    const wrapper = shallow(<Home />);
    wrapper.find('input').simulate('change', {target: {value: 'abc'}});
    expect(wrapper.state().name).toBe('abc');
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

  it('should indicate missed letters after 6 incorrect guesses', () => {
    const wrapper = shallow(<App />);
    wrapper.setState({
      word: ['A','B','C'],
      reveal: [
        {
          letter: 'A',
          show: false,
          missed: false
        },
        {
          letter: 'B',
          show: false,
          missed: false
        },
        {
          letter: 'C',
          show: false,
          missed: false
        }
      ]
    })
    wrapper.instance().checkUserGuess('C');
    wrapper.instance().checkUserGuess('D');
    wrapper.instance().checkUserGuess('E');
    wrapper.instance().checkUserGuess('F');
    wrapper.instance().checkUserGuess('G');
    wrapper.instance().checkUserGuess('H');
    wrapper.instance().checkUserGuess('I');
    expect(wrapper.state().reveal[0].missed).toEqual(true)
  });

  // it('should render leaderboard on game over', () => {
  //   const wrapper = mount(<App />);
  //   wrapper.setState({gameOver: true})
  //   expect(wrapper.state().find('.')).toEqual(5)
  // });
  // var wrapper;
  // beforeEach(() => {
  //   const mockData = 'abcde'
  //   window.fetch = jest.fn().mockImplementation(() => Promise.resolve({
  //     json: () => Promise.resolve({
  //       data: mockData,
  //     })
  //   }))
  //   wrapper = mount(<App />);
  // });
  //
  // it('should game over after 6 incorrect guesses', () => {
  //   console.log(wrapper.state())
  //
  //   // wrapper.setState({word: ['A','B','C']})
  //   // wrapper.instance().checkUserGuess('T');
  //   // wrapper.instance().checkUserGuess('P');
  //   // wrapper.instance().checkUserGuess('R');
  //   // wrapper.instance().checkUserGuess('E');
  //   // wrapper.instance().checkUserGuess('L');
  //   // wrapper.instance().checkUserGuess('S');
  //   // wrapper.instance().getLeaderBoard('a','easy',5);
  //
  //   //expect(wrapper.state().gameOver).toEqual(true)
  // });


})

// describe('App', () => {
//   describe('componentDidMount', () => {
//     it('sets the state on componentDidMount', async () => {
//       window.fetch = jest.fn().mockImplementation(() => ({
//         status: 200,
//         json: () => new Promise((resolve, reject) => {
//           resolve({
//             data: 'abcd'
//           })
//         })
//       }))

    // })

//   })
// })
