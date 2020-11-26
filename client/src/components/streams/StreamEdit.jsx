import React from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import { fetchStream, editStream } from '../../actions';
import StreamForm from './StreamForm';

class StreamEdit extends React.Component {
  componentDidMount() {
    const { match } = this.props;
    this.props.fetchStream(match.params.id);
  }

  onSubmit = (formValues) => {
    const { match } = this.props;
    this.props.editStream(match.params.id, formValues);
  };

  render() {
    return (
      <div>
        <h2>Edit a Stream</h2>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => ({ stream: state.streams[ownProps.match.params.id] });

export default connect(mapStateToProps, { fetchStream, editStream })(StreamEdit);
