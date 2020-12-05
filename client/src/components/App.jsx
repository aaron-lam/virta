import React from 'react';
import { Router, Route, Switch } from 'react-router-dom';
import StreamList from './streams/stream-list';
import StreamCreate from './streams/stream-create';
import StreamEdit from './streams/stream-edit';
import StreamDelete from './streams/stream-delete';
import StreamShow from './streams/stream-show';
import Header from './header';
import history from '../history';

const App = () => (
  <div>
    <Router history={history}>
      <div>
        <Header />
        <div style={{ margin: 40 }}>
          <Switch>
            <Route path="/" exact component={StreamList} />
            <Route path="/streams/new" exact component={StreamCreate} />
            <Route path="/streams/edit/:id" exact component={StreamEdit} />
            <Route path="/streams/delete/:id" exact component={StreamDelete} />
            <Route path="/streams/:id" exact component={StreamShow} />
          </Switch>
        </div>
      </div>
    </Router>
  </div>
);

export default App;
