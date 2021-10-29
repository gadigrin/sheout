import React from "react";
import { connect } from "react-redux";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Modal from "react-modal";
import { cartActions } from "../reducers/cart";
import "./styles/CartModal.css";
import ReactLoading from "react-loading";

class CartModalComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
    this.removeFromCart = this.removeFromCart.bind(this);
  }

  removeFromCart(productId){
    this.props.removeProdct(productId)
  }

  renderCartItems() {
    if (this.props.isLoading){
      return (<ReactLoading type="cylon" color="grey" />)
    } else if (this.props.cart.length == 0) {
        return (<p>Your cart is empty... </p>)
    }
    return(
        this.props.cart.map(cartItem => (
          <div key={cartItem.id} className="item">
              <img src={cartItem.imageUrl} />
              <div className="details">
                  <p>{cartItem.title}</p>
                  <p>Price: {cartItem.price}$</p>
                  <p>Amount: {cartItem.amount}</p>
                  <button onClick={() => this.removeFromCart(cartItem.id)}>Remove!</button>
              </div>
          </div>  
        ))
    )
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isVisible}
        onRequestClose={this.handleCloseModal}
        ariaHideApp={false}
        className="cart-modal"
        overlayClassName="cart-Overlay"
      >
        <h2>Your Cart</h2>
        <div className="cart-content">
            {this.renderCartItems()}
        </div>
        <div className="buttons-wrapper">
          <button onClick={() => this.props.closeCart()}>Close</button>
          <button disabled={this.props.cart.length === 0} onClick={() => this.props.processOrder()}>
          Buy for {this.props.cartPrice}$
          </button>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cartTotalItems: state.cartReducer.totalCartItems,
    cart: state.cartReducer.cart,
    cartPrice: state.cartReducer.totalCartPrice,
    isVisible: state.cartReducer.isVisible,
    isLoading: state.cartReducer.isLoading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    removeProdct: (productId) => {
      dispatch(cartActions.removeFromCart(productId));
    },
    closeCart: () => {
      dispatch(cartActions.showCart());
    },
    processOrder: () => {
      dispatch(cartActions.processOrder())
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CartModalComponent);
