import React from 'react';
import {NavLink, Link} from 'react-router-dom'
import styled from 'styled-components'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import { DataContext } from '../../context/DataContextProvider';

const Navbarcenter = styled.div`
    
    padding: 30px;
    a {
        text-decoration: none;
        color: grey;
    }
`

const NavbarWrapper = styled.div`
    overflow:hidden;
    position: fixed;
    background-color: white;
    width:100%;
    top:0;
    height: 100px;
    display:flex;
    &.wrapper > *{
        flex:1;
    }
`

const NavbarLeft = styled.div`
    padding-left: 20px;
    a {
        text-decoration: none;
        color: #007367;
    }
`

const NavbarRight = styled.div`
    text-align: right;
    padding: 30px;
    &.navright > * {
        text-decoration: none
    }
`

const links=[
    
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
        to:"/login",
        title:"Login"
    }
]

class Navbar extends React.Component {
    
    render(){
        const {count} = this.context
        return (
            <NavbarWrapper className="wrapper">
            <NavbarLeft>
                <Link to="/">
                    <h1>Cakies</h1>
                </Link>
            </NavbarLeft>
            <Navbarcenter>
            {
                links.map((link)=>
                (
                    <NavLink 
                    key={link.to} 
                    to={link.to}
                    style={{padding: 20}} >
                        {link.title}
                    </NavLink>
                ))
            }
            </Navbarcenter>
            <NavbarRight className="navright" >
                <Link to="/cart" >
                
                <ShoppingCartIcon/>
                {count}
                </Link>
            </NavbarRight>
            </NavbarWrapper>
        );
    }
    
}

Navbar.contextType = DataContext
export {Navbar}
