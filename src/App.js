import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
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
        <Footer></Footer>
    </div>
  );
}

export default App;
