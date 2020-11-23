import React from "react";
import HomePage from "./components/Pages/HomePage/HomePage";
import { GlobalStyle } from "./styles/GlobalStyle";
import { Route, Switch, BrowserRouter } from "react-router-dom";
function App() {
  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={HomePage} />
        </Switch>
      </BrowserRouter>
    </>
  );
}

export default App;
