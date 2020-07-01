import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Orders extends Component {
    render() {
        return (
            <div className="container mt-3">
                <h3 className="font-weight-lighter">Your Purchases</h3>
                <hr />
                <div className="row justify-content-center">
                    {this.props.orders.length === 0
                        ? <h3 className="font-weight-lighter">No Purchases.</h3>
                        : ""
                    }
                    {this.props.orders.map((e, i) => {
                        return <div class="card mb-3 m-3 px-3 pt-3" style={{ "max-width": "640px" }}>
                            <div class="row no-gutters">
                                <div class="col-md-4">
                                    <img src={e.productImage} class="card-img" alt="..." />
                                </div>
                                <div class="col-md-8">
                                    <div class="card-body">
                                        <h5 class="card-title">{e.productName}</h5>
                                        <span className="badge bg-success rounded text-light">{e.productRating} <small><i className="fa fa-star" aria-hidden="true"></i></small></span>
                                        <div className="mt-2">
                                            <span className="pr-2"><strong><i className="fa fa-inr" aria-hidden="true"></i> {e.productDiscountPrice}</strong></span>
                                            <span className="text-muted pr-2"><strike><i className="fa fa-inr" aria-hidden="true"></i> {e.productOriginalPrice}</strike></span>
                                            <span className="text-success">{((e.productOriginalPrice - e.productDiscountPrice) / e.productOriginalPrice).toFixed(2) * 100}% off</span>
                                        </div>
                                    </div>
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
    const { orders } = state
    return { orders }

}

const mapDispatchToProps = (dispatch) => {
    return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Orders)
