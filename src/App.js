import { HashRouter, Switch, Route, Redirect } from "react-router-dom";

import { Tasks } from "./features/tasks/Tasks";
import { Author } from "./features/author/Author";
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
        <Route path="/tasks">
          <Tasks />
        </Route>
        <Route path="/author">
          <Author />
        </Route>
        <Route patch="/">
          <Redirect to="/tasks" />
        </Route>
      </Switch>
    </HashRouter>
  </>
);

export { App };
