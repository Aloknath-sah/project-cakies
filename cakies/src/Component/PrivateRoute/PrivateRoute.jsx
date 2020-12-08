import React from 'react';
import {DataContext} from '../../context/DataContextProvider'
import {Route, Redirect} from 'react-router-dom'

const PrivateRoute = ({Component, ...rest}) => {
    
    return (
        <DataContext.Consumer>
            {({isAuth})=>{
                return isAuth? (
                    <Route {...rest} render={(props)=> <Component {...props} /> } />
                ):
                (
                    <Redirect to="/login" />
                )
            }}
        </DataContext.Consumer>
    );
}

export {PrivateRoute}
