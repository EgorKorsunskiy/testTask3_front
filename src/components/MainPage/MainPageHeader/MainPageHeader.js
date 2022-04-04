import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import styles from './MainPageHeader.module.css';
import { Link } from 'react-router-dom';


class MainPageHeader extends React.Component{

  deleteClickHandler(){
      this.props.toggleDeleteMode()
      this.props.deleteProducts()
  }

  render(){
    return (
      <div className={styles.container}>
          <h1 className={styles.header}>Product List</h1>
          <Stack spacing={2} direction="row">
            <Button variant="contained">
                <Link to="/add-product" style={{textDecoration: "none", color: "#fff"}}>ADD</Link>
            </Button>
            {
                this.props.deleteMode?
                <Button variant="contained" color="error" onClick={this.deleteClickHandler.bind(this)} id='delete-product-btn'>Delete</Button>:
                <Button variant="contained" color="error" onClick={this.props.toggleDeleteMode} id='delete-product-btn'>MASS DELETE</Button>
            }
        </Stack>
      </div>
    )
  }
}

export default MainPageHeader;
