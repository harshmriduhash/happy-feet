import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { getProducts, buy, gotHome } from '../Actions/actions'

export class Products extends Component {
    state = {
        products: []
    }
    componentDidMount() {
        this.props.getProducts()
        this.props.gotHome()
    }
    componentDidUpdate = (prevProps, prevState) => {
        if (this.props.filterProducts !== prevProps.filterProducts) {
            this.setState({
                products: this.props.filterProducts
            })
        }
    }

    ascendingSort = () => {
        let ascendingProducts = this.state.products
        ascendingProducts.sort((a, b) => {
            return a.productDiscountPrice - b.productDiscountPrice
        })
        this.setState({
            products: ascendingProducts
        })
    }

    descendingSort = () => {
        let descendingProducts = this.state.products
        descendingProducts.sort((a, b) => {
            return b.productDiscountPrice - a.productDiscountPrice
        })
        this.setState({
            products: descendingProducts
        })
    }

    relevant = () => {
        let relevantProducts = this.state.products
        relevantProducts.sort((a, b) => {
            return a.id - b.id
        })
        this.setState({
            products: relevantProducts
        })
    }



    render() {
        return (
            <div>
                <div className="mt-3">
                    <span className="px-2 btn btn-sm"><strong>Sort by: </strong></span>
                    <span className="px-2 btn btn-sm" onClick={() => this.relevant()}><strong>Relevance</strong></span>
                    <span className="px-2 btn btn-sm" onClick={() => this.ascendingSort()}><strong>Price: Low to High <i className="fa fa-long-arrow-down" aria-hidden="true"></i></strong></span>
                    <span className="px-2 btn btn-sm" onClick={() => this.descendingSort()}><strong>Price: High to Low <i className="fa fa-long-arrow-up" aria-hidden="true"></i></strong></span>
                </div>
                <hr />
                <div className="row">
                    {this.state.products.map((e, i) => {
                        return <div className="card col-lg-3 col-xs-12 px-3 pt-3 pb-1 m-3 " key={e.id}>
                            <img src={e.productImage} className="p-3 card-img-top" alt="..." />
                            <div className="card-body">
                                <span className="text-muted"><strong>{e.productBrand}</strong></span>
                                <p><strong>{e.productName}</strong></p>
                                <button className="btn btn-outline-success float-right" onClick={() => this.props.buy(e)}>Buy</button>
                                <span className="badge bg-success rounded text-light">{e.productRating} <small><i className="fa fa-star" aria-hidden="true"></i></small></span>
                                <div>
                                    <span className="pr-2"><strong><i className="fa fa-inr" aria-hidden="true"></i> {e.productDiscountPrice}</strong></span>
                                    <span className="text-muted pr-2"><strike><i className="fa fa-inr" aria-hidden="true"></i> {e.productOriginalPrice}</strike></span>
                                    <span className="text-success">{((e.productOriginalPrice - e.productDiscountPrice) / e.productOriginalPrice).toFixed(2) * 100}% off</span>
                                </div>
                            </div>
                        </div>
                    })}
                </div>

            </div>
        )
    }
}

const mapStateToProps = (state) => {
    const { products, filterProducts, } = state
    return {
        products,
        filterProducts,
    }

}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getProducts, buy, gotHome}, dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(Products)
