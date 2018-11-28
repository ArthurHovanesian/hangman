import React from 'react';
import Key from '../Key/Key.jsx';
import styles from './Guess.css';

class Guess extends React.Component {
  constructor() {
    super();
    this.top = ['Q', 'W', 'E', 'R', 'T', 'Y', 'U', 'I', 'O', 'P'];
    this.middle = ['A', 'S', 'D', 'F', 'G', 'H', 'J', 'K', 'L'];
    this.bottom = ['Z', 'X', 'C', 'V', 'B', 'N', 'M'];
    this.state = {
    }
  }

  render() {
    return (
      <div>
        <div className={styles.row}>
          {this.top.map((letter, index) => <Key letter={letter} index={index}/>)}
        </div>
        <div className={styles.row}>
          {this.middle.map((letter, index) => <Key letter={letter} index={index}/>)}
        </div>
        <div className={styles.row}>
          {this.bottom.map((letter, index) => <Key letter={letter} index={index}/>)}
        </div>
      </div>
    )
  }
}

// class Guess extends React.Component {
//   //props necessary?
//   constructor() {
//     super();
//     this.handleChange = this.handleChange.bind(this);
//     this.handleSubmit = this.handleSubmit.bind(this);
//     this.state = {
//       value: '',
//     };
//   }
//
//   handleChange(event) {
//     //is this delete character fix hacky?
//     const character = event.target.value.toLowerCase();
//     if (character.charCodeAt(0) >= 97 && character.charCodeAt(0) <= 122) {
//       this.setState({value: character});
//     } else {
//       this.setState({value: ''});
//     };
//   }
//
//   handleSubmit(event) {
//     const { value } = this.state;
//     if (value !== '') {
//       this.setState({value: ''});
//     }
//     event.preventDefault();
//   }
//
//   render() {
//     return (
//       <form onSubmit={this.handleSubmit}>
//         <label>
//           <input type='text' placeholder='6' value={this.state.value} maxLength='1' onChange={this.handleChange} />
//         </label>
//         <input type='submit' value='Submit' />
//       </form>
//     );
//   }
// }

export default Guess;
