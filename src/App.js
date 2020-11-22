import React from "react";

import { Switch, Route } from "react-router-dom";
import styled from "styled-components";

import Home from "./pages/Home";
import CreateBlog from "./pages/CreateBlog";
import DetailBlog from "./pages/DetailBlog";
import ErrorPage from "./pages/_error";

const App = () => {
  return (
    <div>
      <Switch>
        <Route path="/create-blog" exact component={CreateBlog} />
        <Route path="/blog/:id" exact component={DetailBlog} />
        <Route path="/" exact component={Home} />
        <Route path="*" exact component={ErrorPage} />
      </Switch>
    </div>
  );
};

const AppContainer = styled.div``;

export default App;
