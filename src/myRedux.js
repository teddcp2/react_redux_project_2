import {createStore, combineReducers} from 'redux';

// Actions

const createClaim = (name, amount) => ({
  type: 'CREATE_CLAIM',
  payload:{name, amount}
})

const createPolicy = (name, amount) => ({
  type: 'CREATE_POLICY',
  payload : {name, amount}
})

const deletePolicy = (name) => ({
  type : 'DELETE_POLICY',
  payload: {name}
})


// Reducers

const accountingDepartment = (totalAmount = 10000, action) => {
  let amount= 0
  switch(action.type) {
    case 'CREATE_CLAIM' :
      amount=  totalAmount - action.payload.amount ;
      break;
  
    case 'CREATE_POLICY' :
      amount=  totalAmount + action.payload.amount ;
      break;

    default :
      amount= totalAmount
      break
  }
  // console.log('amount', amount)
  return amount
}

const claimDepartment = (claims = [], action) => {
  let newClaims= []

  switch(action.type) {
    case 'CREATE_CLAIM' :
      newClaims = [ ...claims, action.payload]
      break;

    default :
      newClaims= claims
      break
  }

  return newClaims
}

const policyDepartment = (policies =[], action) => {
  let newPolicies = []

  switch(action.type){
    case 'CREATE_POLICY' :
      newPolicies= [...policies, action.payload.name]
      break ;
    
    case 'DELETE_POLICY' :
      newPolicies = policies.filter(policy => policy !== action.payload.name)
      break
    
    default :
      newPolicies = policies
      break
  }
  return newPolicies
}

const rootReducers = combineReducers({
  accounting : accountingDepartment,
  claims : claimDepartment,
  policies: policyDepartment
})

let store = createStore(rootReducers); 

// dispatching an action
store.dispatch( createPolicy('ddd', 100))
store.dispatch( createPolicy('222', 200))
store.dispatch( createPolicy('fff', 300))

// viewing the current state
console.log(store.getState())

// Claiming an policy
store.dispatch(createClaim('fff',200))
store.dispatch(createClaim('222',100))
console.log(store.getState())

// deleting an policy
store.dispatch(deletePolicy('fff'))
store.dispatch(deletePolicy('222'))
console.log(store.getState())

/*
RESULTS

{accounting: 10300, claims: Array(2), policies: Array(1)}

  accounting: 10300

  claims: Array(2)
      0: {name: "fff", amount: 200}
      1: {name: "222", amount: 100}
      length: 2

  policies: Array(1)
    0: "ddd"


*/