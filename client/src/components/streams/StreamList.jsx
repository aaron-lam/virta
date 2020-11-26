import React from 'react';
import { connect } from 'react-redux';
import { Button, List } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { fetchStreams } from '../../actions';

class StreamList extends React.Component {
  componentDidMount() {
    this.props.fetchStreams();
  }

  renderAdmin = (stream) => {
    if (stream.userId === this.props.currentUserId) {
      return (
        <List.Content floated="right">
          <Link to={`streams/edit/${stream.id}`}>
            <Button primary>Edit</Button>
          </Link>
          <Button negative>Delete</Button>
        </List.Content>
      );
    }
    return undefined;
  }

  renderList = () => this.props.streams.map((stream) => (
    <List.Item>
      {this.renderAdmin(stream)}
      <List.Icon name="camera" size="large" verticalAlign="middle" />
      <List.Content>
        <List.Header>{stream.title}</List.Header>
        <List.Description>{stream.description}</List.Description>
      </List.Content>
    </List.Item>
  ));

  renderCreate = () => {
    const { isSignedIn } = this.props;
    if (isSignedIn) {
      return (
        <Link to="/streams/new">
          <Button primary floated="right">
            Create Stream
          </Button>
        </Link>
      );
    }
    return undefined;
  }

  render() {
    return (
      <div>
        <h2>Streams</h2>
        <List divided relaxed>
          {this.renderList()}
        </List>
        {this.renderCreate()}
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  streams: Object.values(state.streams),
  currentUserId: state.auth.userId,
  isSignedIn: state.auth.isSignedIn,
});

export default connect(mapStateToProps, {
  fetchStreams,
})(StreamList);
