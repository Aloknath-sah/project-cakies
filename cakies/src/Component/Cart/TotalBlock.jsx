import React from "react";
import { DataContext } from "../../context/DataContextProvider";
import styled from "styled-components";

const Wrapper = styled.div`
    display: grid;
    grid-template-columns: 4fr 1fr;
    div:nth-child(1) {
        display: flex;
        align-items: center;
        justify-content: flex-end;
        font-size: 28px;
        font-weight: bold;
    }
    div:nth-child(2) {
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 28px;
        font-weight: bold;
    }
`;

/*
    1. TotalBlock Component is basically the last component of the cart item

    2. getTotal function is being consumed here from DataContextProvider. Which allows us to get the total of all the products.
*/

const TotalBlock = () => {
    return (
        <DataContext.Consumer>
        {({ getTotal }) => {
            return (
            <Wrapper>
                <div>Total</div>
                <div>{getTotal()}</div>
            </Wrapper>
            );
        }}
        </DataContext.Consumer>
    );
};

export { TotalBlock };
