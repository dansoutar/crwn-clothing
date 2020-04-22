import React from 'react';

import FormInput from '../form-input/form-input.component';

import CustomButton from '../custom-button/custom-button.component';

import { auth } from '../../firebase/firebase.utils';
import { signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';


class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    handleSubmit = async (e) => {

        e.preventDefault();

        const { email, password } = this.state;

        try {
            await auth.signInWithEmailAndPassword(email, password);

            this.setState({
                email: '',
                password: ''
            });
        } catch (err) {
            console.log(err);
        }

    };

    handleChange = (e) => {
        const { value, name } = e.target;

        this.setState( { [name]: value } );
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>

                <form action="" onSubmit={this.handleSubmit} >
                    <FormInput 
                    type="email" 
                    name='email' 
                    value={this.state.email}
                    handleChange={this.handleChange}
                    label='email'
                    required />

                    <FormInput 
                    type="password" 
                    name='password' 
                    value={this.state.password} 
                    handleChange={this.handleChange}
                    label='password'
                    required />

                    <div className="buttons">
                        <CustomButton type='button' >
                            Sign In
                        </CustomButton>
                        <CustomButton type='button' onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in With Google
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}


export default SignIn;