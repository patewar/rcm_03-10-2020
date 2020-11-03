import productActionTypes from './../ActionTypes';
const fetchList = () => ({type: productActionTypes.LIST});
const addProduct = newItem => ({type: productActionTypes.ADD, payload: newItem});
const editProduct = item => ({type: productActionTypes.EDIT, payload: item });


const productModels = {
  fetchList: fetchList,
  addProduct: addProduct,
  editProduct: editProduct
};


export default productModels;
