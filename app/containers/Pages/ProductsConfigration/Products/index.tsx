import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import { hot } from 'react-hot-loader/root';

import NotFoundPage from '../../../NotFoundPage/Loadable';

import GlobalStyle from '../../../../global-styles';
import Header from '../../../../components/Header';
import PaginationTop from '../../../../components/Pagination'
import DataTable from '../../../../components/TableList'
import { connect } from 'react-redux';
import productModels from './../Models';
import getLabels from './../Locale';

const productHead =[
  { id: 'ID', code: 'Code', name: 'Product', select: 'Price Type' },
]

interface stateComponent{
  productItem: any,
  tableHead: any,
  content: any,
}
interface IProps {
 productList: any
}
class Products extends React.Component<IProps,stateComponent> {
  constructor(props) {
    super(props)
    this.state = {
      productItem: props.product,
      tableHead: productHead,
      content: getLabels(props.locale)
    };
  }
  componentDidUpdate() {
    this.props.productList();
  }
  render() {
    return (
      <div>
        <Header
          heading={this.state.content.heading}
          subTitle={this.state.content.subTitle}
          btnName={this.state.content.addProduct}
          data={this.state.productItem}
          />
        <PaginationTop />
        <DataTable
        data={this.state.productItem}
        head={this.state.tableHead}
        />
        <GlobalStyle />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    productList: () => dispatch(productModels.fetchList())
  }
}
const mapStateToProps = (state) => {
  return {
    product: state.product,
    locale: state.language.locale
  }
}
export default connect(mapStateToProps,mapDispatchToProps )(Products);
//export default Products;
