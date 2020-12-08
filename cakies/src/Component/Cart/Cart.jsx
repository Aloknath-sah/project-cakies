
import React, { Component } from "react";
import styled from "styled-components";
import { DataContext } from "../../context/DataContextProvider";
import { CartItem } from "./CartItem";
import { TotalBlock } from "./TotalBlock";

const Container = styled.div`
    padding: 25px;
    margin-top:100px;
`;

const CartBlock = styled.div`
    border: 1px solid #333333;
    margin: 25px;
    padding-top: 25px;
    padding-bottom: 25px;
`;

const HeadingMain = styled.h2`
    text-align: center;
`;

const HeadingSub = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    margin-left: 10px;
    font-weight: 600;
    div:nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    div:nth-child(3) {
        display: flex;
        align-items: center;
        justify-content: center;
}
`;

/*  1.  Using Context API we get the "getCart" function from the DataContextProvider. getCart function basically returns cart array values of the state in 
    DataContextProvider

    2.  We basically render/list all the products of cart (with their quantity) here. 
*/

export class Cart extends Component {
    render() {
        const { getCart } = this.context;
        const cart = getCart();
        return (
        <Container>
            <CartBlock>
            <HeadingMain>Cart ( Total )</HeadingMain>
            <HeadingSub>
                <div>Name Of Product</div>
                <div>Quantity</div>
                <div>Unit Price</div>
            </HeadingSub>
            <hr />
            {cart?.map((item) => (
                <CartItem key={item.id} {...item} />
            ))}
            <TotalBlock />
            </CartBlock>
        </Container>
        );
    }
}

Cart.contextType = DataContext;

