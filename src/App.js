import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import LoadingModal from "./components/LoadingModal";
import { BrowserRouter, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route exact path="/" component={Home}></Route>
          <Route exact path="/sign-in/" component={SignIn}></Route>
        </Switch>
      </BrowserRouter>
      <Footer></Footer>
      <LoadingModal></LoadingModal>
    </div>
  );
}

export default App;
