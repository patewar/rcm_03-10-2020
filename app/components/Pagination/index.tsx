import React from 'react';
import {Div} from './PeginationStyle'
import { Pagination, PaginationVariant } from "@patternfly/react-core";

interface componnetState{
    page: any,
    perPage: any
}
class PaginationTop extends React.Component <{},componnetState>{
  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      perPage: 20
    };
  }
      onSetPage = (_event, pageNumber) => {
        this.setState({
          page: pageNumber
        });
      };
  
      onPerPageSelect = (_event, perPage) => {
        this.setState({
          perPage
        });
      };

  render() {
    return (
     <Div>
        <Pagination
        itemCount={523}
        perPage={this.state.perPage}
        page={this.state.page}
        onSetPage={this.onSetPage}
        widgetId="pagination-options-menu-top"
        onPerPageSelect={this.onPerPageSelect}
      />
     </Div>
    );
  }
}
export default PaginationTop;