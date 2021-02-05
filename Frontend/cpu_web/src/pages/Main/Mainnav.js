import { React } from "react";
import { Route, Switch } from "react-router-dom";
import { Free, Main, Welfare, Getajob, Notice } from "./";
const MainNav = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/notice" component={Notice} />
        <Route exact path="/free" component={Free} />
        <Route exact path="/getajob" component={Getajob} />
        <Route exact path="/welfare" component={Welfare} />
      </Switch>
    </>
  );
};

export default MainNav;
