import React ,{useState,useEffect} from 'react'
import Base from './Base'
import '../styles.css'
import Card from './Card'
import { getProducts } from './helper/coreapicalls'


export default function (){
    const [products,setProducts] = useState([])
    const [error,setError] = useState(false)

    const loadProducts = () =>{
        getProducts().then(data=>{
            if(data.error){
                setError(data.error)
            }else{
                setProducts(data)
            }
        })
    }
    useEffect(()=>{
        loadProducts()
    },[])
    return(
        <Base title="Home Page" description="Welcome to the Tshirt Store">
            <div className="row text-center">
                <h1 className="text-white">All Of T-Shirt</h1>
                <div className="row">
                    {
                        products.map((product,index)=>{
                            return(
                                <div key={index} className="col-4 mb-4">
                                    <Card product={product} />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </Base>
    )
}