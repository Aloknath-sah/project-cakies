import React from 'react';
import styled from 'styled-components'
import styles from './Home.module.css'
import data from '../../products.json'

const Banner = styled.div`
    background-color: #ff8200;
    height: 500px;
    margin-top:100px;
    display:flex;
`

const Best = styled.div`
    &.explore > h1{
        text-align: center;
    }
`

const Card = styled.div`
    
    display:flex;
    flex-wrap: wrap;
    
    &.card > * {
        margin: 20px 20px 20px 50px;
    }
`

export default class Home extends React.Component {
    constructor(props){
        super(props)
        this.state={
            order:""
        }
    }

    handleChange=(e)=> {
        const {name, value} = e.target
        this.setState({
            [name]: value
        })
    }
    render(){
        const {order} = this.state
        return (
            <>
                <Banner>
                    <div className={styles.bannerpage}>
                        <div className={styles.text}>Super Delicious Cakes </div>
                        <p>which are prepared with utmost hygeine.</p>
                        <button>SHOP NOW</button>
                    </div>
                    <div style={{margin:"50px"}} >
                        <img src="https://images.unsplash.com/photo-1557163638-71e3ad2d3a52?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1500&q=800" alt="banner" width="600px" style={{borderRadius:"30px"}} />
                    </div>
                </Banner>
                <Best className="explore">
                    <h1  >Explore Best Sellers</h1>
                    <div>
                        <div className={styles.sort} >
                        <select name="order" value={order} onChange={this.handleChange}>
                                <option value="">sort</option>
                                <option value="asc">Price- low to high</option>
                                <option value="dsc">Price- High to low</option>
                            </select>
                        </div>
                        <Card className="card">
                        {
                                data.sort((a,b)=> order === "asc"? a.unit_price - b.unit_price: b.unit_price -a.unit_price)
                                .map((item)=> (
                                    <div style={{height:"500px"}}  key={item.id} >
                                        <img src={item.img} alt="cardImage" width="250px" height="250px" />
                                        <h3 className={styles.name}>{item.name} </h3>
                                        <h4 className={styles.unit_price}>{"Rs. "} {item.unit_price}</h4>
                                        <div className={styles.add}>Add to cart</div>
                                    </div>
                                ))
                        }
                        </Card>
                    </div>
                </Best>
            </>
        );
    }
    
}

export {Home}
