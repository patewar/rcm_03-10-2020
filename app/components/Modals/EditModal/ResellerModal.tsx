import React, { Component } from 'react';
import { Modal, Button, ModalVariant, TextInput, Form, FormGroup, Grid, GridItem, SearchInput, Divider } from '@patternfly/react-core';



interface stateComponent {
    isModalOpen: boolean,
}
interface IProps{
    handleModalClose: any,
    showModal: boolean,
}
class ResellerModal extends Component<IProps, stateComponent> {
    constructor(props) {
        super(props);
        this.state = {
            isModalOpen: false,
        };
    }
    handleModalToggle = () => {
        this.props.handleModalClose(false)
    };
    onSubmit = () => {

    }
    handleInputCode = () => { }
    handleInputname = () => { }
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
                        <Button key="confirm" variant="primary" onClick={this.handleModalToggle} style={{marginLeft:"auto"}}>
                            Add
                         </Button>,
                        <Button key="cancel" variant="link" onClick={this.handleModalToggle}>
                            Cancel
                         </Button>
                    ]}
                >
                        <Grid>
                            <GridItem span={6} style={{width:"200%"}}>
                                <FormGroup label="Group Name" isRequired fieldId="simple-form-Code" >
                                    <TextInput
                                        type="text"
                                        isRequired
                                        placeholder="Reseller zone"
                                        aria-describedby="simple-form-name-helper"
                                        onChange={this.handleInputCode}
                                        name="groupName"
                                    />
                                </FormGroup>
                            </GridItem>
                        </Grid>
                        <Grid style={{ marginTop: "40px" }}>
                            <GridItem span={6}>
                                <Button>Add New Reseller</Button>
                            </GridItem>
                            <GridItem span={6}>
                                <SearchInput
                                    placeholder='Search Reseller'
                                    onChange={this.onChange}
                                    onClear={() => this.onChange()}
                                />
                            </GridItem>
                            <GridItem span={12} style={{ marginTop: "20px", border:"1px solid lightgray" }}>
                               Reseller1
                               RS2
                               Reseller Group
                               Reseller copy new
                            </GridItem>
                        </Grid>
                </Modal>
            </React.Fragment>
        );
    }
}

export default ResellerModal;

