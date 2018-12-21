import React, {Component} from 'react'
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';

export default class Mybutton extends Component {

    render() {
        return (
            <div onClick={this.props.parentMethod}>
                <Fab color="primary" aria-label="Add">
                    <AddIcon/>
                </Fab>
            </div>
        )
    }
}