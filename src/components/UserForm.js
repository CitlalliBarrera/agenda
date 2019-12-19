import React, { Component } from 'react';
import FormUserDetails from './FormUserDetails';
import FormPersonalDetails from './FormPersonalDetails';
import Confirm from './Confirm';
import Success from './Success';


export class UserForm extends Component {
    state = {
        step: 1,
        Name: '',
        firstName: '',
        lastName: '',
        fechaNacimiento:'',
        telefono: '',
        email: '',
        sexo: '',
        domicilio: '',


    };

    // Proceed to next step
    nextStep = () => {
        const { step } = this.state;
        this.setState({
            step: step + 1
        });
    };

    // Go back to prev step
    prevStep = () => {
        const { step } = this.state;
        this.setState({
            step: step - 1
        });
    };

    // Handle fields change
    handleChange = input => e => {
        this.setState({ [input]: e.target.value });
    };

    render() {
        const { step } = this.state;
        const {fechaNacimiento,telefonos,sexo,domicilio, Name,firstName, lastName, email} = this.state;
        const values = { fechaNacimiento,Name, firstName, lastName, email, telefonos, sexo, domicilio };

        switch (step) {
            case 1:
                return (
                    <FormUserDetails
                        nextStep={this.nextStep}
                        handleChange={this.handleChange}
                        values={values}
                    />
                );

            case 2:
                return (
                    <Confirm
                        nextStep={this.nextStep}
                        prevStep={this.prevStep}
                        values={values}
                    />
                );


            case 3:
                return <Success />;
        }
    }
}

export default UserForm;