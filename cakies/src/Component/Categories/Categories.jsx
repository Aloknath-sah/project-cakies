import React, { Component } from "react";
import { DataContext } from "../../context/DataContextProvider";
import { CategoriesItem } from "./CategoriesItem";
import styled from "styled-components";

const Container = styled.div`
    padding: 25px;
`;

const CategoriesWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    gap: 15px;
`;

export class Categories extends Component {
    render() {
        const { getAllCategories } = this.context;
        const categories = getAllCategories();
        
        return (
        <Container>
            <CategoriesWrapper>
            {categories?.map((cat) => (
                <CategoriesItem key={cat.id} {...cat} />
            ))}
            </CategoriesWrapper>
        </Container>
        );
    }
}

Categories.contextType = DataContext;
