//reducer.js
let deleteCompany = (state, action) => {
 let index = state.companies.findIndex(company => company.id === action.payload);
 state.companies.splice(index, 1);
 return { ...state };
};

let addCompany = (state, action) => {
 let placeHolder = JSON.parse(localStorage.getItem('placeHolder'));
 state.companies.push(placeHolder);
 return { ...state };
};

export let reducer = (state, action) => {
 switch (action.type) {
  case 'delete':
   return deleteCompany(state, action);
  case 'add':
   return addCompany(state, action);
  default:
   return state;
 }
};