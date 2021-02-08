import React, { Component } from 'react';
import './App.css';
import TaskForm from './components/TaskForm';
import Control from './components/Control';
import TaskList from './components/TaskList'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false,
    }
  }

  componentDidMount() {
    if (localStorage && localStorage.getItem('tasks')) {
      var tasks = JSON.parse(localStorage.getItem('tasks'));
      this.setState({
        tasks: tasks
      })
    }
  }

  onGenerateData = () => {
    var tasks = [
      {
        id: this.generateID(),
        title: "Learn Japanese",
        status: true,
      },
      {
        id: this.generateID(),
        title: "Learn ENGLISh",
        status: false,
      },
      {
        id: this.generateID(),
        title: "Learn Code",
        status: true
      }
    ];
    this.setState({
      tasks: tasks
    })
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }

  s4() {
    return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
  }

  generateID() {
    return this.s4() + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4()
      + '-' + this.s4() + '-' + this.s4() + '-' + this.s4() + '-' + this.s4();
  }

  onToggleForm = () => {
    this.setState({
      isDisplayForm: !this.state.isDisplayForm
    })
  }

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false
    })
  }

  onHandleSubmit = (data) => {
    var {tasks} = this.state;
    data.id = this.generateID;
    console.log(data);
    tasks.push(data);
    this.setState({
      tasks: tasks
    });
    localStorage.setItem('tasks', JSON.stringify(tasks));
  } 

  render() {
    var { tasks, isDisplayForm } = this.state;
    var elmTaskForm = isDisplayForm ?
      <TaskForm onHandleSubmit={this.onHandleSubmit}
        onCloseForm={this.onCloseForm} /> : '';
    return (
      <div className="container">
        <div className="text-center">
          <h1>Task Management</h1>
        </div>

        <div className="row">
          <div className={isDisplayForm ?
            "col-xs-4 col-sm-4 col-md-4 col-lg-4" : ''}>
            {elmTaskForm}
          </div>

          <div className={isDisplayForm ?
            "col-xs-8 col-sm-8 col-md-8 col-lg-8" : "col-xs-12 col-sm-12 col-md-12 col-lg-12"}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.onToggleForm}>
              <span className="fa fa-plus mr-5"></span>Add task
            </button>
            <button
              type="button"
              className="btn btn-danger"
              onClick={this.onGenerateData}>
              Generate Data
            </button>
            <br /><br />
            <Control />
            <br />
            <TaskList tasks={tasks} />
          </div>
        </div>
      </div >
    )
  };
}

export default App;
