import React, { Component } from 'react';
import { Modal, Button, ModalVariant, TextInput, Form, FormGroup, Grid, GridItem, SearchInput, Flex, FlexItem } from '@patternfly/react-core';
import { connect } from 'react-redux';
import productModels from './../../../containers/Pages/ProductsConfigration/Models';
import productActionTypes from './../../../containers/Pages/ProductsConfigration/ActionTypes';

interface stateComponent {
    isModalOpen: boolean
}
interface IProps {
    handleModalClose: any,
    showModal: boolean,
    item: any
}
class ProductModal extends Component<IProps, stateComponent> {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
            product: props.item
        };
    }
    handleModalToggle = () => {
        this.props.editProduct(this.state.product);
        this.props.handleModalClose(false);
    };
    onSubmit = () => {

    }
    handleInputCode = currentCode => {

      this.setState( prevState =>{
          return {
            ...prevState,
            product: { ...prevState.product , code: currentCode}
          }
      })
    }
    handleInputname = currentName => {
      this.setState( prevState =>{
          return {
            ...prevState,
            product: { ...prevState.product , name: currentName}
          }
      })
    }
    onChange = () => { }
    render() {
        return (
            <React.Fragment>
                <Modal
                    variant={ModalVariant.medium}
                    aria-label="My modal context"
                    title="Edit Product"
                    isOpen={this.props.showModal}
                    onClose={this.handleModalToggle}
                    actions={[
                        <Button key="confirm" variant="danger" onClick={this.handleModalToggle}>
                            Delete Product
                         </Button>,
                        <Button key="add" variant="primary" onClick={this.handleModalToggle} style={{ marginLeft: "auto" }}>
                            Edit
                         </Button>,
                        <Button key="cancel" variant="link" onClick={this.handleModalToggle} >
                            Cancel
                         </Button>
                    ]}
                >
                    <Form onSubmit={this.onSubmit}>
                        <Grid>
                            <GridItem span={6}>
                                <FormGroup label="Code :" isRequired fieldId="simple-form-Code" >
                                    <TextInput
                                        type="text"
                                        isRequired
                                        placeholder="code"
                                        aria-label="simple-form-name-helper"
                                        onChange={this.handleInputCode}
                                        defaultValue={this.state.product.code}
                                        name="code"
                                    />
                                </FormGroup>
                            </GridItem>
                            <GridItem span={6}>
                                <FormGroup label="Display Name :" isRequired fieldId="simple-Display-Name" >
                                    <TextInput
                                        type="text"
                                        isRequired
                                        placeholder="Display Name"
                                        aria-label="simple-form-name-helper"
                                        onChange={this.handleInputname}
                                        defaultValue={this.state.product.name}
                                        name="displayName"
                                    />
                                </FormGroup>
                            </GridItem>
                        </Grid>
                        <Grid style={{ marginTop: "40px" }}>
                            <GridItem span={6}>
                                <Button>Add Price Item</Button>
                            </GridItem>
                            <GridItem span={6}>
                                <SearchInput
                                    placeholder='Search Reseller'
                                    onChange={this.onChange}
                                    onClear={() => this.onChange()}
                                />
                            </GridItem>
                            <GridItem span={12} style={{ marginTop: "20px" }}>
                                Reseller1
                                Reseller2
                                Reseller3
                                Reseller4
                            </GridItem>
                        </Grid>
                    </Form>
                </Modal>
            </React.Fragment>
        );
    }
}

const mapDispatchToProps = dispatch => {
  return {
    editProduct: payload => dispatch(productModels.editProduct(payload))
  }
}
const mapStateToProps = (state) => {
  return {
    product: state.product,
    locale: state.language.locale
  }
}
export default connect(mapStateToProps,mapDispatchToProps )(ProductModal);
//export default ProductModal;
