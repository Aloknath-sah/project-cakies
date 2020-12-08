import React, { Component } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 3fr 1fr 1fr;
    margin-left: 10px;
    
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

/*
    1. CartItem Component renders an individual cart item. 

    2. shouldComponentUpdate here does a performance optimization by making sure that the cart item only gets rerendered if the qty changes. (You can use profiler to check)
*/

export class CartItem extends Component {
    shouldComponentUpdate(nextProps, nextState) {
        if (nextProps.qty !== this.props.qty) {
        return true;
        }
        return false;
    }

    render() {
        const { name, qty, unit_price } = this.props;
        return (
        <>
            <Wrapper>
            <div>{name}</div>
            <div>{qty}</div>
            <div>{unit_price}</div>
            </Wrapper>
            <hr />
        </>
        );
    }
}
