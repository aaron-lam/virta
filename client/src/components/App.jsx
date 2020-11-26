import React from 'react';
import { Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import StreamList from './streams/StreamList';
import StreamCreate from './streams/StreamCreate';
import StreamEdit from './streams/StreamEdit';
import StreamDelete from './streams/StreamDelete';
import StreamShow from './streams/StreamShow';
import Header from './Header';
import history from '../history';

const App = () => (
  <div>
    <Router history={history}>
      <div>
        <Header />
        <Container>
          <Route path="/" exact component={StreamList} />
          <Route path="/streams/new" exact component={StreamCreate} />
          <Route path="/streams/edit/:id" exact component={StreamEdit} />
          <Route path="/streams/delete" exact component={StreamDelete} />
          <Route path="/streams/show" exact component={StreamShow} />
        </Container>
      </div>
    </Router>
  </div>
);

export default App;
