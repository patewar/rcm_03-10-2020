import React from 'react';
import ProductModal from '../Modals/EditModal/ProductModal';
import ResellerModal from '../Modals/EditModal/ResellerModal';
import './TableStyle.css';
import RenderRow from './RenderRow';

interface statecomponent {
  isModalOpen: boolean,
  productItem: any,
  newData: any
}
interface IProps {
  data: any,
  head: any,
}
class DataTable extends React.Component<IProps, statecomponent> {
  constructor(props) {
    super(props);
    this.state = {
      isModalOpen: false,
      productItem: "",
      newData: ""
    };
  }

  handleEdit = (item) => {
    this.setState({
      isModalOpen: true,
      productItem: item
    });
  };
  handleModalClose = isshowModal => {
    this.setState({
      isModalOpen: isshowModal,
    });
  };
  handleDelete = index => {
    let newData = this.props.data;
    newData = newData.splice(index, 1);
    this.setState({ newData });
    // newData = newData.filter(i=>i.id !== index.id)
  };
  render() {

    return (
      <React.Fragment>
        { this.state.productItem &&
        <ProductModal
          showModal={this.state.isModalOpen}
          item={this.state.productItem}
          handleModalClose={this.handleModalClose}
        />
        }
        <ResellerModal
          showModal={false}
          handleModalClose={this.handleModalClose}
        />

        <div className="table_style">
          <table className="table table-striped">
            <thead >
             <tr>
              {Object.keys(this.props.head[0]).map((header,i) => {
                  return (<th key={'head-'+i} >{this.props.head[0][header]}</th>)
                })
              }
              <td></td>
              </tr>
            </thead>
            <tbody>
              {this.props.data.map((row, i) => {
                let keys = Object.keys(row);
                return (
                  <tr key={i}>
                    <RenderRow key={'row-'+i} data={row} keys={keys}/>
                    <td style={{ float: "right" }}>
                      <button onClick={() => this.handleEdit(row)} style={ButtonStyel}>
                        <span className="fas fa-edit"></span>
                      </button>
                      <button onClick={() => this.handleDelete(row)} style={ButtonStyel}>
                        <span className="far fa-trash-alt"></span>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </React.Fragment>
    );
  }
}
const ButtonStyel ={
  border:"none",
  background:"none",
  marginTop:"auto"
}
export default DataTable;
