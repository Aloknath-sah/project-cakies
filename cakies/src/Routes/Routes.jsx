import React, { Component } from 'react';
import {Navbar} from '../Component/Navbar'
import {Route, Switch} from 'react-router-dom'
import {Home} from '../Pages/Home'
import {About} from '../Pages/About'
import {FAQ} from '../Pages/FAQ'
import {Contact} from '../Pages/Contact'
import {Products} from '../Pages/Products'
import {Footer} from '../Component/Footer'
import {Cart} from '../Component/Cart/Cart'
import { ProductDetails } from '../Component/Product/ProductDetails';
import { Login } from '../Pages/Login'
import { PrivateRoute } from '../Component/PrivateRoute/PrivateRoute'
import { ProductItem } from '../Component/Product/ProductItem';

class Routes extends Component {
    render() {
        return (
        <div>
            <Route path="/" render={()=> <Navbar/>} />
            <Switch>
                <Route path="/" exact render={()=> <Home/>}/>
                <Route path="/products" exact render={()=> <Products/>}/>
                <PrivateRoute path="/products/:product_id" exact Component={ProductDetails} />
                <Route path="/login" exact render={()=> <Login/>} />
                <Route path="/about-us" render={()=> <About/>}/>
                <Route path="/faq" render={()=> <FAQ/>}/>
                <Route path="/contact-us" render={()=> <Contact/>}/>
                <PrivateRoute path="/cart" exact Component={Cart} />
            </Switch>
            <hr/>
            <Route path="/" render={()=> <Footer/>} />
        </div>
        );
    }
}

export {Routes}