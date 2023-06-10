import { Link, Route, Router } from "./navigation-router";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <Router>
        <Link to={"/articles"}>
          <span>articles</span>
        </Link>
        <Link to={"/products"}>
          <span>products</span>
        </Link>
        <Route path={"/articles"}>
          <div>
            <span>Articles is here!</span>
          </div>
        </Route>
        <Route path={"/products"}>
          <div>
            <span>products is here!</span>
          </div>
        </Route>
      </Router>
    </div>
  );
}
