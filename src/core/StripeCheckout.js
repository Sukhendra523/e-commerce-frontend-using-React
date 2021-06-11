import React,{useState,useEffect} from 'react'
import { isAuthenticated } from '../auth/helper'
import { cartEmpty, loadCart } from './helper/cartHelper'
import { Link } from 'react-router-dom'
import StripeCheckoutButton from 'react-stripe-checkout'
import { API } from '../backend'
import { createOrder } from './helper/orderHelper'


const StripeCheckout = ({
    products,
    setReload=f=>f,
    reload=undefined
}) =>{
    const [data,setData] = useState({
        loading:false,
        success:false,
        error:"",
        address:""
    });

    const token = isAuthenticated() && isAuthenticated().token
    const userId = isAuthenticated() && isAuthenticated().user._id

    const getFinalPrice =()=>{
        return products.reduce((total,product)=>{
            return total+product.price
        },0)

    
    }
    const makePayment=(token)=>{
        const body ={
            token,
            products
        }
        const headers ={
            "Content-Type":"application/json"
        }
        return fetch(`${API}/stripepayment`,{
            method:"POST",
            headers,
            body:JSON.stringify(body)
        }).then(response=>{
            console.log("PAYMENT SUCCESS");
          //TODO: empty the cart
          cartEmpty(()=>{
            console.log("crash? ")
          })
          //TODO: force reload
          setReload(!reload)
        }).catch(err=>console.log())
    }

    const showStripeButton=()=>{
        return isAuthenticated() ? (

            <StripeCheckoutButton
                stripeKey="pk_test_51GvEvkEhUWYvq8D2aX8kADVCloNQJKdu5wK76xHkgVOLhzhq5gDNDRW7xec1ftgERn9gjl89hCaRHmbv5Pu1qfLv00qbS9uDLu"
                token={makePayment}
                amount={getFinalPrice()*100}
                name="Buy Now"
                shippingAddress
                billingAddress
            >
                <button className="btn btn-success">Pay With Stripe</button>
            </StripeCheckoutButton>
        ):(
            <Link to="/signin">
                <button className="btn btn-warning">Signin</button>
            </Link>
        )
    }
    return(
        <div>
            <h3 className="text-white">StripeCheckut {getFinalPrice()}</h3>
            {showStripeButton()}
        </div>
    )
}

export default StripeCheckout