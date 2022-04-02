import { observer } from 'mobx-react';
import React from 'react';
import styles from './MainPage.module.css';
import MainPageHeader from './MainPageHeader/MainPageHeader';
import ProductList from './ProductList/ProductList';


class MainPage extends React.Component{

  constructor(props){
    super(props)
    
    this.state = {
      deleteMode: false,
      deleteIds: []
    }
  }

  componentDidMount(){
    this.props.productState.fetchProducts()
  }

  toggleDeleteMode(){
    this.setState(
      ({deleteMode : prevDeleteMode}) => ({
        deleteMode: !prevDeleteMode
      })
    )
  }

  deleteProducts(){
    this.props.productState.deleteProducts(this.state.deleteIds)
    this.setState({
      deleteIds: []
    })
  }

  toggleDeleteId(id){
    const index = this.state.deleteIds.indexOf(id)

    if(index === -1){
      this.setState(
        ({deleteIds : prevDeleteIds}) => ({
          deleteIds: [...prevDeleteIds, id]
        })
      )
    }
    else{
      this.state.deleteIds.splice(index, 1)
    }
  }

  render(){
    return (
      <React.Fragment>
        <MainPageHeader
          productState={this.props.productState}
          deleteMode={this.state.deleteMode}
          deleteProducts={this.deleteProducts.bind(this)}
          toggleDeleteMode={this.toggleDeleteMode.bind(this)}
        />

        <ProductList
          products={this.props.productState.products}
          deleteMode={this.state.deleteMode}
          toggleDeleteId={this.toggleDeleteId.bind(this)}
        />
      </React.Fragment>
    )
  }
}

export default observer(MainPage);
