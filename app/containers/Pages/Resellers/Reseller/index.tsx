import React, { Component } from 'react';
import Header from '../../../../components/Header';
import PaginationTop from '../../../../components/Pagination';
import DataTable from '../../../../components/TableList';



interface statecomponent {
    ResellerInfo: any,
    tabHeader: any,

}
interface IProps {
    heading: string,
    subTitle: string,
    btnName: string,
}
const resellersHead = [
    { id: 1, name: "Reseller Name", refNo: "Reseller Code" },
]
const resellers = [
    { id: 1, name: "Some Reseller Name", refNo: "RS001" },
    { id: 2, name: "Some Name of a Reseller", refNo: "RS002" },
    { id: 3, name: "Some Reseller Name goes here", refNo: "RS003" },
]

class Reseller extends Component<IProps,statecomponent> {
    constructor(props) {
        super(props)
        this.state = {
            ResellerInfo: resellers,
            tabHeader: resellersHead
        }
    }
    render() {
        return (
            <React.Fragment>
                <Header
                    heading="Reseller"
                    subTitle="Make changes Reseller/ Resellers group here"
                    btnName="Add Reseller"
                    data=""
                />
                <PaginationTop />
                <DataTable
                    data={this.state.ResellerInfo}
                    head={this.state.tabHeader}
                />
            </React.Fragment>
        );
    }
}

export default Reseller;