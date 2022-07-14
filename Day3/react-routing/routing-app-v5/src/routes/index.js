import React, { lazy, Suspense } from 'react';
import { Link, Route, Switch, useLocation } from "react-router-dom";

// Eager Loading
import HomeComponent from "../components/home/HomeComponent";
import LoaderAnimation from '../components/common/LoaderAnimation';
// import AboutComponent from "../components/about/AboutComponent";
// import AdminComponent from "../components/admin/AdminComponent";
// import AssignComponent from "../components/assign/AssignmentComponent";
// import LoginComponent from "../components/login/LoginComponent";
// import ProductsComponent from "../components/products/ProductsComponent";

// Lazy Loading
const AboutComponent = lazy(() => import("../components/about/AboutComponent"));
const AdminComponent = lazy(() => import("../components/admin/AdminComponent"));
const AssignComponent = lazy(() => import("../components/assign/AssignmentComponent"));
const LoginComponent = lazy(() => import("../components/login/LoginComponent"));
const ProductsComponent = lazy(() => import("../components/products/ProductsComponent"));

const img404 = require('../assets/http-404.jpg');

export default (
    <Suspense fallback={<LoaderAnimation />}>
        <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route path="/about" component={AboutComponent} />
            <Route path="/products" component={ProductsComponent} />
            <Route path="/admin" component={AdminComponent} />
            <Route path="/assign" component={AssignComponent} />
            <Route path="/login" component={LoginComponent} />
            <Route path="*">
                <NoMatch />
            </Route>
            {/* <Route path="*" render={() => {
            return (
                <div className="text-center">
                    <article>
                        <h1 className="text-danger">No match Found!</h1>
                        <h4 className="text-danger">Please check your Route Configuration</h4>
                        <div className="mt-5">
                            <img src={img404} alt="Not Found" className="rounded" />
                        </div>
                        <h2 className="mt-5">
                            <Link className="nav-link" to="/">Back to Home</Link>
                        </h2>
                    </article>
                </div>
            );
        }} /> */}
        </Switch>
    </Suspense>
);

function NoMatch() {
    let location = useLocation();

    return (
        <div className="text-center">
            <article>
                <h1 className="text-danger">No match for <code>{location.pathname}</code></h1>
                <h4 className="text-danger">Please check your Route Configuration</h4>
                <div className="mt-5">
                    <img src={img404} alt="Not Found" className="rounded" />
                </div>
                <h2 className="mt-5">
                    <Link className="nav-link" to="/">Back to Home</Link>
                </h2>
            </article>
        </div>
    );
}