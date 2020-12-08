import React, { Component } from 'react';
import {Categories} from '../../Component/Categories/Categories'
import {Product} from '../../Component/Product/Product'
import styled from "styled-components";

const Main = styled.div`
  display: grid;
  grid-template-columns: 1fr 5fr 3fr;
`;

class Products extends Component {
    render() {
        return (
        <div style={{marginTop:"100px"}} >
            <Main>
                <Categories/>

                <Product/>

            </Main>
        </div>
        );
    }
}

export {Products}
