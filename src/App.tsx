import { FC } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import LoginPage from './components/pages/LoginPage';
import StoreManagementPage from './components/pages/StoreManagementPage';
import EmployeeManagementPage from './components/pages/EmployeeManagementPage';
import MessageList from './components/pages/MessageListPage';
import NotFound from './components/pages/NotFound';
import LoggedInRoute from './routes/LoggedInRoute';

const App: FC = () => (
  <Router>
    <Switch>
      <Route exact path={['/', '/login']}>
        <LoginPage />
      </Route>
      <LoggedInRoute path="/store">
        <StoreManagementPage />
      </LoggedInRoute>
      <LoggedInRoute path="/employee">
        <EmployeeManagementPage />
      </LoggedInRoute>
      <LoggedInRoute path="/messages/:id">
        <MessageList />
      </LoggedInRoute>
      <Route>
        <NotFound />
      </Route>
    </Switch>
  </Router>
);

export default App;
