import React, { useState, useEffect } from 'react'
import Base from '../core/Base'
import { isAuthenticated } from '../auth/helper'
import { Link} from 'react-router-dom'
import { createProduct, getAllCategory} from './helper/adminapicall'


const AddProduct = ({history})=>{
    
    const [values,setValues]=useState({
        name:"",
        description:"",
        price:"",
        stock:"",
        photo:"",
        categories:[],
        category:"",
        loading:false,
        error:"",
        createdProduct:"",
        getaRedirect:"",
        formData:""
    })
    
    const {
      name,
      description,
      price,
      stock,
      photo,
      categories,
      category,
      loading,
      error,
      createdProduct,
      getaRedirect,
      formData,
    } = values
    const {user,token} = isAuthenticated()

    const handleChange = (name) => event =>{
      const value = name==="photo"?event.target.files[0]:event.target.value
      formData.set(name,value)
        setValues({...values,error:false,
            [name]:value
        })
    }
    const preload = ()=>{
      getAllCategory().then(data=>{
        if(data.error){
          setValues({...values,error:data.error})
        }else{
          setValues({...values,categories:data,formData:new FormData()})
          console.log(categories)
        }
      })
    }

    useEffect(()=>{
      preload()
    },[])

    const onSubmit=(event)=>{
        event.preventDefault();
        setValues({...values,error:"",loading:true});
        createProduct(user._id,token,formData)
            .then(data=>{
                if(data.error){
                    setValues({...values,error:data.error})
                }else{
                    setValues({
                        ...values,
                        name:"",
                        description:"",
                        price:"",
                        stock:"",
                        photo:"",
                        category:"",
                        loading:false,
                        error:false,
                        createdProduct:data.name,
                        getaRedirect:true
                    })
                    //METHOD : 1
                    // setTimeout((getaRedirect)=>{
                    //  setValues({...values,getaRedirect:true})
                    // },3000)
                }
            })
            .catch(err=>console.log(err))
    }

  ///METHOD : 1
  //   const performRedirect =()=>{
  //     if(getaRedirect){
  //       return <Redirect to="/admin/dashboard"/>
  //     }
  // }

  ///METHOD: 2

  const performRedirect =()=>{
    if(getaRedirect){
      setTimeout(()=>{
        history.push('/admin/dashboard')
      },3000)
    }
  }

    const successMessage = ()=>(
        createdProduct&&(
        <div className="alert alert-success mt-3">
          <h4 className="text-center">
              {createdProduct}  created succesfully
          </h4>
        </div>
        )
    )

    const loadingMessage = ()=>(
      loading&&(
      <div className="alert  mt-3">
        <h4 className="text-center text-white">
            loading....
        </h4>
      </div>
      )
  )

    const errorMessage = ()=>(
        error&&(
          <div className="alert alert-warning mt-3">
            <h4 className="text-center">
                {error}
            </h4>
          </div>
        )
    )

    const addProductForm = () => (
        <form >
          <span>Post photo</span>
          <div className="form-group">
            <label className="btn btn-block btn-success">
              <input
                onChange={handleChange("photo")}
                type="file"
                name="photo"
                accept="image"
                placeholder="choose a file"
              />
            </label>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("name")}
              type="text"
              name="name"
              className="form-control"
              placeholder="Name"
              value={name}
            />
          </div>
          <div className="form-group">
            <textarea
              onChange={handleChange("description")}
              type="text"
              name="description"
              className="form-control"
              placeholder="Description"
              value={description}
            />
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("price")}
              type="number"
              name="price"
              className="form-control"
              placeholder="Price"
              value={price}
            />
          </div>
          <div className="form-group">
            <select
              onChange={handleChange("category")}
              className="form-control"
              placeholder="Category"
            >
              <option>Select</option>
              {categories&&categories.map((cat,index)=>(
                <option key={index} value={cat._id}>{cat.name}</option>
              ))}
            </select>
          </div>
          <div className="form-group">
            <input
              onChange={handleChange("stock")}
              type="number"
              className="form-control"
              placeholder="Quantity"
              value={stock}
            />
          </div>
          
          <button type="submit" onClick={onSubmit} className="btn btn-outline-success mb-3">
            Create Product
          </button>
        </form>
      );


    return (
        <Base title="Create A product here" description="Add new product  here" className='container bg-info p-4'>
            <Link to="/admin/dashboard" className="btn btn-md btn-dark mb-3">Admin Home</Link>
            <div className="row bg-dark text-white rounded" >
                <div className="col-md-8 offset-md-2">
                    {loadingMessage()}
                    {errorMessage()}
                    {successMessage()}
                    {addProductForm()}
                    {performRedirect()}
                </div>
            </div>
        </Base>
    )
}

export default AddProduct;