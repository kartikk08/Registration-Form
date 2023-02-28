import React from 'react'
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state/index';

const Shop = () => {

    const balance = useSelector(state => state.amount)

    const dispatch = useDispatch();
    const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators, dispatch);
  return (
    <div>
    <h2> Deposit / Withdraw Money</h2>
     {/* <Button variant="warning mx-3" onClick={()=>{dispatch(actionCreators.depositMoney(100))}}>+</Button>{''}
     UPDATE BALANCE
    <Button variant="danger mx-3" onClick={()=>{dispatch(actionCreators.withdrawMoney(100))}}>-</Button>{' '} */}
    <Button variant="warning mx-3" onClick={()=>{depositMoney(100)}}>+</Button>{''}
      {balance}
    <Button variant="danger mx-3" onClick={()=>{withdrawMoney(100)}}>-</Button>{' '}
    </div>
  )
}

export default Shop