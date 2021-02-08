import React, { Component } from 'react';
import './App.css';
import ToDoList from './ToDoList/ToDoList';
import ErrorModal from './ErrorModal/ErrorModal'

interface Props { }

interface CurrentTask {
  todo: string;
  isCompleted: boolean;
}

interface State {
  list: CurrentTask[];
  currentTask: CurrentTask;
  hasError: boolean;
}

class App extends Component<Props, State> {
  state: State = {
    list: [],
    currentTask: {
      todo: '',
      isCompleted: false
    },
    hasError: false
  };


  countOfRemainingItems: any = () => {
    return this.state.list.reduce((accumulator, currentValue) => {
      if (currentValue.isCompleted === false) {
        accumulator++
      }
      return accumulator;
    }, 0)
  }



  //  'any' below throws error when using type React.KeyboardEvent<HTMLInputElement>
  handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ currentTask: { todo: event.target.value, isCompleted: false } })
  }

  handleSubmit = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (this.state.currentTask.todo.length) {
      const processedList = [...this.state.list, this.state.currentTask]
      this.setState({ list: processedList })
      this.setState({ currentTask: { todo: '', isCompleted: false } })
    } else {
      // alert('Blank todos are not allowed.')
      this.setState({ hasError: true })
    }
  }

  handleDelete = (index: number) => { // "shadowing"
    const filteredList = this.state.list.filter((task, taskNumber) => taskNumber !== index);
    this.setState({ list: filteredList });
  }

  handleComplete = (index: number) => {
    const markedCompletedArray = this.state.list.map((task, taskNumber) => {
      if (taskNumber === index) {
        task.isCompleted = !task.isCompleted;
      }
      return task;
    });
    this.setState({ list: markedCompletedArray });
  }


  render() {
    console.log(this.countOfRemainingItems())
    if (this.state.hasError) {
      return <ErrorModal />
    }
    return (
      <div className="App">
        <h1>Typescript To Do App</h1>
        <input value={this.state.currentTask.todo} onChange={this.handleChange}></input>
        <button onClick={this.handleSubmit}>Add</button>
        <ToDoList
          item={this.state.currentTask}
          list={this.state.list}
          handleDelete={this.handleDelete}
          handleComplete={this.handleComplete}
          remainingTaskCount={this.countOfRemainingItems()}
        />
      </div>
    );
  }
}

export default App;
