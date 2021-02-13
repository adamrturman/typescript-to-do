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
  isOpen: boolean;
}

class App extends Component<Props, State> {
  state: State = {
    list: [],
    currentTask: {
      todo: '',
      isCompleted: false
    },
    isOpen: false
  };


  countOfRemainingItems: any = () => {
    return this.state.list.reduce((accumulator, currentValue) => {
      if (currentValue.isCompleted === false) {
        accumulator++
      }
      return accumulator;
    }, 0)
  }

  handleSave = (index: number, text: string) => {
    // map through the list, and for the element in question (i.e. at the index), update its text
    // then set the mapped list on state
    const savedList = this.state.list.map((task, taskNumber) => {
      if (taskNumber === index) {
        //  I can 
        task.todo = "new task"
        // task.todo = text
      }
      return task;
    })
    this.setState({ list: savedList })
  };

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
      //  isOpen rather than hasError to control the state of the modal (in this file not the modal component)
      this.setState({ isOpen: true })
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

  closeModal = () => {
    this.setState({ isOpen: false })
  }

  render() {
    // if (this.state.hasError) {
    // return <ErrorModal isOpen={this.state.isOpen} />
    // }

    return (
      <div className="App">
        <ErrorModal isOpen={this.state.isOpen} closeModal={this.closeModal} />
        <h1>Typescript To Do App</h1>
        <input value={this.state.currentTask.todo} onChange={this.handleChange}></input>
        <button onClick={this.handleSubmit}>Add</button>
        <ToDoList
          item={this.state.currentTask}
          list={this.state.list}
          handleDelete={this.handleDelete}
          handleComplete={this.handleComplete}
          handleChange={this.handleChange}
          remainingTaskCount={this.countOfRemainingItems()}
          handleSave={this.handleSave}
        />
      </div>
    );
  }
}

export default App;
