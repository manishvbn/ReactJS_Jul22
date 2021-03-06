import React, { lazy, Suspense } from 'react';
import { Link, Route, Switch, useLocation } from "react-router-dom";

// Eager Loading
import HomeComponent from "../components/home/HomeComponent";
import LoaderAnimation from '../components/common/LoaderAnimation';

// Lazy Loading
const AboutComponent = lazy(() => import("../components/about/AboutComponent"));
const HOCDemoComponentOne = lazy(() => import('../components/hoc/HOCDemoComponentOne'));
const HOCDemoComponentTwo = lazy(() => import('../components/hoc/HOCDemoComponentTwo'));
const PortalRoot = lazy(() => import('../components/portals/PortalRoot'));
const CounterContainer = lazy(() => import('../containers/counter/CounterContainer'));
const FCounterRoot = lazy(() => import('../components/f-counter/FCounterRoot'));
const FunctionCounter = lazy(() => import('../containers/counter/FunctionCounter'));
const ProductsContainer = lazy(() => import('../containers/products/ProductsContainer'));
const ManageProductContainer = lazy(() => import('../containers/products/ManageProductContainer'));

const img404 = require('../assets/http-404.jpg');

export default (
    <Suspense fallback={<LoaderAnimation />}>
        <Switch>
            <Route exact path="/" component={HomeComponent} />
            <Route path="/about" component={AboutComponent} />
            <Route path="/hoc1" component={HOCDemoComponentOne} />
            <Route path="/hoc2" component={HOCDemoComponentTwo} />
            <Route path="/portals" component={PortalRoot} />
            <Route path="/counter" component={CounterContainer} />
            <Route path="/fcounterroot" component={FCounterRoot} />
            <Route path="/fcounter" component={FunctionCounter} />
            <Route path="/products" component={ProductsContainer} />
            <Route path="/product/:id" component={ManageProductContainer} />
            <Route path="/product" component={ManageProductContainer} />

            {/* <Route path="/hoc1" render={
                (props) => (
                    <HOCDemoComponentOne data={"Data from the Router"} {...props} />
                )
            } />
            <Route path="/hoc2" render={
                (props) => (
                    <HOCDemoComponentTwo data={"Data from the Router"} {...props} />
                )
            } /> */}

            <Route path="*">
                <NoMatch />
            </Route>
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