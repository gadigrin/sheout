import React from "react";
import { connect } from "react-redux";
import "./styles/ProductList.css";
import Dropdown from "react-dropdown";
import "react-dropdown/style.css";
import Modal from "react-modal";
import { cartActions } from "../reducers/cart";
import { productsActions } from "../reducers/products";
import ReactLoading from "react-loading";

class ProductListComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedProduct: null,
      showModel: false,
      chosenAmount: null,
      showAmountError: false,
    };
    this.addToCart = this.addToCart.bind(this);
    this.handleCloseModal = this.handleCloseModal.bind(this);
    this.onChangeAmount = this.onChangeAmount.bind(this);
  }

  componentDidMount() {
    this.props.getProducts()
  }

  addToCart(product) {
    console.log(product, "added to cart");
    this.setState({
      selectedProduct: product,
      showModel: true,
    });
  }

  handleCloseModal(didFinishOrder) {
    if (!this.state.chosenAmount) {
      this.setState({ showAmountError: true });
    } else {
      if (didFinishOrder) {
        this.props.addProductToCart({
          ...this.state.selectedProduct,
          amount: this.state.chosenAmount,
        });
        console.log(this.state);
      }
      this.setState({
        showModel: false,
        chosenAmount: null,
        selectedProduct: null,
        showAmountError: false,
      });
    }
  }

  onChangeAmount(amount) {
    this.setState({
      chosenAmount: amount.value,
      showAmountError: false,
    });
  }

  renderProductList(){

    if (this.props.isLoading){
      return (<ReactLoading type="cylon" color="grey" />)
    } else {
      const productsList = this.props.products.map((product) => (
        <div key={product.id} className="product-item-wrapper">
          <h4> {product.title} </h4>
          <img alt="" src={product.imageUrl} className="product-image" />
          <p>rating: {product.rating} stars</p>
          <p> Price: {product.price}$ </p>
          <button onClick={() => this.addToCart(product)}> Add to cart </button>
        </div>
      ));

      return productsList
    }

    
  }

  render() {
    
    return (
      <div className="product-list">
        {this.renderProductList()}
        <Modal
          isOpen={this.state.showModel}
          onRequestClose={this.handleCloseModal}
          className="Modal"
          overlayClassName="Overlay"
        >
          <p> How Many ? ? ? </p>
          <Dropdown
            options={Array.from({ length: 5 }, (v, k) => k + 1)}
            onChange={this.onChangeAmount}
            value={null}
            ariaHideApp={false}
            placeholder="Choose..."
          />
          {this.state.showAmountError ? <p>have to choose!!</p> : null}
          <button onClick={this.handleCloseModal}> Close Modal </button>
        </Modal>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    products: state.productReducer.products,
    isLoading: state.productReducer.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addProductToCart: (product) => {
      dispatch(cartActions.addToCart(product));
    },
    getProducts: () => {
      dispatch(productsActions.getProducts())
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProductListComponent);
