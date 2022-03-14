import Home from "./components/Home";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import SignIn from "./components/SignIn";
import Dashboard from "./components/dashboard/Dashboard";
import LoadingModal from "./components/LoadingModal";
import Documentation from "./components/documentation/Documentation";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import React from "react";
import { isSignedIn, getEmail } from "./ajax/user";
import store from "./app/store";


export default class App extends React.Component {
  async componentDidMount() {
    
    let isSignedInVar = await isSignedIn();
    
    if (isSignedInVar) {
      store.dispatch({ type: "user/updateEmail", payload: getEmail() });
      store.dispatch({ type: "user/updateIsSignedIn", payload: true });
    }
  }
  render() {
    
    return (
      <div className="app">
        <BrowserRouter>
          <Header onDocs={window.location.pathname.indexOf("docs") > 0}></Header>
          <Switch>
            <Route exact path="/" component={Home}></Route>
            <Route exact path="/sign-in/" component={SignIn}></Route>
            <Route path="/dashboard/" component={Dashboard}></Route>
            <Route path="/docs/:routeName?" component={Documentation}></Route>
          </Switch>
          <Footer></Footer>
        </BrowserRouter>
        
        <LoadingModal></LoadingModal>
      </div>
    );
  }
}
