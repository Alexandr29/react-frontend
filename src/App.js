import React, {Component} from 'react';
import Content from "./Content";
import Button from '@material-ui/core/Button';
import List from "@material-ui/core/es/List/List";

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            text: 'Войти',
            isOpenUsers: false,
            isUpdated: 'No'
        }
    }


    render() {
        let text = this.state.text
        const users = this.state.isOpenUsers && <Content/>
        return (
            <div className="container">
                <div className="App">
                    <List>
                        <div align="right">
                            <Button variant="contained" color="primary" onClick={this.openUsers}>{text}</Button>
                        </div>
                    </List>
                    {users}
                </div>
            </div>
        );
    }

    openUsers = () => {
        if (!this.state.isOpenUsers) {
            this.setState({text: 'Выйти'})
        } else this.setState({text: 'Войти'})
        this.setState({
            isOpenUsers: !this.state.isOpenUsers
        })
    }
}

export default App;
