import React from 'react'
import {BrowserRouter,Route,Switch} from 'react-router-dom'
import Home from './core/Home'
import Signup from './user/Signup'
import Signin from './user/Signin'
import PrivateRoute from './auth/helper/PrivateRoutes'
import AdminRoute from './auth/helper/AdminRoutes'
import AdminDashBoard from './user/AdminDashBoard'
import UserDashBoard from './user/UserDashBoard'
import AddCategory from './admin/AddCategory'
import ManageCategory from './admin/ManageCategory'
import AddProduct from './admin/AddProduct'
import ManageProduct from './admin/ManageProducts'
import UpadateProduct from './admin/UpdateProduct'
import UpdateCategory from './admin/UpdateCategory'
import Cart from './core/Cart'

export default function(){
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/signup' exact component={Signup}/>
                <Route path='/signin' exact component={Signin}/>
                <Route path='/cart' exact component={Cart}/>
                <PrivateRoute path='/user/dashboard' exact component={UserDashBoard} />
                <AdminRoute path='/admin/dashboard' exact component={AdminDashBoard} />
                <AdminRoute path='/admin/create/categories' exact component={AddCategory} />
                <AdminRoute path='/admin/categories' exact component={ManageCategory} />
                <AdminRoute path='/admin/category/update/:categoryId' exact component={UpdateCategory} />
                <AdminRoute path='/admin/create/product' exact component={AddProduct}  />
                <AdminRoute path='/admin/products' exact component={ManageProduct}  />
                <AdminRoute path='/admin/product/update/:productId' exact component={UpadateProduct}  />

            </Switch>
        </BrowserRouter>
    )
}