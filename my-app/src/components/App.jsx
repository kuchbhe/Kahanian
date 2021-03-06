import React from "react";
import Login from "./LoginForm";
import Signup from "./Signup";
import Homepage from "./homepage";
import Denj from "./denj";
import Product from "./Product";
import Getexchange from "./Getexchange";
import Getfaqs from "./Getfaqs";
import Reviews from "./Reviewpage"; 
import Blockreview from "./Blockreviews";
import Getabout from "./Getabout";
import Adminpage from "./adminpage"; //Admin Main Page
import Queries from "./Viewqueries"; //View Queries -> Retrieved from Database
import Subs from "./Viewsubs"; //View Subscribers -> Retrieved from Database 
import Updateinfo from "./UpdateInformation"; //Update Information 
import Updateabout from "./updateabout";
import Updatefaqs from "./Updatefaqs"; //Update the FAQS -> Add/Edit/Delete
import Managecollection from "./Managecollection";  // Manage Collection Page  
import Updateexchange from "./Updateexchange"; 
import User from "./UserProfile";
import Cart from "./../cartPage.js";
import Dashboard from "./Dashboard";
import Checkout from "./../checkout"
import PlaceOrder from "./../PlaceOrder"
import Orders from "./orders";
import AddCollection from "./addCollection"
import AddProduct from "./addProduct"
import EditCollection from "./EditCollection"
import EditProduct from "./EditProduct"
import Voucher from "./vouchers";



// import 'bootstrap/dist/css/bootstrap.min.css'
import { AuthProvider } from "../contexts/AuthContext";
import {BrowserRouter as Router, Switch, Route } from "react-router-dom"


function App() {
  return (
        <div>
          <Router>
            <AuthProvider>
              <Switch>
                <Route exact path = "/" component = {Homepage} />
                <Route path = "/signup" component = {Signup} />
                <Route path = "/login" component = {Login} />
                <Route path = "/denj" component = {Denj} />
                <Route path = "/product" component = {Product} />
                <Route path = "/ExchangePolicy" component = {Getexchange}/>
                <Route path = "/FAQ" component = {Getfaqs} />
                <Route path = "/AboutUs" component = {Getabout} />
                <Route path = "/adminpage" component = {Adminpage} /> 
                <Route path = "/viewqueries" component = {Queries}/>
                <Route path = "/viewsubs" component = {Subs}/>
                <Route path = "/updateinformation" component = {Updateinfo}/>
                <Route path = "/updateabout" component = {Updateabout}/>
                <Route path = "/updatefaqs" component = {Updatefaqs}/>
                <Route path = "/updateexchange" component = {Updateexchange}/>
                <Route path = "/managecollections" component = {Managecollection}/>
                <Route path = "/userprofile" component = {User} />
                <Route path = "/reviews" component = {Reviews}/>
                <Route path = "/managereviews" component = {Blockreview}/>
                <Route path = "/cart" component = {Cart} />
                <Route path = "/dashboard" component = {Dashboard} />
                <Route path = "/checkout" component = {Checkout} />
                <Route path = "/placeOrder" component = {PlaceOrder} />
                
                <Route path = "/manageorders" component = {Orders}/>
                <Route path = "/addCollection" component = {AddCollection}/>
                <Route path = "/addProduct" component = {AddProduct}/>
                <Route path = "/EditCollection" component = {EditCollection}/>
                <Route path = "/EditProduct" component = {EditProduct}/>
                <Route path = "/vouchercodes" component = {Voucher}/>

              </Switch>
            </AuthProvider>
          </Router>
      </div>
  );
}

export default App;
