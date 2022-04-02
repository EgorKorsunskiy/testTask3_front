import React from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import styles from './CustomInput.module.css';

class CustomInput extends React.Component{

    render(){
        return (
            <div className={styles.container}>
                <Typography variant="h5" gutterBottom component="div" sx={{margin: 0, display: "flex", alignItems: "flex-end"}}>
                    {this.props.label}
                </Typography>
                <TextField
                    label={ `enter the ${this.props.label.toLowerCase()}` }
                    variant="outlined" 
                    name={this.props.name}
                    onChange={this.props.onChange}
                    onBlur={this.props.onBlur}
                    value={this.props.value}
                    {...this.props}
                    sx={{
                        width: "60%"
                    }}
                />
            </div>
        )
    }
}

export default CustomInput