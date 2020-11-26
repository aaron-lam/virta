import React from 'react';
import { connect } from 'react-redux';
import { Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import ModalBasic from '../ModalBasic';
import history from '../../history';
import { fetchStream, deleteStream } from '../../actions';

class StreamDelete extends React.Component {
  componentDidMount() {
    const { id } = this.props.match.params;
    this.props.fetchStream(id);
  }

  renderActions = () => {
    const { id } = this.props.match.params;
    return (
      <>
        <Button negative onClick={() => this.props.deleteStream(id)}>
          Delete
        </Button>
        <Link to="/">
          <Button>
            Cancel
          </Button>
        </Link>
      </>
    );
  };

  renderContent = () => {
    const { stream } = this.props;
    if (!stream) {
      return 'Are you sure you want to delete this stream?';
    }
    return `Are you sure you want to delete the stream with title: ${stream.title}`;
  }

  render() {
    return (
      <ModalBasic
        title="Delete Stream"
        content={this.renderContent()}
        actions={this.renderActions()}
        onDismiss={() => history.push('/')}
      />
    );
  }
}

const mapStateToProps = (state, ownProps) => ({
  stream: state.streams[ownProps.match.params.id],
});

export default connect(mapStateToProps, { fetchStream, deleteStream })(StreamDelete);
