import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ApplePage } from './pages/ApplePage';
import { HomePage } from './pages/HomePage';
import { PostsPage } from './pages/PostsPage';

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/blog/posts/:date" component={PostsPage} />
        <Route path="/blog/posts" component={PostsPage} />
        <Route path="/blog/apple" component={ApplePage} />
        <Route path="/blog/" component={HomePage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
