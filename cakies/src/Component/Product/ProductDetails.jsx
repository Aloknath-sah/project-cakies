import React, { Component } from 'react';
import {DataContext} from '../../context/DataContextProvider'
import styles from './ProductDetails.module.css'

export class ProductDetails extends Component {
    constructor(props){
        super(props)
        this.state={
            product: []
        }
    }

    componentDidMount(){
        this.setState((prev) => {
            return {
                loading: false
            }
        })
        const {getProductDetails} = this.context
        const {product_id} = this.props.match.params
        console.log(this.props)
        this.setState({
            product: getProductDetails(product_id),
            loading: false
        })
    }
    render() {
        const {product, data} = this.state
        const { addToCart } = this.context;
        console.log(product, data)
        if(!product){
            return <div>No Product Found </div>
        }
        return (
        <div>
            
            {
                product.map((item)=> (
                    <div key={item.id} style={{marginTop:"100px", display:"flex"}} >
                        <div>
                            <img src={item.img} width="400px" alt="product-description" />
                        </div>
                        <div style={{paddingLeft:20, marginLeft:"60px"}} >
                            <h1 style={{color:"green"}} >{item.name} </h1>
                            <h2>Rs. {item.unit_price} </h2>
                            <p style={{marginTop:"-15px"}} >inclusive of all taxes</p>
                            <h4>{item.contain_egg} </h4>
                            <h4> Cake flavour: {item.cake_flav} </h4>
                            <div>
                                <button className={styles.prodBtn} onClick={() => addToCart(item.id)}>ADD TO CART</button> 
                            </div>
                            
                        </div>
                    </div>
                ))
            }
        </div>
        );
    }
}

ProductDetails.contextType = DataContext
