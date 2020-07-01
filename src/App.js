import React, { Component } from 'react'
import { connect } from 'react-redux'
import {bindActionCreators} from 'redux'
import FilterPanel from './Components/FilterPanel'
import { BrowserRouter, Route } from 'react-router-dom'
import Products from './Components/Products'
import Navbar from './Components/Navbar'
import Cart from './Components/Cart'
import Orders from './Components/Orders'

export class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div>
          <Navbar />
        </div>
        <Route path="/" exact>
          <div className="col">
            <div className="row">
              <div className="col-lg-2 col-sm-12">
                <FilterPanel />
              </div>
              <div className="col-lg-10 col-sm-12">
                <Products />
              </div>
            </div>
          </div>
        </Route>
        <Route path="/cart" exact>
          <Cart/>
        </Route>
        <Route path="/orders" exact>
          <Orders/>          
        </Route>

      </BrowserRouter>
    )
  }
}

const mapStateToProps = (state) => {
  return { }

}

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({},dispatch)

}

export default connect(mapStateToProps, mapDispatchToProps)(App)

