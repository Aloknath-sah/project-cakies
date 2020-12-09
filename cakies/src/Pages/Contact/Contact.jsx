import React, { Component } from 'react';
import styles from './Contact.module.css'

class Contact extends Component {
    constructor(props){
        super(props)
        this.state={

        }
    }

    handleSubmit=()=> {

    }
    render() {
        return (
        <div style={{marginTop:"100px"}} >
            <h1 style={{textAlign:"center"}} >Contact Page</h1>
            <form className={styles.form} onSubmit={this.handleSubmit.bind(this)} method="POST">
                <div className={styles.form_group}>
                    
                    <input type="text" placeholder="Name" />
                </div>
                <div className={styles.form_group}>
                    
                    <input type="email" placeholder="Email" />
                </div>
                <div className={styles.form_group}>
                    
                    <textarea placeholder="Enter your query" className={styles.form_group} rows="5"></textarea>
                </div>
                <div className={styles.form_group}>
                    <button type="submit">Submit</button>
                </div>
                
            </form>
        </div>
        );
    }
}

export {Contact}
