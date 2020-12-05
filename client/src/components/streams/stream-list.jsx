import React from 'react';
import { connect } from 'react-redux';
import { Card, Button, List } from 'semantic-ui-react';
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
          <Link to={`streams/delete/${stream.id}`}>
            <Button negative>Delete</Button>
          </Link>
        </List.Content>
      );
    }
    return undefined;
  }

  renderCards = () => this.props.streams.map((stream) => (
    <Card
      style={{ minWidth: 400 }}
      image={stream.previewUrl}
      header={stream.title}
      description={stream.description}
      extra={this.renderAdmin(stream)}
    />
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
        <Card.Group>
          {this.renderCards()}
        </Card.Group>
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
