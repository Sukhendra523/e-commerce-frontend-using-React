import React,{useState} from 'react'
import Base from '../core/Base'
import { isAuthenticated } from '../auth/helper'
import { Link } from 'react-router-dom'
import { createCategory } from './helper/adminapicall'



const AddCategory = ()=>{
    const [name,setName]=useState("")
    const [error,setError]=useState(false)
    const [success,setSuccess]=useState(false)
    const {user,token} = isAuthenticated()

    const handleChange =(event)=>{
        setError("")
        setName(event.target.value)
    }

    const onSubmit=(event)=>{
        event.preventDefault()
        setError("")
        setSuccess(false)
        createCategory(user._id,token,{name})
        .then(data=>{
            if(data.error){
                setError(data.error)
            }else{
                setSuccess(true)
                setName("")
            }
        })
        .catch(err=>console.log(err))
    }

    const successMessage =()=>(
        <h4 className="text-success text-center" style={{display:success?"":"none"}}>
            Category created successfully
        </h4>
    )
    
    const errorMessage =()=>(
        <h4 className="text-success text-center" style={{display:error?"":"none"}}>
            {error}
        </h4>
    )
    const AddCategoryForm = ()=>(
        <form>
            <div className="form-group">
                <p className="lead">Add new category</p>
                <input 
                type="text" 
                className="from-control my-3"
                onChange={handleChange}
                value={name}
                autoFocus
                required
                placeholder="For Ex. Summer"
                />
            </div>
            <button onClick={onSubmit} className="btn btn-outline-info">Add category</button>
        </form>
    )
    const goBack = ()=>(
            <div className="mt-5">
                <Link to="/admin/dashboard" className="btn btn-sm btn-success mb-3">Admin Home</Link>
            </div>
        )

    return (
        <Base title="Create A category here" description="Add new category for t-Shiret here" className='container bg-info p-4'>
            <div className="row bg-white rounded p-2" >
                <div className="col-md-8 offset-md-2">
                    {goBack()}
                    {successMessage()}
                    {errorMessage()}
                    {AddCategoryForm()}
                </div>
            </div>
        </Base>
    )
}

export default AddCategory