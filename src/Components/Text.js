import React, {PropTypes} from 'react';
import TextField from 'material-ui/TextField';

class Text extends React.Component {
  render(){
    return(
      <div>
        <TextField
        hintText={this.props.placeholder}
        floatingLabelText={this.props.label}/>
      </div>
    );
  }
}
Text.PropTypes = {
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  label: PropTypes.string
}
export default Text;
