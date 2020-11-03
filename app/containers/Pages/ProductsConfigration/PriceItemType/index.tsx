import React, { Component } from 'react';
import Header from '../../../../components/Header';
import PaginationTop from '../../../../components/Pagination';
import DataTable from '../../../../components/TableList';


interface stateComponent {
    PriceItem: any,
    Header: any,
}
interface IProps {

}
const priceItemHeader = [
    { id: 1, name: "Price Item Type" },
]
const priceItem = [
    { id: 1, name: "Net Price" },
    { id: 1, name: "Gross Amount" },
    { id: 1, name: "Net Amount" },
]
class PriceItemType extends Component<IProps, stateComponent>{
    constructor(props) {
        super(props)
        this.state = {
            PriceItem: priceItem,
            Header: priceItemHeader,
        }
    }
    render() {
        return (
            <React.Fragment>
                <Header
                    heading="Price Item Types"
                    subTitle="Make changes to Price Item Types here"
                    btnName="Add Price Item"
                    data=""
                />
                <PaginationTop />
                <DataTable
                    data={priceItem}
                    head={priceItemHeader}
                />
            </React.Fragment>
        );
    }
}

export default PriceItemType;