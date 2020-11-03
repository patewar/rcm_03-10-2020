import React, { Component } from 'react';
import Header from '../../../../components/Header';
import PaginationTop from '../../../../components/Pagination';
import DataTable from '../../../../components/TableList';


interface statecomponent {
    EarnedCom: any,
    EarnedComHead: any,
}
interface IProps {
    heading: any,
    subTitle: any,
    btnName: any,
}
const earnedComissionHead = [
    { id: 1, name: "Reseller Name", refNo: "Transection ", Reseller: "Comission Amount" },
]
const earnedComi = [
    { id: 2, name: "some Reseller name", refNo: "RS0001", Reseller: "10.0000 USD" },
    { id: 3, name: "some name of a Reseller ", refNo: "RS0002", Reseller: "20.0000 USD" },
    { id: 4, name: "some Reseller name goes here", refNo: "RS0003", Reseller: "30.0000 USD" },
]

class EarnedComission extends Component<IProps,statecomponent> {
    constructor(props) {
        super(props)
        this.state = {
            EarnedCom: earnedComi,
            EarnedComHead: earnedComissionHead
        }
    }
    render() {
        return (
            <React.Fragment>
                <Header
                    heading="Earned Commissions"
                    subTitle="Make Changes to Earned Commissions/ Sales Transection here"
                    btnName="Add Comission"
                    data=""
                />
                <PaginationTop />
                <DataTable
                    data={this.state.EarnedCom}
                    head={this.state.EarnedComHead}
                />
            </React.Fragment>
        );
    }
}

export default EarnedComission;