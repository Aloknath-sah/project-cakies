import React, { Component } from "react";
import { DataContext } from "../../context/DataContextProvider";
import { ProductItem } from "./ProductItem";
import styled from "styled-components";

const Container = styled.div`
    padding: 25px;
`;
const ProductsWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 25px;
`;

/*  1.  Using Context API we get the "getAllProducts" and "selectedCategory" functions from the DataContextProvider. and these functions basically returns products
    and selectedCategory values of the state in DataContextProvider

    2.  We basically render/list all the products of selected category here
*/

export class Product extends Component {
    render() {
        const { getAllProducts, getSelectedCategory } = this.context;
        const products = getAllProducts();
        console.log(products)
        const selectedCategory = Number(getSelectedCategory());
        return (
        <Container>
            <ProductsWrapper>
            {products
                .filter((prod) => prod.category_id === selectedCategory)
                .map((prod) => (
                <ProductItem key={prod.id} {...prod} />
                ))}
            </ProductsWrapper>
        </Container>
        );
    }
}

Product.contextType = DataContext;
