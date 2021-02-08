import React, { Component } from 'react';
import styles from './ToDoList.module.css';

interface currentTask {
    todo: string,
    isCompleted: boolean
}

interface Props {
    item: currentTask;
    list: currentTask[];
    handleDelete: (index: number) => void;
    handleComplete: (index: number) => void;
}

interface State {
    isEditable: boolean
}

class ToDoList extends Component<Props, State> {
    // handleComplete = (index: number) => {
    //     //  need to build this function out
    // }
    state: State = {
        isEditable: false
    }

    componentDidMount() {
        console.log("Mounted- item.isCompleted", this.props.item.isCompleted)
    }

    componentWillUpdate() {
        console.log("Will update")

    }

    componentDidUpdate() {
        console.log("Did Update", this.props)
    }

    render() {
        const mappedList = this.props.list.map((item, index) => {
            const itemClasses = item.isCompleted ? `${styles.completed} ${styles.bold}` : styles.bold;

            return (
                <li  className={itemClasses} key={index}>
                    <span contentEditable={this.state.isEditable}>
                        {item.todo}
                    </span>
                    <button onClick={() => this.props.handleComplete(index)}>Mark Done</button>
                    <button onClick={() => this.props.handleDelete(index)}>Delete</button>
                    {this.state.isEditable ? 
                    <button onClick={() => this.setState({ isEditable: false })}>Save</button> : 
                    <button onClick={() => this.setState({ isEditable: true })}>Edit</button>}
                    {/* {this.state.isEditable ? <button>Save</button> : null} */}
                </li>
            )
        });

        return (
            <>
                <h2>ToDoList</h2>
                <div>{mappedList}</div>
            </>
        );
    }
}

export default ToDoList;