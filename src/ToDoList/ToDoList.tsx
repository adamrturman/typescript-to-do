import React, {Component} from 'react'
import styles from  './ToDoList.module.css'

interface Props {
    item: any,
    list: string[]
    deleted: any
    // completed: boolean
}

interface State {
    list: string[]
}

class ToDoList extends Component<Props, State> {
    constructor(props: Props){
        super(props)
        this.state = {
            list: []
        }
    }



    componentDidMount(){
        console.log("Mounted", this.props.item.isCompleted)
    }

    componentWillUpdate() {
        console.log("Will update")
        
    }

    componentDidUpdate(){
        console.log("Did Update", this.props)
    }

    
    render() {
        const mappedList = this.props.list.map((item, index) => (
            <li className={styles.bold}>{item}<button>Mark Done</button><button onClick={this.props.deleted(index)}>Delete</button></li>
        ))
        return(
            <>
            <h1>ToDoList</h1>
            <div>{mappedList}</div>
            </>
        )
    }
}

export default ToDoList