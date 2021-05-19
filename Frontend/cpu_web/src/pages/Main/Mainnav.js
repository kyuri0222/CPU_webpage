import { React } from "react";
import { Route, Switch } from "react-router-dom";
import { Main, Welfare, Announce, Free, Employee, AnnounceCreate, FreeCreate, EmployeeCreate, AnnounceDetail, EmployeeDetail, FreeDetail, Mypage } from "./";
const MainNav = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route exact path="/Announce" component={Announce} />
        <Route exact path="/Announce/create" component={AnnounceCreate} />
        <Route exact path="/Announce/detail/:num" component={AnnounceDetail} />
        <Route exact path="/Free" component={Free} />
        <Route exact path="/Free/create" component={FreeCreate} />
        <Route exact path="/Free/detail/:num" component={FreeDetail} />
        <Route exact path="/Employee" component={Employee} />
        <Route exact path="/Employee/create" component={EmployeeCreate} />
        <Route exact path="/Employee/detail/:num" component={EmployeeDetail} />
        <Route exact path="/welfare" component={Welfare} />
        <Route exact path="/mypage" component={Mypage} />
      </Switch>
    </>
  );
};

export default MainNav;
