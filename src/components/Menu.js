import React from "react";
import { connect } from "react-redux";
import "./styles/Menu.css";
import Modal from "react-modal";
import { cartActions } from "../reducers/cart";
import { ordersActions } from "../reducers/orders";

class MenuComponent extends React.Component {
  constructor(props) {
    super(props);
    this.showOrders = this.showOrders.bind(this)
  }

  showOrders(){
    this.props.getOrders()
    this.props.showOrders()
  }

  render() {
    return <div className="menu">
          <div onClick={() => this.props.showCart()}>
            Cart: {this.props.cartTotalItems}
          </div>
          <div onClick={this.showOrders}>
            Orders Summary
          </div>
      </div>;
  }
}

const mapStateToProps = (state) => {
  return {
    cartTotalItems: state.cartReducer.totalCartItems,
    cart: state.cartReducer.cart,
    cartPrice: state.cartReducer.totalCartPrice,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    showCart: () => {
      dispatch(cartActions.showCart());
    },
    showOrders: () => {
      dispatch(ordersActions.showOrders());
    },
    getOrders: () => {
      dispatch(ordersActions.getOrders());
    },
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MenuComponent);
