import React, { Component } from 'react';
import styles from './ToDoList.module.css';
import ToDoItem from '../ToDoItem/ToDoItem'

interface currentTask {
    todo: string,
    isCompleted: boolean
}

interface Props {
    item: currentTask;
    list: currentTask[];
    handleDelete: (index: number) => void;
    handleComplete: (index: number) => void;
    handleSave: (index: number, text: string) => void;
    handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
    remainingTaskCount: () => number;
}

class ToDoList extends Component<Props, {}> {
    render() {
        const mappedList = this.props.list.map((item, index) => <ToDoItem item={item} 
                                                                index={index} 
                                                                handleComplete={this.props.handleComplete} 
                                                                handleSave={this.props.handleSave} 
                                                                handleChange={this.props.handleChange}
                                                                handleDelete={this.props.handleDelete}/>);

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