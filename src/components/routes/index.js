import React from "react";
import { Switch, Route } from "react-router-dom";

import RouteWrapper from "./Route";
import Welcome from "../../components/pages/Welcome";
import AddPost from "../pages/AddPost";
import Posts from "../pages/Posts";
import SignIn from "../pages/sign/SignIn";
import SignUp from "../pages/sign/SignUp";
import NotFound from "../../components/pages/NotFound";

import {
  HOME_PATH,
  ADD_POST_PATH,
  POSTS_PATH,
  SIGN_IN_PATH,
  SIGN_UP_PATH
} from "../../constants/Pathes";

export default function Routes() {
  return (
    <Switch>
      <RouteWrapper exact path={HOME_PATH} component={Welcome} isNavBar />
      <RouteWrapper
        path={ADD_POST_PATH}
        component={AddPost}
        isPrivate
        isNavBar
      />
      <RouteWrapper path={POSTS_PATH} component={Posts} isPrivate isNavBar />
      <RouteWrapper path={SIGN_IN_PATH} component={SignIn} />
      <RouteWrapper path={SIGN_UP_PATH} component={SignUp} />
      <Route component={NotFound} />
    </Switch>
  );
}
