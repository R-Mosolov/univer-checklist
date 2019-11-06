import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootswatch/dist/litera/bootstrap.css';
import './global/css/style.css';

import './global/js/create-citation';
import './global/js/night-mode/run-night-mode';
import './global/error-handler/404-not-found';

import Main from './pages/main/main';
import Registration from './pages/registration/registration';
import Login from './pages/login/login';
import AboutServiceBase from './pages/about-service/about-service-base/about-service-base';
import AboutServiceFull from './pages/about-service/about-service-full/about-service-full';
import Profile from './pages/profile/profile';
import Results from './pages/results/results';

import QuestionBlockOne from './pages/checklist/site-content/blocks/question-block-1/question-block-1';
import QuestionBlockTwo from './pages/checklist/site-content/blocks/question-block-2/question-block-2';
import QuestionBlockThree from './pages/checklist/site-content/blocks/question-block-3/question-block-3';
import QuestionBlockFour from './pages/checklist/site-content/blocks/question-block-4/question-block-4';
import QuestionBlockFive from './pages/checklist/site-content/blocks/question-block-5/question-block-5';
import RecommendationsPage from './pages/checklist/site-content/blocks/checklist-recommendations/recommendations-page/recommendations-page';

function App() {
  return (
    <Router>
        <div className="App">
            <Route path="/" exact component={Main} />
            <Route path="/registration" exact component={Registration} />
            <Route path="/login" component={Login} />
            <Route path="/about-service-base" component={AboutServiceBase} />
            <Route path="/about-service-full" component={AboutServiceFull} />
            <Route path="/profile" component={Profile} />
            <Route path="/results" component={Results} />
                <Route path="/checklist-block-1" component={QuestionBlockOne} />
                <Route path="/checklist-block-2" component={QuestionBlockTwo} />
                <Route path="/checklist-block-3" component={QuestionBlockThree} />
                <Route path="/checklist-block-4" component={QuestionBlockFour} />
                <Route path="/checklist-block-5" component={QuestionBlockFive} />
                <Route path="/recommendation-page" component={RecommendationsPage} />
        </div>
    </Router>
  );
}

export default App;
