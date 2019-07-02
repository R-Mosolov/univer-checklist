import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/litera/bootstrap.css';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Registration from "./pages/registration/registration";
import Login from "./pages/login/login";
import AboutService from "./pages/about-service/about-service";
import Checklist from "./pages/checklist/checklist";


function App() {
  return (
    <Router>
        <div className="App">
            <Route path="/" exact component={Registration} />
            <Route path="/login" component={Login} />
            <Route path="/about-service" component={AboutService} />
            <Route path="/checklist" component={Checklist} />
        </div>
    </Router>
  );
}

export default App;