import { API } from "../../backend";

///category calls
export const createCategory =(userId,token,category)=>{
    return fetch(`${API}/category/create/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization:`bearer ${token}`
        },
        body:JSON.stringify(category)
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))
}
export const getCategory =(categoryId)=>{
    return fetch(`${API}/category/${categoryId}`,{
        method:"GET",
    })
    .then(response=>{
        return response.json()
     })
     .catch(err=>console.log(err))
}

export const getAllCategory =()=>{
    return fetch(`${API}/category`,{
        method:"GET",
    }).then(response=>{
       return response.json()
    }).catch(err=>console.log(err))
}

export const updateCategory =(categoryId,userId,token,updatedCategory)=>{
    return fetch(`${API}/category/${categoryId}/${userId}`,{
        method:"PUT",
        headers:{
            Accept:"application/json",
            "Content-Type":"application/json",
            Authorization:`bearer ${token}`
        },
        body:JSON.stringify(updatedCategory)
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))
}


//delete category
export const deleteCategory=(categoryId,userId,token)=>{
    return fetch(`${API}/category/${categoryId}/${userId}`,{
        method:"DELETE",
        headers:{
            Accept:"application/json",
            Authorization:`bearer ${token}`
        }
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))

}


///product calls

//create product
export const createProduct=(userId,token,product)=>{
    return fetch(`${API}/product/create/${userId}`,{
        method:"POST",
        headers:{
            Accept:"application/json",
            Authorization:`bearer ${token}`
        },
        body:product
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))

}

//get a product
export const getAllProduct =()=>{
    return fetch(`${API}/products`,{
        method:"GET",
    }).then(response=>{
       return response.json()
    }).catch(err=>console.log(err))
}


//get A product
export const getProduct =productId=>{
    return fetch(`${API}/product/${productId}`,{
        method:"GET",
    })
    .then(response=>{
        return response.json()
     })
     .catch(err=>console.log(err))
}


//update product
export const updateProduct=(productId,userId,token,product)=>{
    return fetch(`${API}/product/${productId}/${userId}`,{
        method:"PUT",
        headers:{
            Accept:"application/json",
            Authorization:`bearer ${token}`
        },
        body:product
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))

}


//delete product
export const deleteProduct=(productId,userId,token)=>{
    return fetch(`${API}/product/${productId}/${userId}`,{
        method:"DELETE",
        headers:{
            Accept:"application/json",
            Authorization:`bearer ${token}`
        }
    })
    .then(response=>{
        return response.json()
    })
    .catch(err=>console.log(err))

}

