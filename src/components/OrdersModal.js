import React from "react";
import { connect } from "react-redux";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Modal from "react-modal";
import { ordersActions } from "../reducers/orders";
import "./styles/OrdersModal.css";
import ReactLoading from "react-loading";

class OrderModalComponent extends React.Component {
  constructor(props) {
    super(props);
  }

  removeFromCart(productId) {
    this.props.removeProdct(productId);
  }

  renderPreviousOrders() {
    if (this.props.isLoading){
      return (<ReactLoading type="cylon" color="grey" />)
    } else if (this.props.orders.length == 0) {
    return (<p>Go and buy something </p>)
    }
    return this.props.orders.map((order) => (
      <div key={order.id} className="order-wrapper">
        <p>Order ID: {order.id}</p>
        <p>Order Date: {order.date.toString()}</p>
        <p>Was Notification Sent: {order.wasNotified.toString()}</p>
        {order.products.map((item) => (
          <div key={item.id} className="item">
            <img src={item.imageUrl} />
            <div className="details">
              <p>{item.title}</p>
              <p>Price: {item.price}$</p>
              <p>Amount: {item.amount}</p>
            </div>
          </div>
        ))}
      </div>
    ));
  }

  render() {
    return (
      <Modal
        isOpen={this.props.isVisible}
        onRequestClose={this.handleCloseModal}
        ariaHideApp={false}
        className="order-modal"
        overlayClassName="order-Overlay"
      >
        <h2>Your Orders</h2>
        <div className="order-content">{this.renderPreviousOrders()}</div>
        <div className="buttons-wrapper">
          <button onClick={() => this.props.closeModal()}>Close</button>
        </div>
      </Modal>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    orders: state.ordersReducer.orders,
    isVisible: state.ordersReducer.isVisible,
    isLoading: state.ordersReducer.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    closeModal: () => {
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
)(OrderModalComponent);
