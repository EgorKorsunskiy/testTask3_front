import { observer } from 'mobx-react';
import React from 'react';
import { Routes, Route } from "react-router-dom";
import styles from './App.module.css';
import MainPage from './components/MainPage/MainPage';
import AddProduct from './components/ProductDetail/AddProduct';

export default observer(
  class App extends React.Component{

    render(){
      return (
        <Routes>
          <Route path="/" element={<MainPage productState={this.props.productState} />} />
          <Route path="/add-product" element={<AddProduct productState={this.props.productState} />} />  
        </Routes>
      )
    }
  }
)
