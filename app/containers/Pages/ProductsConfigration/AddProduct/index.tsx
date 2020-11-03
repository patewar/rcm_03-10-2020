import React, { Component } from 'react'
import './AddProduct.css'
import ProductHeader from '../ProductHeader';
import {
    Form,
    FormGroup,
    TextInput,
    Button,
} from '@patternfly/react-core';
import { connect } from 'react-redux';
import productModels from './../Models';

const selectedItem = [
    { name: "Select", value: "Select" },
    { name: "Gross Amount", value: "GrossAmount" },
    { name: "Net Amount", value: "NetAmount" },
    { name: "Approx Amount", value: "ApproxAmount" },
]

interface stateComponent {
    code: any,
    displayName: string,
    select: any

}
interface IProps {

}
class AddProduct extends Component<IProps, stateComponent> {

    constructor(props) {
        super(props)
        this.state = {
            code: "",
            displayName: "",
            select: "",
        }
    }
    handleInputCode = (code) => {
        this.setState({ code })
    }
    handleInputname = (displayName) => {
        this.setState({ displayName })
    }
    handelSelectItem = (e) => {
        this.setState({ select: e.target.value })
    }
    onSubmit = (e) => {
        e.preventDefault()
        let newItem = {
          code: this.state.code,
          displayName: this.state.displayName,
          select: this.state.select
        };
        this.setState({
            code: this.state.code,
            displayName: this.state.displayName,
            select: this.state.select

        });
        this.props.addProduct(newItem);
        this.props.history.push('/product-configration/product/');

    }
    render() {
        const { code, displayName, select } = this.state
        return (
            <React.Fragment>
                <ProductHeader />
                <div className="Heading">
                    <h2>Add Product</h2>
                </div>
                <div className="form-group">
                    <Form onSubmit={this.onSubmit}>
                        <FormGroup label="Code :" isRequired fieldId="simple-form-Code" >
                            <TextInput
                                type="text"
                                aria-label="code"
                                isRequired
                                aria-describedby="simple-form-name-helper"
                                onChange={this.handleInputCode}
                                name="code"
                                value={code}
                            />
                        </FormGroup>
                        <FormGroup label="Display Name :" isRequired fieldId="simple-Display-Name" >
                            <TextInput
                                type="text"
                                isRequired
                                aria-label="Display Name"
                                aria-describedby="simple-form-name-helper"
                                onChange={this.handleInputname}
                                name="displayName"
                                value={displayName} />
                        </FormGroup>
                        <FormGroup label="Price-Item :" isRequired fieldId="simple-Price-Item" >
                            <select onChange={this.handelSelectItem}>
                                {
                                    selectedItem.map((item, i) => {
                                        return (
                                            <option key={i} value={item.value}>{item.name}</option>
                                        )
                                    })
                                }
                            </select>
                        </FormGroup>
                        <Button className="btn"
                            onClick={this.onSubmit}
                        >Save</Button>
                    </Form>
                </div>
            </React.Fragment>
        )
    }
}
const mapDispatchToProps = dispatch => {
  return {
    addProduct: payload => dispatch(productModels.addProduct(payload))
  }
}
const mapStateToProps = (state) => {
  return {
    product: state.product,
    locale: state.language.locale
  }
}
export default connect(mapStateToProps,mapDispatchToProps )(AddProduct);
//export default  AddProduct;
