import React, { Component } from 'react';
import { BrowserRouter as Router, Route, NavLink} from 'react-router-dom'
import './App.css';
import AboutUs from './components/AboutUs';
import home from './components/Home.js';
import Navbar from './components/Navbar'
import NewTaskForm from './components/NewTaskForm';
import TaskContainer from './containers/TaskContainer'
import EditTaskForm from './components/EditTaskForm';
import SingleTodo from './components/SingleTodo.js'

export default class App extends Component {
  
  render(){
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={home}/>
          <Route exact path="/info" component={AboutUs}></Route>
          <Route exact path="/newtask" component={NewTaskForm}></Route>
          <Route exact path="/viewtasks" component={TaskContainer}></Route>
          <Route exact path="/edittask" component={EditTaskForm}></Route>
          <Route exact path="/todo" component={SingleTodo}></Route>
        </div>
      </Router>
    );
  }
}

