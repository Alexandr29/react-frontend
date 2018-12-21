import React, {Component} from 'react'
import TextField from '@material-ui/core/TextField';
import Button from "@material-ui/core/es/Button/Button";

export default class Add extends Component {

    render() {
        return (
            <div className="component" align="center">
                {this.props.text} пользователя.
                <form noValidate autoComplete="off">
                    <p><TextField
                        id="standard-login"
                        label="Login"
                        margin="dense"
                    /></p>
                    <p><TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                    /></p>
                    <p><TextField
                        id="standard-password-input"
                        label="Password Again"
                        type="password"
                        autoComplete="current-password"
                        margin="normal"
                    /></p>
                    <p><TextField
                        id="standard-email-input"
                        label="Email"
                        type="email"
                        name="email"
                        autoComplete="email"
                        margin="normal"
                    /></p>
                    <p><TextField
                        id="standard-firstname-input"
                        label="First Name"
                        margin="dense"
                    /></p>
                    <p><TextField
                        id="standard-lastname-input"
                        label="Last Name"
                        margin="dense"
                    /></p>
                    <p><TextField
                        id="standard-date-input"
                        label="Date of birthday"
                        defaultValue="2017-05-24"
                        type="date"
                        name="date"
                        autoComplete="date"
                        margin="normal"
                    /></p>
                    <Button size="large" variant="contained" color="primary" onClick={this.handleChange}>
                        {this.props.text}
                    </Button>
                    <p></p>
                    <p></p>
                </form>
            </div>

        )
    }

    handleChange = () => {
        fetch('http://localhost:8080/rest/users', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                login: document.getElementById('standard-login').value,
                password: document.getElementById('standard-password-input').value,
                email: document.getElementById('standard-email-input').value,
                firstName: document.getElementById('standard-firstname-input').value,
                lastName: document.getElementById('standard-lastname-input').value,
                birthday: document.getElementById('standard-date-input').value,
                roleId: 2,
            })
        })
        this.props.parentMethod()
    }

}