import React from "react";
import styles from "./CustomSelect.module.css"
import MenuItem from '@mui/material/MenuItem';
import { TextField, Typography } from "@mui/material";
import { ErrorMessage } from "formik"

class CustomSelect extends React.Component{

    generateMenuItems(){
        const Elements = []

        for(let option of this.props.options){
            Elements.push(<MenuItem value={option} id={option.toLowerCase()} key={option}>{option}</MenuItem>)
        }

        return Elements
    }

    render(){
        return (
            <React.Fragment>
                <div className={styles.container}>
                    <Typography variant="h5" gutterBottom component="div" sx={{margin: 0, display: "flex", alignItems: "flex-end"}}>
                        {this.props.label}
                    </Typography>
                    <TextField
                        id={this.props.id}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                        name={this.props.name}
                        value={this.props.value}
                        select
                        label={this.props.label}
                        sx={{
                            width: "60% "
                        }}
                    >
                        {this.generateMenuItems()}
                    </TextField>
                </div>
                <ErrorMessage  name="typeSelect" component="div" className={styles.errorMessage}/>
            </React.Fragment>
        )
    }
}

export default CustomSelect