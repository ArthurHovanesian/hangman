//can i just resuse word and letter components? or just do six boxes at top
import React from 'react';

class Key extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  render() {
    const { letter, index } = this.props;
    return (
      <span>
        {letter}
      </span>
    )
  }
}

export default Key;
