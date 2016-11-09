import React, {PropTypes} from 'react';

class Form extends React.Component {
  render() {
    return(
      <form>
        {this.props.children}
      </form>
    );
  }
}

Form.PropTypes = {
  children: PropTypes.node,
  values: PropTypes.object,
  update: PropTypes.func,
  reset: PropTypes.func,
  onSubmit: PropTypes.func,
}

export default Form;
