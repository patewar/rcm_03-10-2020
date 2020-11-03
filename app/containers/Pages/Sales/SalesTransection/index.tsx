import React, { Component } from 'react'
import PaginationTop from '../../../../components/Pagination'
import DataTable from '../../../../components/TableList'
import Header from '../../../../components/Header'


interface statecomponent{
    SalesData: any,
    tableHead: any,
}
interface IProps{
    heading: any,
    subTitle: any,
    btnName: any,
}
const salesHead =[
    {id:1, name:"Product", refNo:"Reference Number", Reseller:"Reseller"},
]
const salesData =[
    {id:2, name:"some product name", refNo:"RS0001", Reseller:"Reseller1(RS0001)"},
    {id:3, name:"some name of a product ", refNo:"RS0002", Reseller:"Reseller2(RS0002)"},
    {id:4, name:"some product name goes here", refNo:"RS0003", Reseller:"Reseller3(RS0003)"},
]
export default class Sales extends Component<IProps,statecomponent> {
    constructor(props){
        super(props)
        this.state={
           SalesData:salesData,
           tableHead:salesHead
        }
    }
    render() {
        return (
            <React.Fragment>
                <Header 
                heading="Sales Transactions"
                subTitle="Make Changes to Sales Transactions here"
                btnName="Add Sales"
                data=""
                />
               <PaginationTop />
               <DataTable 
                data={this.state.SalesData}
                head={this.state.tableHead}
               />
            </React.Fragment>
        )
    }
}
