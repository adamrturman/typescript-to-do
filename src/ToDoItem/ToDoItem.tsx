import React, { Component } from 'react';
import styles from '../ToDoList/ToDoList.module.css';

interface TodoItemProps {
    item: any;
    index: number;
    handleComplete: (index: number) => void;
    handleSave: (index: number, text: string) => void;
    handleDelete: (index: number) => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

interface TodoItemState {
    isEditable: boolean;
}

class ToDoItem extends Component<TodoItemProps, TodoItemState>{
    state = {
        isEditable: false
    };

    handleSaveTodo = () => {
        this.setState({
            isEditable: false
        }, 
        () => this.props.handleSave(this.props.index, this.props.item.todo));
    }

    render() {
        const {item, index} = this.props;

        const itemClasses = item.isCompleted ? `${styles.completed} ${styles.bold}` : styles.bold;

        return (
            <li className={itemClasses} key={index}>
                    {this.state.isEditable ?
                    <input onChange={this.props.handleChange} value={item.todo} />
                    :
                    <span>
                        {item.todo}
                    </span>
                    }
                    <button onClick={() => this.props.handleComplete(index)}>{item.isCompleted ? `Mark Undone` : `Mark Done`}</button>
                    <button onClick={() => this.props.handleDelete(index)}>Delete</button>
                    {this.state.isEditable ?
                        <button onClick={() => this.handleSaveTodo()}>Save</button> :
                        <button onClick={() => this.setState({ isEditable: true })}>Edit</button>
                    }
                </li>
        );
    }
}
export default ToDoItem;