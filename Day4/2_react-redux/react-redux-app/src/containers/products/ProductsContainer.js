import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoaderAnimation from '../../components/common/LoaderAnimation';
import ProductListComponent from '../../components/products/ProductListComponent';

import * as productActions from '../../actions/productActions';

class ProductsContainer extends Component {
    render() {
        return (
            <>
                {
                    this.props.flag
                        ? <>
                            <ProductListComponent products={this.props.products} />
                        </>
                        : <LoaderAnimation />
                }
            </>
        );
    }

    componentDidMount() {
        this.props.loadProducts();
    }
}

function mapStateToProps(state, ownProps) {
    return {
        products: state.productReducer.products,
        status: state.productReducer.status,
        flag: state.productReducer.flag
    };
}

function mapDispatchToProps(dispatch) {
    return {
        loadProducts: () => { dispatch(productActions.loadProducts()); }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);