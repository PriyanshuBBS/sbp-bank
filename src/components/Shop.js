import React from 'react'
import { useDispatch } from 'react-redux'
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

const Shop = () => {
  const dispatch = useDispatch();
  // const actions = bindActionCreators(actionCreators,dispatch);
  // extracting the withdraw money and deposit money
  const {withdrawMoney,depositMoney} = bindActionCreators(actionCreators,dispatch);


  return (
    <div>
        <h2>Deposit/Withdraw Money</h2>
        {/* <button className='btn btn-primary mx-2' onClickCapture={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</button> */}
        {/* <button className='btn btn-primary mx-2' onClickCapture={()=>{actions.withdrawMoney(100)}}>-</button> */}
        <button className='btn btn-primary mx-2' onClickCapture={()=>{withdrawMoney(100)}}>-</button>
        Update Balance
        <button className='btn btn-primary mx-2' onClickCapture={()=>{depositMoney(100)}}>+</button>
    </div>
  )
}

export default Shop