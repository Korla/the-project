import React from 'react';
import TopNav from './components/TopNav';
import { BrowserRouter, Route } from "react-router-dom";
import Home from './routes/Home';
import Details from './routes/Details';

function App() {
  return (
    <BrowserRouter>
      <div>
        <TopNav />
        <Route path="/" component={Home} />
        <Route exact path="/details/:id" component={Details} />
      </div>
    </BrowserRouter>
  );
}

export default App;
