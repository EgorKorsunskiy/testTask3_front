import React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
import styles from './AddProductHeader.module.css'

class AddProductHeader extends React.Component{

    render(){
        return (
            <div className={styles.container}>
                <h1 className={styles.header}>Product Add</h1>
                <Stack spacing={2} direction="row">
                    <Button variant="contained" onClick={this.props.onClick}>
                        <Link to="/" style={{textDecoration: "none", color: "#fff"}}>save</Link>
                    </Button>
                    <Button variant="contained" color="error">
                        <Link to="/" style={{textDecoration: "none", color: "#fff"}}>cancel</Link>
                    </Button>
                </Stack>
            </div>
        )
    }
}

export default AddProductHeader