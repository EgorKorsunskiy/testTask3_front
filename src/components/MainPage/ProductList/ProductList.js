import React from 'react';
import styles from './ProductList.module.css';
import Checkbox from '@mui/material/Checkbox';
import Typography from '@mui/material/Typography';
import { observer } from 'mobx-react';


class ProductList extends React.Component{
        
    generateProductElements(){
        const Elements = []

        this.props.products.forEach((product, index) => {
            Elements.push(  
                    <div className={styles.wrapper} key={index}>
                        {
                            this.props.deleteMode?
                            <Checkbox 
                                sx={{
                                    position: "absolute",
                                    top: 5,
                                        left: 5
                                }}
                                onChange={() => this.props.toggleDeleteId(product.id)}
                                className="delete-checkbox"
                            />:
                            null
                        }
                        
                        <Typography variant="h5" gutterBottom component="div" sx={{margin: "10px 0"}}>
                            {product.SKU}
                        </Typography>
                        <Typography variant="h5" gutterBottom component="div" sx={{margin: "10px 0"}}>
                            {product.name}
                        </Typography>
                        <Typography variant="h5" gutterBottom component="div" sx={{margin: "10px 0"}}>
                            {product.price}
                        </Typography>
                        <Typography variant="h5" gutterBottom component="div" sx={{margin: "10px 0"}}>
                            {`${product.type}: ${product.additionalInfo}`}
                        </Typography>
                    </div>
            )
        })

            return Elements
        }

    render(){
        return (
            <div className={styles.container}>
                { this.generateProductElements() }
            </div>
        )
  }
}

export default observer(ProductList)