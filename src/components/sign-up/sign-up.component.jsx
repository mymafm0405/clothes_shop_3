import React from 'react'
import FormInput from '../form-input/form-input.component'
import CustomButton from '../custom-button/custom-button.component'
import {auth, createUserProfile} from '../../firebase/firebase.utiles'
import './sign-up.styles.scss'

class SingUp extends React.Component {
    constructor() {
        super()

        this.state = {
            displayName: '',
            email: '',
            password: '',
            confirmPassword: ''
        }
    }

    handleSubmit = async event => {
        console.log(event)
        event.preventDefault()
        const {displayName, email, password, confirmPassword} = this.state;

        if (password !== confirmPassword) {
            alert('Passwords do not match!')
            return
        }

        const {user} = await auth.signInWithEmailAndPassword(email, password)
        // console.log(user)
        // try {
        //     await createUserProfile(user, {displayName})
        //     this.setState({
        //         displayName: '',
        //         email: '',
        //         password: '',
        //         confirmPassword: ''
        //     }, () => {
        //         console.log('User has been created!')
        //     })
        // } catch(error) {
        //     console.log(error)
        // }
    }

    handleChange = event => {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }

    render() {
        const {displayName, email, password, confirmPassword} = this.state
        return(
            <div>
                <h2 className="title">I don't have an account</h2>
                <span>Create an account with your email & password</span>
                <form className="sign-up" onSubmit={this.handleSubmit}>
                    <FormInput
                    name="displayName"
                    type="text"
                    label="Display name"
                    value={displayName}
                    onChange={this.handleChange}
                    required
                    />
                    <FormInput
                    name="email"
                    type="email"
                    label="Email"
                    value={email}
                    handleChange={this.handleChange}
                    required
                    />
                    <FormInput
                    name="password"
                    type="password"
                    label="Password"
                    value={password}
                    onChange={this.handleChange}
                    required
                    />
                    <FormInput
                    name="confirmPassword"
                    type="password"
                    label="Confirm password"
                    value={confirmPassword}
                    onChange={this.handleChange}
                    required
                    />
                    <CustomButton type="submit">Sign Up</CustomButton>
                </form>
            </div>
        )
    }
}

export default SingUp