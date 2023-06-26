import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

import { TasksPage } from "./features/tasks/TasksPage";
import { TaskPage } from "./features/tasks/TaskPage";
import { AuthorPage } from "./features/author/AuthorPage";
import { List, Item, StyledNavLink, Navigation } from "./styled";

const App = () => (
  <>
    <HashRouter>
      <Navigation>
        <List>
          <Item>
            <StyledNavLink to="/tasks">Tasks</StyledNavLink>
          </Item>
          <Item>
            <StyledNavLink to="/author">About author</StyledNavLink>
          </Item>
        </List>
      </Navigation>
      <Switch>
        <Route path="/tasks/:id">
          <TaskPage />
        </Route>
        <Route path="/tasks">
          <TasksPage />
        </Route>
        <Route path="/author">
          <AuthorPage />
        </Route>
        <Route patch="/">
          <Redirect to="/tasks" />
        </Route>
      </Switch>
    </HashRouter>
  </>
);

export { App };
