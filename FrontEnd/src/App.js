import { Route, Routes } from "react-router-dom";

import "./App.css";

import { AdminHome } from "./adminPages/adminHome/AdminHome";
import { AdminLayout } from "./layouts/adminLayout/AdminLayout";
import { UserList } from "./adminPages/userList/UserList";
import { User } from "./adminPages/user/User";
import { NewUser } from "./adminPages/newUser/NewUser";
import { ProductList } from "./adminPages/productList/ProductList";
import { Product } from "./adminPages/product/Product";
import { NewProduct } from "./adminPages/newProduct/NewProduct";

import { UserLayout } from "./layouts/userLayout/UserLayout"
import { HomeUser } from "./userPages/homeUser/HomeUser"
import { ProductListUser } from "./userPages/productListUser/ProductListUser";
import { SingleProduct } from "./userPages/singleProduct/SingleProduct";
import { SignIn } from "./userPages/signIn/SignIn";
import { SignUp } from "./userPages/signUp/SignUp";
import { Cart } from "./userPages/cart/Cart";
import { useSelector } from "react-redux";
import { NotFound } from "./components/notFound/NotFound";
 
function App() {
  const admin = false; 
  const user = useSelector((state) => state.user);

  const appUser = (
    <div className="App">
        <Routes>
          <Route path="/" element={<UserLayout />}>
            <Route index element={<HomeUser />}/>
            <Route path="/products" element={<ProductListUser />}/>
            <Route path="/product/:productId" element={<SingleProduct />}/>
            <Route path="/signin" element={<SignIn />}/>
            <Route path="/signup" element={<SignUp />}/>
            <Route path="/cart" element={<Cart />}/>
          </Route>
          <Route path="*" element={<NotFound />}/>
        </Routes>
    </div>
  );

  const appAdmin = (
    <div className="App">
          <Routes>
            {/* Wapper by Amind Layout includes: Topbar, Sidebar */}
            <Route path="/" element={<AdminLayout />}>

              <Route index element={<AdminHome />}/>
              <Route path="/users" element={<UserList />}/>
              <Route path="/users/:userId" element={<User />}/>
              <Route path="/newUser" element={<NewUser />}/>
              <Route path="/products" element={<ProductList />}/>
              <Route path="/products/:productId" element={<Product />}/>
              <Route path="/newProduct" element={<NewProduct />}/>

            </Route>
          </Routes>
    </div>
  );

  return (
    user.isAdmin ? appAdmin : appUser
  );
}

export default App;
