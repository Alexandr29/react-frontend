import React, {Component} from 'react'
import Fab from "@material-ui/core/Fab/Fab";
import NavigationIcon from '@material-ui/icons/Navigation';

export default class Cancelbutton extends Component {

    render() {
        return (
            <div onClick={this.props.parentMethod} align="center">
                <Fab variant="extended" aria-label="Delete">
                    <NavigationIcon/>
                    Cancel
                </Fab>
            </div>
        )
    }
}