import React, {Component} from 'react';

class TextboxInput extends Component {
  render() {
    return(
      <div>
        <input type='text' value={this.props.pp}/>
      </div>
    );
  }
}

export default TextboxInput;
