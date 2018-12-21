import React, {Component} from 'react'
import Users from "./Users";
import Add from "./Add";
import Mybutton from "./Mybutton";
import Cancelbutton from "./Cancelbutton";

export default class Content extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text: 'Добавить',
            isAddCancel: false,
            isUpdated: false
        }
    }

    render() {
        let addText = this.state.text
        let AddButton = !this.state.isAddCancel && <Mybutton parentMethod={this.addCancel}/>
        let CancelButton = this.state.isAddCancel && <Cancelbutton parentMethod={this.addCancel}/>
        const users = !this.state.isAddCancel && <Users parentMethodEdit={this.changeState}/>
        const add = this.state.isAddCancel && <Add parentMethod={this.addCancel} text={addText}/>


        return (
            <div>
                <div>{AddButton}</div>
                <div>{users}</div>
                <div>{add}</div>
                <div>{CancelButton}</div>
            </div>
        )
    }

    changeState = () => {
        this.setState({
            text: 'Редактировать',
            isAddCancel: !this.state.isAddCancel
        })
    }

    addCancel = () => {
        this.setState({
            isAddCancel: !this.state.isAddCancel
        })
    }
}