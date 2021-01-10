import React, { Component } from 'react';
import { DataContext } from '../../context/DataContextProvider'
import { Redirect } from 'react-router-dom'
import styles from './Login.module.css'

export class Login extends Component {
    constructor(props){
        super(props)
        this.state={
            email:"",
            password:""
        }
    }

    handleChange=(e)=>{
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const {email, password} = this.state
        const {authenticateUser} = this.context
        authenticateUser({email, password})

    }

    render() {
        const {email, password} = this.state
        const {isAuth, isLoading} = this.context
        return isLoading ? (
                <div>...loading</div>
            ): !isAuth? (
                <div className={styles.main}>
                <h1>Please Login</h1>
                <form onSubmit={this.handleSubmit} className={styles.form}   >
                <input
                value={email} 
                name="email" 
                type="email" 
                placeholder="please write email as: eve.holt@reqres.in"
                onChange={this.handleChange} />
                
                <br/>

                <input
                value={password} 
                name="password" 
                type="text" 
                placeholder="password as: cityslicka"
                onChange={this.handleChange} />
                <br/>

                <input type="submit" value="SUBMIT" className={styles.submit} />
            </form>
            </div>
            ): (
                <Redirect to="/"/>
            )
            
        
    }
}

Login.contextType = DataContext
