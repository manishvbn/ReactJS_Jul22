import React, { Component } from 'react';
import { connect } from 'react-redux';

import LoaderAnimation from '../../components/common/LoaderAnimation';
import ProductListComponent from '../../components/products/ProductListComponent';

import * as productActions from '../../actions/productActions';
import AddProductButton from '../../components/products/AddProductButton';

class ProductsContainer extends Component {
    render() {
        return (
            <>
                {
                    this.props.flag
                        ? <>
                            <div className='mt-3 mb-3'>
                                <AddProductButton />
                            </div>
                            <ProductListComponent products={this.props.products} onDelete={
                                (p, e) => {
                                    this.props.deleteProduct(p);
                                }
                            } />
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
        loadProducts: () => { dispatch(productActions.loadProducts()); },
        deleteProduct: (product) => { dispatch(productActions.deleteProduct(product)); }
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductsContainer);