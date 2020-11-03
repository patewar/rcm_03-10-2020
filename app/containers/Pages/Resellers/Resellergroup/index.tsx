import React, { Component } from 'react'
import PaginationTop from '../../../../components/Pagination'
import DataTable from '../../../../components/TableList'
import Header from '../../../../components/Header'

interface statecomponent {
    Resellerinfo: any,
    TableHead: any,

}
interface IProps{
    heading: string,
    subTitle: string,
    btnName: string,
}
const resellerGroupHead =[
    { id: 1, name: "Product" },
]
const resellerGroup = [
    { id: 1, name: "Reseller zone 1" },
    { id: 1, name: "Reseller zone 2" },
]
export default class ResellerGroup extends Component<IProps, statecomponent> {
    constructor(props) {
        super(props)
        this.state = {
            Resellerinfo: resellerGroup,
            TableHead: resellerGroupHead
        }
    }
    render() {
        return (
            <React.Fragment>
                <Header
                    heading="Reseller Groups"
                    subTitle="Make changes Reseller/ Reseller Group here"
                    btnName="Add Reseller"
                    data=""
                />
                <PaginationTop />
                <DataTable 
                data={this.state.Resellerinfo} 
                head={this.state.TableHead} />
            </React.Fragment>
        )
    }
}
