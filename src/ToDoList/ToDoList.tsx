import { listenerCount } from 'process'
import React, {Component} from 'react'

interface Props {
    item: object,
    list: string[]
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
        console.log("Mounted", this.props)
    }

    componentWillUpdate() {
        console.log("Will update")
    }

    componentDidUpdate(){
        console.log("Did Update", this.props)
    }

    
    render() {
        const mappedList = this.props.list.map((item) => (
            <li>{item}</li>
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