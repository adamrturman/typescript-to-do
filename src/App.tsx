import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList/ToDoList';

interface Props { }

interface CurrentTask {
  todo: string,
  isCompleted: boolean
}

interface State {
  list: CurrentTask[],
  currentTask: CurrentTask
}

class App extends Component<Props, State> {
  state: State = {
    list: [],
    currentTask: {
      todo: '',
      isCompleted: false
    }
  };

  //  'any' below throws error when using type React.KeyboardEvent<HTMLInputElement>
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ currentTask: { todo: event.target.value, isCompleted: false } })
  }

  handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    const processedList = [...this.state.list, this.state.currentTask]
    this.setState({ list: processedList })
    this.setState({ currentTask: { todo: '', isCompleted: false } })
  }

  handleDelete = (index: number) => { // "shadowing"
    const filteredList = this.state.list.filter((task, taskNumber) => taskNumber !== index);
    this.setState({ list: filteredList });
  }

  handleComplete = (index: number) => {
    //  need to build this function out
    //  add the 'completed' to the array element whose index matches
    //  map - element and elementNumber (avoid shadowing)
    const markedCompletedArray = this.state.list.map((task, taskNumber) => {
      if (taskNumber === index) {
        task.isCompleted = true;
      }

      return task;
    });
    
    //  redefine the state with that updated list
    this.setState({ list: markedCompletedArray });
  }

  

  render() {
    return (
      <div className="App">
        <h1>Typescript To Do App</h1>
        <input value={this.state.currentTask.todo} onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Add</button>
        <ToDoList item={this.state.currentTask} list={this.state.list} handleDelete={this.handleDelete} handleComplete={this.handleComplete}/>
      </div>
    );
  }
}

export default App;
