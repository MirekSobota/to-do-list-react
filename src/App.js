import {HashRouter, Switch, Route, Link}  from "react-router-dom"

import { Tasks } from "./features/tasks/Tasks";

const App = () => 

<HashRouter>
<nav>
    <ul>
        <li>
        <Link to ="/tasks">TASKS</Link>
        </li>
    </ul>
</nav>
<Switch>
<Route path="/tasks">
    <Tasks />
</Route>
</Switch>
</HashRouter>


export { App };
