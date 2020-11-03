import productActionTypes from './ActionTypes';
export const initialState: any = [
  { id:1, code: 1, name: 'product1', select:'GrossAmount' },
  { id:2, code: 2, name: 'product2', select:'GrossAmount' },
  { id:3, code: 3, name: 'product3', select:'GrossAmount' },
];

function ProductListReducer(
  state: any = initialState,
  action: any,
): any {
  switch (action.type) {
    case productActionTypes.LIST:
      return state;
    case productActionTypes.ADD: {
      let newItem = { id: state.length+1, ...action.payload };
       return [...state, newItem]
    }
    case productActionTypes.EDIT: {
      console.log('edit reducer');
      console.log(state);
      let foundIndex = state.findIndex(x => x.id == action.payload.id);
      state[foundIndex] = action.payload;
      return state;
    }
    default:
      return state;
  }
}
export default ProductListReducer;
