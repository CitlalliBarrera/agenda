import React, { Component } from 'react';
import Dialog from '@material-ui/core/Dialog';
import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { List, ListItem, ListItemText } from '@material-ui/core/';
import Button from '@material-ui/core/Button';

export class Confirm extends Component {
    continue = e => {
        e.preventDefault();
        // PROCESS FORM //
        this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    };

    render() {
        const {
            values: { Name,firstName, lastName, fechaNacimiento, email, telefono, domicilio, sexo }
        } = this.props;
        return (
            <MuiThemeProvider >
                <React.Fragment>
                    <Dialog
                        open="true"
                        fullWidth="true"
                        maxWidth='sm'
                    >
                        <AppBar title="Confirm User Data" />
                        <List>

                            <ListItem>
                                <ListItemText primary="Name" secondary={Name} />
                            </ListItem>


                            <ListItem>
                                <ListItemText primary="First Name" secondary={firstName} />
                            </ListItem>



                            <ListItem>
                                <ListItemText primary="Last Name" secondary={lastName} />
                            </ListItem>


                            <ListItem>
                                <ListItemText primary="Fecha Nacimiento" secondary={fechaNacimiento} />
                            </ListItem>


                            <ListItem>
                                <ListItemText primary="Teléfono" secondary={telefono} />
                            </ListItem>



                            <ListItem>
                                <ListItemText primary="Email" secondary={email} />
                            </ListItem>

                            <ListItem>
                            <ListItemText primary="Sexo" secondary={sexo} />
                            </ListItem>
                            <ListItem>
                                <ListItemText primary="Domicilio" secondary={domicilio} />
                            </ListItem>

                        </List>
                        <br />




                        <Button
                            color="default"
                            variant="contained"
                          //  onClick={this.continue}
                        >Siguiente</Button>


                    </Dialog>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default Confirm;