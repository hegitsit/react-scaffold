import React from 'react';
import ReactDOM from 'react-dom'
import './index.css';

import { Home } from './components/Home';
import { StudentList } from './components/StudentList';
import { StudentDetails } from './components/StudentDetails';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import StudentListState from './context/StudentListState';

export const App = () => {

  return (
    <StudentListState>
      <Router>
        <div>
          <Route exact path='/' component={Home} />
          <Route exact path="/students" component={StudentList} />
          <Route exact path="/student/:index" component={StudentDetails} />
        </div>
      </Router>
    </StudentListState>
  )
}

ReactDOM.render(
  <App />,
  document.getElementById('app')
)

