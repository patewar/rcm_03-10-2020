import React from 'react';
import './TableStyle.css';

interface statecomponent {
  newData: any
}
interface IProps {
  data: any,
  keys: any,
}
class RenderRow extends React.Component<IProps, statecomponent> {

  constructor(props) {
    super(props);
  }
  
  render() {
      return this.props.keys.map((item, index)=>{
        if(index === 0)
          return (<td key={'cell-'+index}><input type="checkbox" /> {this.props.data[item]}</td>)
        else
          return <td key={'cell-'+index}>{this.props.data[item]}</td>
      })
    }

};

export default RenderRow;
