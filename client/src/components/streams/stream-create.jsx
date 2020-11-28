import React from 'react';
import { connect } from 'react-redux';
import StreamForm from './stream-form';
import { createStream } from '../../actions';

class StreamCreate extends React.Component {
  onSubmit = (formValues) => {
    this.props.createStream(formValues);
  }

  render() {
    return (
      <div>
        <h2>Create a Stream</h2>
        <StreamForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default connect(null, {
  createStream,
})(StreamCreate);
