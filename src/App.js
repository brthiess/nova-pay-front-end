import Home from "./components/Home";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";
import LoadingModal from "./components/LoadingModal";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import { isSignedIn, getUsername } from "./ajax/user";
import store from "./app/store";

export default class App extends React.Component {
  componentDidMount() {
    let isSignedInVar = isSignedIn();
    if (isSignedInVar) {
      store.dispatch({ type: "user/updateUsername", payload: getUsername() });
      store.dispatch({ type: "user/updateIsSignedIn", payload: true });
    }
  }
  render() {
    return (
      <div className="app">
        <BrowserRouter>
          <Header></Header>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/sign-in/" component={SignIn}></Route>
            <Route exact path="/dashboard/" component={Dashboard}></Route>
          </Switch>
        </BrowserRouter>
        <Footer></Footer>
        <LoadingModal></LoadingModal>
      </div>
    );
  }
}
