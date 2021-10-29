import React, { Component } from "react";
import logo from "./assets/sheout.png";
import "./App.css";
import { Provider } from "react-redux";
import configureStore from "./store";
import Menu from "./components/Menu";
import ProducListComponent from "./components/ProductList";
import CartModal from "./components/CartModal";
import OrdersModal from "./components/OrdersModal";

let store = configureStore();

class App extends Component {
  
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Menu/>
          </header>
          <div className="body">
            <ProducListComponent />
            <CartModal />
            <OrdersModal />
          </div>
        </div>
      </Provider>
    );
  }


}

export default App;
