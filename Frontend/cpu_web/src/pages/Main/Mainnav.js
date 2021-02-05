import { React } from "react";
import { Route, Switch } from "react-router-dom";
import { Main, Welfare, Notice, NoticeCreate, NoticeDetail, Mypage } from "./";
const MainNav = () => {
  return (
    <>
      <Switch>
        <Route exact path="/" component={Main} />
        <Route
          exact
          path="/notice/:tab/noticelist/:pageNumber"
          component={Notice}
        />
        <Route exact path="/notice/:tab/detail/:num" component={NoticeDetail} />
        <Route exact path="/notice/:tab/create" component={NoticeCreate} />
        <Route exact path="/welfare" component={Welfare} />
        <Route exact path="/mypage" component={Mypage} />
      </Switch>
    </>
  );
};

export default MainNav;
