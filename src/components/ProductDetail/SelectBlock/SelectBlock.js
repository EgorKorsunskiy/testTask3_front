import { Typography } from "@mui/material";
import React from "react";
import { ErrorMessage } from "formik"
import CustomInput from "../CustomInput/CustomInput";
import styles from "./SelectBlock.module.css"

class SelectBlock extends React.Component{

    generateInputElements(){
        const Elements = []

        for(let i = 0;i < this.props.labels.length;i++){
            Elements.push(
                <React.Fragment>
                    <CustomInput 
                        label={this.props.labels[i]}
                        id={this.props.ids[i]}
                        type="number"
                        name={this.props.ids[i]}
                        onChange={this.props.onChange}
                        onBlur={this.props.onBlur}
                        value={this.props.values[this.props.ids[i]]}
                        key={i}
                    />
                    <ErrorMessage  name={this.props.ids[i]} component="div" className={styles.errorMessage} key={`${i}_error`} />
                </React.Fragment>
            )
        }

        return Elements
    }

    render(){
        return (
            <div className={styles.container}>
                {
                    this.props.labels?
                    <div>
                        {this.generateInputElements()}
                        <Typography variant="h6" gutterBottom component="div">
                            {this.props.description}
                        </Typography>
                    </div>:
                    null
                }
            </div>
        )
    }
}

export default SelectBlock