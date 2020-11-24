import React from 'react';
import { Button } from 'semantic-ui-react';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component {
  componentDidMount() {
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId: '30308309932-kufblh0pgbr7s05k9t5u9eeav24rvsfr.apps.googleusercontent.com',
        scope: 'email',
      }).then(() => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      });
    });
  }

  onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
      this.props.signIn(this.auth.currentUser.get().getId());
    } else {
      this.props.signOut();
    }
  }

  onSignInClick = () => {
    this.auth.signIn();
  }

  onSignOutClick = () => {
    this.auth.signOut();
  }

  renderAuthButton() {
    const { isSignedIn } = this.props;
    if (isSignedIn == null) {
      return null;
    }
    return (
      <Button color="grey" onClick={isSignedIn ? this.onSignOutClick : this.onSignInClick}>
        {isSignedIn ? 'Sign Out' : 'Log In'}
      </Button>
    );
  }

  render() {
    return <div>{this.renderAuthButton()}</div>;
  }
}

const mapStateToProps = (state) => ({
  isSignedIn: state.auth.isSignedIn,
});

export default connect(mapStateToProps, { signIn, signOut })(GoogleAuth);
