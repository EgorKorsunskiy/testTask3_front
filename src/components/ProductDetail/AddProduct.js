import React from 'react';
import { ErrorMessage, Formik } from "formik"
import * as yup from "yup"
import styles from './AddProduct.module.css';
import AddProductHeader from './AddProductHeader/AddProductHeader';
import CustomInput from './CustomInput/CustomInput';
import CustomSelect from './CustomSelect/CustomSelect';
import SelectBlock from './SelectBlock/SelectBlock';


class AddProduct extends React.Component{
  constructor(props){
    super(props)

    this.state = {
      currentBlock: null,
      selectBlockOptions: {
        DVD: {
          labels: ["Size (MB)"],
          ids: ["size"],
          description: "some text"
        },
        Furniture: {
          labels: ["Height (CM)", "Width (CM)", "length (CM)"],
          ids: ["height", "width", "length"],
          description: "some text 2"
        },
        Book: {
          labels: ["Weight (KG)"],
          ids: ["weight"],
          description: "wtrite the weight of the item you want to sell"
        }
      }
    }

    this.validationSchema = yup.object().shape({
      SKU: yup.string().required(),
      name: yup.string().required(),
      price: yup.string().required(),
      typeSelect: yup.string().required(),
      size: yup.number().when("typeSelect", {
        is: (typeSelect) => typeSelect === "DVD",
        then: yup.number().required()
      }),
      height: yup.number().when("typeSelect", {
        is: (typeSelect) => typeSelect === "Furniture",
        then: yup.number().required()
      }),
      width: yup.number().when("typeSelect", {
        is: (typeSelect) => typeSelect === "Furniture",
        then: yup.number().required()
      }),
      length: yup.number().when("typeSelect", {
        is: (typeSelect) => typeSelect === "Furniture",
        then: yup.number().required()
      }),
      weight: yup.number().when("typeSelect", {
        is: (typeSelect) => typeSelect === "Book",
        then: yup.number().required()
      })
    })
  }

  render(){
    return (
      <React.Fragment>
        <Formik
          initialValues={{
            SKU: "",
            name: "",
            price: "",
            typeSelect: "",
            size: "",
            height: "",
            width: "",
            length: "",
            weight: ""
          }}
          validationSchema={this.validationSchema}
          onSubmit={({SKU, name, price, typeSelect, size, height, width, length, weight}) => {
            let additionalInfo = ""

            if(typeSelect === "DVD") additionalInfo = `${size} MB`
            else if(typeSelect === "Furniture") additionalInfo = `${height}x${width}x${length}`
            else additionalInfo = `${weight} KG`
            console.log(additionalInfo)
            this.props.productState.addProduct(SKU, name, price, typeSelect, additionalInfo)
          }}
        >
          {
            props => (
              <React.Fragment>
                <AddProductHeader onClick={props.handleSubmit}></AddProductHeader>

                <form id='product-form' noValidate className={styles.form}>
                  <CustomInput
                    label="SKU"
                    id="sku"
                    type="text"
                    name="SKU"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.SKU}
                  />
                  <ErrorMessage  name="SKU" component="div" className={styles.errorMessage}/>
                  <CustomInput
                    label="Name"
                    id="name"
                    type="text"
                    name="name"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.name}
                  />
                  <ErrorMessage  name="name" component="div" className={styles.errorMessage}/>
                  <CustomInput
                    label="Price ($)"
                    id="price"
                    type="number"
                    name="price"
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.price}
                  />
                  <ErrorMessage  name="price" component="div" className={styles.errorMessage}/>
                  <CustomSelect 
                    id="productType"
                    label="Select type"
                    name="typeSelect"
                    options={Object.keys(this.state.selectBlockOptions)}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    value={props.values.typeSelect}
                  />
                  <SelectBlock 
                    labels={this.state.selectBlockOptions[props.values.typeSelect]?.labels}
                    ids={this.state.selectBlockOptions[props.values.typeSelect]?.ids}
                    description={this.state.selectBlockOptions[props.values.typeSelect]?.description}
                    onChange={props.handleChange}
                    onBlur={props.handleBlur}
                    values={props.values}
                  />
                </form>
              </React.Fragment>
              )
          }
        </Formik>
      </React.Fragment>
    )
  }
}

export default AddProduct;
