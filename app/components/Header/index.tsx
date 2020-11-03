import React from 'react';
import { Grid, GridItem } from '@patternfly/react-core';
import { SearchInput, Button } from '@patternfly/react-core';
import { Link } from 'react-router-dom'
import { P, H2, H6, Div } from './styles/HeaderStyle'



interface statecomponent {
    value: any,
    newItem: any,
}
interface IProps {
    btnName: string,
    heading: string,
    subTitle: string,
    data: any,
}

class Header extends React.Component<IProps, statecomponent>{
    
    constructor(props) {
        super(props);
        this.state = {
            value: '',
            newItem:[],
        };
    }

    handleChange = (value, event) => {
        this.setState({
            value: value
        });
        console.log(this.state.value)
    };

    handleAddProduct = () => {

    }

    handleDeleteProduct = (index) => {
        let newItem = this.props.data.splice(index, 1)
         this.setState({newItem})
        console.log(newItem)
        
    }
    render() {
        console.log(this.props.data)
        return (
            <>
                <Grid style={{marginTop:"15px"}}>
                    <GridItem span={6}>
                        <H2>{this.props.heading}</H2>
                        <H6>{this.props.subTitle}</H6>
                    </GridItem>
                    <GridItem span={3}>
                        <P>
                            <SearchInput
                                placeholder='Search here'
                                value={this.state.value}
                                onChange={this.handleChange}
                                onClear={(evt) => this.handleChange('', evt)}
                            />
                        </P>
                    </GridItem>
                    <GridItem span={3}>
                        <Div>
                            <Button variant="secondary" style={{ borderRadius: '5px' }} >
                                <Link to="/product-configration/add"
                                    style={{ textDecoration: "none" }}
                                >{this.props.btnName}</Link>
                            </Button>
                            <Button variant="danger" style={{ margin: '10px', borderRadius: '5px' }}
                                onClick={()=>this.handleDeleteProduct(this.props.data)}
                            >Delete</Button>
                        </Div>
                    </GridItem>
                </Grid>
            </>
        );
    }
}

export default Header;
