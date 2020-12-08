import React, { PureComponent } from "react";
import styled from "styled-components";
import { DataContext } from "../../context/DataContextProvider";
import {Link} from 'react-router-dom'
import {ProductDetails} from './ProductDetails'

const Card = styled.div`
    border: 1px solid grey;
    display: grid;
    padding: 15px;

    button {
        border: 0px;
        background: #333333;
        color: whitesmoke;
        padding: 10px;
        cursor: pointer;
    }
    * {
        margin-top: 5px;
        margin-bottom: 5px;
    }
`;
/* 1. An individual Product Item. The function "addToCart" which we consumed from the global context provider's state and are invoking on click of button 
    allows us to add an item to the cart if the item doesn't exist. If it does, we just increase it's quantity
*/

export class ProductItem extends PureComponent {
    constructor(props){
        super(props)
        this.state={
            
        }
    }

    render() {
        const { id, name,img, category, unit_price } = this.props;

        return (
        <Card>
            
            <div><img src={img} alt="product" width="300px" /> </div>
            <div>Name : {name}</div>
            <div>Category : {category}</div>
            <div>Price : {unit_price}</div>
            <button key={id} >
            <Link style={{color:"white", textDecoration:"none", fontSize:"20px"}} to={`/products/${id}`} > View </Link>
            </button>
            
        </Card>
        );
    }
}

ProductItem.contextType = DataContext;

