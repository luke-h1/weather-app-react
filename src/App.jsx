import React from 'react';
import HomePage from './components/Pages/HomePage/HomePage';
import { GlobalStyle } from './styles/GlobalStyle';
import { Route, Switch, BrowserRouter } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>

      <>
        <GlobalStyle>
          <Switch>
            <Route path='/' exact component={HomePage} />
          </Switch>
        </GlobalStyle>
      </>
    </BrowserRouter>
  );
}

export default App;
