import React, {Component} from 'react'
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import Fab from '@material-ui/core/Fab';

export default class Users extends Component {

    constructor(props) {
        super(props);
        this.state = {
            users: [],
            isLoaded: false,
        }
    }

    componentDidMount() {
        fetch('http://localhost:8080/rest/users')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    users: json,
                    isLoaded: !this.state.isLoaded
                })
            })
    }

    render() {
        if (this.state.isLoaded) {
            return (
                <Paper>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>Login</TableCell>
                                <TableCell>Email</TableCell>
                                <TableCell>First name</TableCell>
                                <TableCell>Last name</TableCell>
                                <TableCell>Age</TableCell>
                                <TableCell>Role</TableCell>
                                <TableCell>Actions</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {this.state.users.user.map((user, key) =>
                                <TableRow key={key} className="table">
                                    <TableCell> {user.login}</TableCell>
                                    <TableCell> {user.email}</TableCell>
                                    <TableCell> {user.firstName}</TableCell>
                                    <TableCell> {user.lastName}</TableCell>
                                    <TableCell> {this.calculate_age(user.birthday)}</TableCell>
                                    <TableCell> {this.showRoleName(user.roleId)}</TableCell>
                                    <TableCell>
                                        <span onClick={this.editUser.bind(this, user.id)}>
                                            <Fab color="secondary" aria-label="Edit">
                                                <Icon>edit_icon</Icon>
                                            </Fab>
                                        </span>
                                        <span onClick={this.deleteUser.bind(this, user.id)}>
                                            <Fab aria-label="Delete">
                                                <DeleteIcon/>
                                            </Fab>
                                        </span>

                                    </TableCell>
                                    <td hidden> {user.id}</td>
                                    <td hidden> {user.password}</td>
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </Paper>
            )
        } else {
            return (
                <div align="center">
                    <CircularProgress/>
                </div>
            )
        }
    }

    showRoleName(role_id) {
        if (role_id === '1') {
            return 'Admin'
        } else if (role_id === '2') {
            return 'User'
        }
    }

    calculate_age(dateJson) {
        let date = new Date(dateJson);
        let today_date = new Date();
        let today_year = today_date.getFullYear();
        let today_month = today_date.getMonth();
        let today_day = today_date.getDate();
        let age = today_year - date.getFullYear();
        if (today_month < (date.getMonth() - 1)) {
            age--;
        }
        if (((date.getMonth() - 1) === today_month) && (today_day < date.getDay())) {
            age--;
        }
        return age;
    }

    editUser(id) {
        this.props.parentMethodEdit()
    }

    deleteUser(id) {
        fetch('http://localhost:8080/rest/users/' + id, {
                method: 'DELETE',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json',
                },
            }
        );
        alert("Пользователь успешно удалён")
        this.setState({
            isLoaded: !this.state.isLoaded
        })
        this.componentDidMount()
    }
}