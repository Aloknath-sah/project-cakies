import React, { PureComponent } from "react";
import { DataContext } from "../../context/DataContextProvider";
import styled from "styled-components";

const CategoriesItemWrapper = styled.button`
    border: 1px solid #333333;
    padding: 15px;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #333333;
    color: whitesmoke;
    cursor: pointer;
    &:hover {
        background: whitesmoke;
        color: #333333;
    }
`;

// when a user clicks the button ; function setCategory of DataContextProvider will get invoked with id as argument;
// that allows you to set the state "selectedCategory" of DataContextProvider with the current category component's id.

export class CategoriesItem extends PureComponent {
    render() {
        const { id, category } = this.props;
        const { setCategory } = this.context;
        return (
        <CategoriesItemWrapper onClick={() => setCategory(id)}>
            {category}
        </CategoriesItemWrapper>
        );
    }
}

CategoriesItem.contextType = DataContext;
