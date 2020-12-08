import React from 'react';
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'
import TwitterIcon from '@material-ui/icons/Twitter';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';

const FooterWrapper = styled.header`
    padding-top: 15px;
    padding-bottom: 15px;
    padding-left: 60px;
    display: flex;
    flex-direction: column;
    a {
        text-decoration: none;
        
    }
    h4{
        padding-left: 15px;
    }
`

const MainFooter = styled.div`
    display: flex;
    padding: 20px;
`

const links=[
    {
        to:"/",
        title:"Home"
    },
    {
        to:"/products",
        title:"Products"
    },
    {
        to:"/about-us",
        title:"About"
    },
    {
        to:"/faq",
        title:"FAQ"
    },
    {
        to:"/contact-us",
        title:"Contact"
    },
    {
        to:"/job-opportunities",
        title:"Job Opportunities"
    }
]

const social = [
    {
        to:"/twitter",
        title:"Twitter",
        icon:<TwitterIcon/>
    },
    {
        to:"/linkedin",
        title:"linkedin",
        icon: <LinkedInIcon/>
    },
    {
        to:"/facebook",
        title:"Facebook",
        icon: <FacebookIcon/>
    },
    {
        to:"/instagram",
        title:"Instagram",
        icon:<InstagramIcon/>
        
    }
]

const Footer = () => {
    return (
        <MainFooter>
            <FooterWrapper>
            <h4>Shop</h4>
            {
                links.map((link)=>
                (
                    <NavLink 
                    key={link.to} 
                    to={link.to}
                    style={{padding: 10, color:"grey"}} >
                        {link.title}
                    </NavLink>
                ))
            }
            </FooterWrapper>
            <FooterWrapper>
            <h4>Support</h4>
            {
                social.map((item)=>
                (
                    <NavLink 
                    key={item.to} 
                    to={item.to}
                    style={{padding: 10, color:"grey"}} >
                        {item.icon} {item.title}
                    </NavLink>
                ))
            }
            </FooterWrapper>
        </MainFooter>
        
    );
}

export {Footer}
