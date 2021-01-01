import React, { Component } from 'react';
import './assets/css/admin.css';
import AppBar from '@material-ui/core/AppBar';
import ToolBar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';


class AdminWrapper extends Component {
    render(){
        return(
            <div id="admin-page">
                <AppBar>
                    <ToolBar>
                        <Typography 
                            component="h1"
                            variant="h6"
                            color="inherit"
                            noWrap
                        >Admin</Typography>
                    </ToolBar>
                </AppBar>

                {this.props.children}
            </div>
        )
    }
}

export default AdminWrapper;