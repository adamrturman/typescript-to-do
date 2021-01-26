import React, {Component} from 'react';
import './App.css';
import ToDoList from './ToDoList/ToDoList'

interface Props {}

interface State {
  list: string[],
  currentTask: any
  // todo: string,
}


class App extends Component<Props, State> {
  constructor(props:any){
    super(props)
    this.state = {
      list: [],
      currentTask: {
        todo : '',
        isCompleted : false
      }

    }
  }

  handleDelete:any = (event: any, index: number) => {
    const processedList = [... this.state.list]
    console.log(processedList, index)
}

  handleChange = (event:any) => {
    this.setState({ currentTask: { todo: event.target.value , isCompleted: false } })
  }

  handleClick = (event:any) => {
    const processedList = [...this.state.list, this.state.currentTask.todo]
    this.setState({ list: processedList })
    this.setState({ currentTask: {todo: '', isCompleted: false} })
  }
  
  render () {
    return (
      <div className="App">
        <h1>Typescript To Do App</h1>
        <input value={this.state.currentTask.todo} onChange={this.handleChange}></input>
        <button onClick={this.handleClick}>Add</button>
        <ToDoList item={this.state.currentTask} list={this.state.list} deleted={this.handleDelete} />
      </div>
    );
  }
}

export default App;
