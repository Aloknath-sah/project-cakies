import React, { Component } from 'react';
import products from '../products.json';
import categories from '../categories.json'
import axios from 'axios'


export const DataContext = React.createContext()

export default class DataContextProvider extends Component {
    constructor(props){
        super(props)
        this.state={
            products: [...products],
            categories:[...categories],
            cart:[],
            selectedCategory:"",
            token:"",
            isAuth:false,
            isLoading:false,
            count:0
        }
        this.authenticateUser = this.authenticateUser.bind(this)
    }

    authenticateUser({email, password}){
        this.setState({
            isLoading: true
        })
        return axios
        .post("https://reqres.in/api/login",{
            email,
            password
        })
        .then((res)=>{
            this.setState({
                token: res.data.token,
                isLoading:false,
                isAuth: true
            })
            return true
        })
        .catch((err)=>{
            this.setState({
                error: true
            })
        })
    }

    setCategory = (val) =>{
        this.setState({
            selectedCategory: val
        });
    }

    // function which takes the product id as argument and update the cart state
    addToCart = (id) => {
        this.setState({
            count: this.state.count+1
        })
        const { products, cart } = this.state;
        const productToAdd = products.find((prod) => prod.id === id);

        const payload = {
            ...productToAdd,
            qty: 1
        };

        const searchCart = cart.findIndex((items) => items.id === id);

    // if item doesn't exist. add the item to the cart
        if (searchCart === -1) {
            this.setState({
                cart: [...cart, payload]
            });
        }

    // else just find the item in cart and increase it's quantity
    else {
            const newCart = cart?.map((item, idx) =>
                idx === searchCart ? { ...item, qty: item.qty + 1 } : item
            );
            this.setState({
                cart: [...newCart]
            });
        }
    }   

     // function which returns the total bill of cart from the state
    getTotal = () =>{
        const { cart } = this.state;
        console.log(cart)
        const total = cart.reduce(
        (a, c) => a + Number(c.qty) * Number(c.unit_price),
            0
        );
        return total;
    }

     // function which returns the categories array from the state
    getAllCategories = () => {
        const { categories } = this.state;
        return categories;
    }

    // function which returns the products array from the state
    getAllProducts = () =>{
        const { products } = this.state;
        return products;
    }

    getProductDetails=(id)=>{
        const {products} = this.state;
        return products.filter((item)=> item.id === Number(id))
    }

    // function which returns the cart array from the state
    getCart = () =>{
        const { cart } = this.state;
        return cart;
    }

    // function which returns the selected category from the state
    getSelectedCategory = () => {
        const { selectedCategory } = this.state;
        return selectedCategory;
    }

    render() {
        const {isLoading, 
            token,
            isAuth, count} = this.state
        const {
            authenticateUser,
            setCategory,
            addToCart,
            getTotal,
            getAllCategories,
            getAllProducts,
            getCart,
            getSelectedCategory,
            getProductDetails
        } = this;

        const value = {
            authenticateUser,
            isLoading, 
            token,
            isAuth,
            count,
            setCategory,
            addToCart,
            getTotal,
            getAllCategories,
            getAllProducts,
            getCart,
            getSelectedCategory,
            getProductDetails
        };
        return (
        <div>
            <DataContext.Provider value={value} >
                {this.props.children}
            </DataContext.Provider>
        </div>
        );
    }
}
