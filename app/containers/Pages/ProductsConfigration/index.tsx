import React, { Component } from 'react';
import Products from './Products';

class ProductConfigration extends Component {
    render() {
        return (
            <div>
                <Products />
            </div>
        );
    }
}

export default ProductConfigration;










// import React, { Component } from 'react';
// import { Grid, GridItem } from '@patternfly/react-core';
// import { Link } from 'react-router-dom'
// import { Div, Button } from './ProductStyle'
// import Header from './Header'

// const product = [
//     { id: 1, name: "product" },
//     { id: 1, name: "product" },
// ]
// const baseURL = window.location.pathname;


// export default class ProductConfigration extends Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             checkItem: "",
//         }
//     }
//     handelAddProduct = () => {

//     }
//     handleCheckBox = (e) => {
//         this.setState({ checkItem: e.target.value })
//     }


//     render() {
//         return (
//             <React.Fragment>
//                 <Header />
//                 <Div>
//                     <div>
//                         <Grid>
//                             <GridItem span={10}>
//                                 <h2>Select Product to change</h2>
//                             </GridItem>
//                             <GridItem span={2}>
//                                 <Button>
//                                     <Link to="/product-configration/add"
//                                         style={{ textDecoration: "none" }}
//                                     >Add Product</Link>
//                                 </Button>
//                             </GridItem>
//                         </Grid>
//                     </div>
//                     <div>
//                         <table className="table">
//                             <thead>
//                                 <tr>
//                                     <th><input type="checkbox" onChange={this.handleCheckBox} /></th>
//                                     <th>Product</th>
//                                 </tr>
//                             </thead>
//                             <tbody>
//                                 {
//                                     product.map((item, i) => {
//                                         return (
//                                             <tr key={i}>
//                                                 <td><input type="checkbox" /></td>
//                                                 <td>{item.name}</td>
//                                             </tr>
//                                         )
//                                     })
//                                 }
//                             </tbody>
//                         </table>
//                     </div>
//                 </Div>
//             </React.Fragment>
//         )
//     }
// }
