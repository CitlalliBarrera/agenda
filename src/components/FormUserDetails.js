import React, {Component} from 'react';
import Dialog from '@material-ui/core/Dialog';
//import AppBar from '@material-ui/core/AppBar';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import {withStyles} from "@material-ui/core/styles";


//import InputAdornment from '@material-ui/core/InputAdornment';
//import AccountCircle from '@material-ui/icons/AccountCircle';


import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'


const useStyles = theme => ({
    margin: {
        margin: theme.spacing(1),
        //width: '100%',
        //maxWidth: 500,
    },
    paperConteiner: {
        margin: theme.spacing(10)
    }
});

export class FormUserDetails extends Component {
    continue = e => {
        e.preventDefault();
        this.props.nextStep();

    };

    render() {
        const {values, handleChange, classes} = this.props;
        return (


            <MuiThemeProvider>
                <React.Fragment>
                    <Paper
                        open="true"
                        className={classes.paperConteiner}

                        //fullWidth="true"
                        //  maxWidth='200'
                    >

                        <Typography variant="h6" gutterBottom>
                            Agenda.
                        </Typography>


                        <TextField
                            placeholder="Nombre"
                            label="Nombre"
                            onChange={handleChange('Name')}
                            defaultValue={values.Name}
                            //margin="normal"
                            // fullWidth="true"
                        />
                        <br/>




                        <TextField
                            placeholder="Introduce tu prmer apellido"
                            label="Primer Apellido"
                            onChange={handleChange('firstName')}
                            defaultValue={values.firstName}
                            //margin="normal"
                            //fullWidth="true"
                        />
                        <br/>


                        <TextField
                            placeholder="Introduce tu segundo apellido"
                            label="Segundo Apellido"
                            onChange={handleChange('lastName')}
                            defaultValue={values.lastName}
                            //margin="normal"
                            // fullWidth="true"
                        />
                        <br/>

                        <TextField
                            id="date"
                            label="Fecha de Nacimiento"
                            type="date"
                            defaultValue="2017-05-24"
                            //   className={classes.textField}
                            InputLabelProps={{
                                shrink: true,
                            }}
                        />

                        <TextField
                            placeholder="Teléfono"
                            label="telefono"
                            onChange={handleChange('telefono')}
                            defaultValue={values.telefono}
                            //  margin="normal"
                            //fullWidth="true"
                        />


                        <TextField
                            placeholder="intriduce tu Email"
                            label="Email"
                            onChange={handleChange('email')}
                            defaultValue={values.email}
                            //  margin="normal"
                            //fullWidth="true"
                        />


                        <TextField
                            placeholder="Sexo"
                            label="sexo"
                            onChange={handleChange('sexo')}
                            defaultValue={values.sexo}
                            //  margin="normal"
                            //fullWidth="true"
                        />


                        <TextField
                            placeholder="Sexo"
                            label="sexo"
                            onChange={handleChange('sexo')}
                            defaultValue={values.sexo}
                            //  margin="normal"
                            //fullWidth="true"
                        />

                        <TextField
                            placeholder="Domicilio"
                            label="domicilio"
                            onChange={handleChange('domicilio')}
                            defaultValue={values.domicilio}
                            //  margin="normal"
                            //fullWidth="true"
                        />


                        <br/>


                        <Button
                            color="default"
                            variant="contained"
                            onClick={this.continue}
                        >Siguiente</Button>


                    </Paper>
                </React.Fragment>
            </MuiThemeProvider>
        );
    }
}

export default withStyles(useStyles)(FormUserDetails);