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
    remainingTaskCount: () => number;
}

interface State {
    isEditable: boolean
}

class ToDoList extends Component<Props, State> {
    state: State = {
        isEditable: false
    }


    render() {
        const mappedList = this.props.list.map((item, index) => {
            const itemClasses = item.isCompleted ? `${styles.completed} ${styles.bold}` : styles.bold;

            return (
                <li className={itemClasses} key={index}>
                    <span contentEditable={this.state.isEditable} suppressContentEditableWarning={true}>
                        {item.todo}
                    </span>
                    <button onClick={() => this.props.handleComplete(index)}>{item.isCompleted ? `Mark Undone` : `Mark Done`}</button>
                    <button onClick={() => this.props.handleDelete(index)}>Delete</button>
                    {this.state.isEditable ?
                        <button onClick={() => this.setState({ isEditable: false })}>Save</button> :
                        <button onClick={() => this.setState({ isEditable: true })}>Edit</button>
                    }
                </li>
            )
        });

        return (
            <>
                <h2>ToDoList</h2>
                <div>{mappedList}</div>
                <div>Items remaining: {this.props.remainingTaskCount}</div>
            </>
        );
    }
}

export default ToDoList;