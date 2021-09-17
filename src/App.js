import { BrowserRouter, Route, Switch, NavLink } from "react-router-dom";
import "./App.css";

import About from "./components/About";
import Home from "./components/Home";
import Post from "./components/Post";
import Posts from "./components/Posts";
function App() {
  return (
    <BrowserRouter>
      <div className="nav">
        <NavLink className="linkname" to="/">
          Home
        </NavLink>
        <NavLink className="linkname" to="/posts">
          Posts
        </NavLink>
        <NavLink className="linkname" to="/about">
          About
        </NavLink>
      </div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/about" component={About} />
        <Route path="/posts/:id" component={Post} />
        <Route path="/posts" component={Posts} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
