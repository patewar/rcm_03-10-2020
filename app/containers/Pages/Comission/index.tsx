import React, { Component } from 'react';
import Header from '../../../components/Header';
import PaginationTop from '../../../components/Pagination';
import DataTable from '../../../components/TableList';



const comissionHead =[
    { id: 1, name: 'Product Name', refNo:"Code", Reseller:"Rating Type" },
  ]
  const comission = [
    { id: 1, name: 'Some Product Name', refNo:"RS001", Reseller:"Fixed percentage" },
    { id: 2, name: 'Some name of a Product', refNo:"RS002", Reseller:"variable percentage" },
    { id: 3, name: 'Some Product Name goes here', refNo:"RS003", Reseller:"Fixed percentage" },
  ];

interface stateComponent{
    ComissionName: any,
    ComissionHead: any,
  }
  interface IProps {
  
  }
export default class Comission extends Component<IProps,stateComponent> {

    constructor(props){
        super(props)
        this.state={
             ComissionName:comission,
             ComissionHead:comissionHead,
        }
    }
    render() {
        return (
            <React.Fragment>
                <Header 
                heading="Comissions"
                subTitle="Make changes to Comissions here" 
                btnName="Add Comissions"
                data=""
                />
                <PaginationTop />
                <DataTable 
                data={this.state.ComissionName} 
                head={this.state.ComissionHead}
                />
            </React.Fragment>
        )
    }
}
