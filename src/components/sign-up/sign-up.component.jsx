import React from 'react';

import './sign-up.styles.scss';

import FormInput from '../form-input/form-input.component';
import customButton from '../custom-button/custom-button.component';

import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import CustomButton from '../custom-button/custom-button.component';


class SignUp extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async (e) => {
        e.preventDefault();

        // get the input values the user just submitted (from our state object)
        const { displayName, email, password, confirmPassword } = this.state;

        // check that password + confirm password match
        if (password !== confirmPassword) {
            alert("passwords don't match");
            return;
        }
        
        try {
            // create a user with email/password (firebase method -- async operation)
            const { user } = await auth.createUserWithEmailAndPassword(email, password);

            // call our own function which does (honestly i have no f*$%&$# clue)
            await createUserProfileDocument(user, { displayName });
            
            // set form inputs back to empty
            this.setState({
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
            });

        } catch (err) {
            console.error(err);
        }
    }


    handleChange = (e) => {
        const { name, value } = e.target;

        this.setState({[name]: value});
    }

    render() {
        const { displayName, email, password, confirmPassword } = this.state;
        return(
            <div className='sign-up'>
                <h2 className='title' >
                    I do not have an account
                </h2>
                <span>Sign up with your email and password</span>
                <form className="sign-up-form" onSubmit={this.handleSubmit}>
                    <FormInput
                    type='text'
                    name='displayName'
                    value={ displayName }
                    onChange = { this.handleChange }
                    label = 'Display Name'
                    required
                    />

                    <FormInput
                    type='email'
                    name='email'
                    value={ email }
                    onChange = { this.handleChange }
                    label = 'Email'
                    required
                    />

                    <FormInput
                    type='password'
                    name='password'  
                    value={ password }
                    onChange = { this.handleChange }
                    label = 'Password'
                    required
                    />

                    <FormInput
                    type='password'
                    name='confirmPassword'  
                    value={ confirmPassword }
                    onChange = { this.handleChange }
                    label = 'Confirm Password'
                    required
                    />

                    <CustomButton type='submit' >
                        SIGN UP
                    </CustomButton>   
                </form>
            </div>
        )
    }
}


export default SignUp;


