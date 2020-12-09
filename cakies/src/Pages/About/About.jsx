import React from 'react';
import styles from './About.module.css'

const About = () => {
    return (
        <div className={styles.about} >
            <h1>About Us</h1>
            <div className={styles.head}>
                <h2>We Create Innovative Cakes.</h2>
                <p>The products we use on a daily basis say something about the people we are. We believe many things in life get better with time; it is that spirit we try to infuse in everything we create.</p>
            </div>
            <div className={styles.flex} >
                <div className={styles.leftDiv} >
                <h2>We focus on quality</h2>
                <p>It’s our belief that value is more than just saving a few bucks - true value lies at the intersection of something made well for a fair price, created in way that supports those who made it.</p>
                <p>Always bringing innovative products for our customers and ready to serve our customers in better way.</p>

                <h2>Our Most Valuable Assets Are The Relationships We’ve Built.</h2>
                <p>Our company, in many ways, is defined the community we belong to. We are Oregonians through and through. We believe in equality for all. We believe in putting others first.</p>
                </div>
                <div className={styles.rightDiv} >
                    <img src="https://images.unsplash.com/photo-1583338917451-face2751d8d5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80" width="100%" />
                </div>
            </div>
        </div>
    );
}

export {About}
