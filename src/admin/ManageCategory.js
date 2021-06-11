import React, { useState, useEffect } from 'react'
import Base from '../core/Base'
import { Link } from 'react-router-dom'
import { getAllCategory , deleteCategory} from './helper/adminapicall'
import { isAuthenticated } from '../auth/helper'


const ManageCategory = ()=>{
  const [categories , setCategories] = useState([])
  const {user,token} = isAuthenticated()
  const preload=()=>{
    getAllCategory().then(data=>{
        if(data.error){
            console.log(data.error)
        }else{
            setCategories(data)
        }
    })
   } 
   useEffect(()=>{
    preload()
   },[])

   const removeCategory = (categoryId)=>{
    deleteCategory(categoryId,user._id,token).then(data=>{
        if(data.error){
            console.log(data.error)
        }else{
            preload()
        }
    })
}

    return (


        <Base title="Welcome admin" description="Manage products here">
      <h2 className="mb-4">All products:</h2>
      <Link className="btn btn-info" to={`/admin/dashboard`}>
        <span className="">Admin Home</span>
      </Link>
      <div className="row">
        <div className="col-12">
          <h2 className="text-center text-white my-3">Total 3 products</h2>
          {
              categories.map(
                  (cat,index)=>{
                      return(
                    <div key={index} className="row text-center mb-2 ">
                        <div className="col-4">
                            <h3 className="text-white text-left">{cat.name}</h3>
                        </div>
                        <div className="col-4">
                          <Link
                            className="btn btn-success"
                            to={`/admin/category/update/${cat._id}`}
                          >
                            <span className="">Update</span>
                          </Link>
                        </div>
                        <div className="col-4">
                          <button onClick={() => {removeCategory(cat._id)}} className="btn btn-danger">
                            Delete
                          </button>
                        </div>
                    </div>
                      )
                  }
              )
          }
        </div>
      </div>
    </Base>
    )
}

export default ManageCategory