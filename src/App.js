import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Header></Header>
      <BrowserRouter>
          <Switch>
            <Route exact path="/" component={Home}>
            </Route>
          </Switch>
        </BrowserRouter>
    </div>
  );
}

export default App;
