import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import './FilterPanel.css'
import { getBrand, getColor, getMinPrice, getMaxPrice } from '../Actions/actions'


export class FilterPanel extends Component {
    render() {
        return (
            <div className="mt-3 mx-auto h-auto bg-light shadow p-3">
                <h5 className=""> Filters</h5>
                <hr />
                <small><strong>PRICE</strong></small>
                <div className="form-row align-items-center mt-2">
                    <select className="border border-muted input-sm col-4" onChange={(e)=>this.props.getMinPrice(e.target.value)}>
                        <option value={0}>Min</option>
                        <option value={1000}>1000</option>
                        <option value={2000}>2000</option>
                        <option value={3000}>3000</option>
                        <option value={4000}>4000</option>
                    </select>
                    <span className="col-2">to</span>
                    <select className="border border-muted input-sm col-4" onChange={(e)=>this.props.getMaxPrice(e.target.value)}>
                        <option value={100000}>Max</option>
                        <option value={1000}>1000</option>
                        <option value={2000}>2000</option>
                        <option value={3000}>3000</option>
                        <option value={4000}>4000</option>
                    </select>
                </div>
                <div className="mt-3">
                    <small><strong>BRAND</strong></small>
                    <div className="input-group mt-2">
                        <div className="input-group-prepend">
                            <span className="input-group-text" id="addon-wrapping"><i className="fa fa-search" aria-hidden="true"></i></span>
                        </div>
                        <input type="text" className="form-control" placeholder="Search" aria-label="Username" aria-describedby="addon-wrapping" onChange={(e) => { this.props.getBrand(e.target.value.toLowerCase()) }} />
                    </div>
                </div>
                <div className="mt-3">
                    <small><strong>COLOR</strong></small>
                    <div className="form-check mt-2">
                        <ul className="list-unstyled">
                            <li>
                                <label className="form-check-label" htmlFor="defaultCheck1">
                                    <input className="form-check-input" type="checkbox" value="Black" id="defaultCheck1" onChange={(e) => this.props.getColor(e.target.value)} />
                                    <span className="mx-2 black-dot"></span>
                                    <span className=""> Black </span></label>
                            </li>
                            <li>
                                <label className="form-check-label" htmlFor="defaultCheck2">
                                    <input className="form-check-input" type="checkbox" value="Red" id="defaultCheck2" onChange={(e) => this.props.getColor(e.target.value)} />
                                    <span className="mx-2 red-dot"></span>
                                    <span className=""> Red </span></label>
                            </li>
                            <li>
                                <label className="form-check-label" htmlFor="defaultCheck3">
                                    <input className="form-check-input" type="checkbox" value="Blue" id="defaultCheck3" onChange={(e) => this.props.getColor(e.target.value)} />
                                    <span className="mx-2 blue-dot"></span>
                                    <span className=""> Blue </span></label>
                            </li>
                            <li>
                                <label className="form-check-label" htmlFor="defaultCheck4">
                                    <input className="form-check-input" type="checkbox" value="Green" id="defaultCheck4" onChange={(e) => this.props.getColor(e.target.value)} />
                                    <span className="mx-2 green-dot"></span>
                                    <span className=""> Green </span></label>
                            </li>
                            <li>
                                <label className="form-check-label" htmlFor="defaultCheck5">
                                    <input className="form-check-input" type="checkbox" value="Grey" id="defaultCheck5" onChange={(e) => this.props.getColor(e.target.value)} />
                                    <span className="mx-2 grey-dot"></span>
                                    <span className=""> Grey </span></label>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {}

}

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({ getBrand, getColor, getMinPrice, getMaxPrice}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(FilterPanel)
