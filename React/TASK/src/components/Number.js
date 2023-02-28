import React from 'react'
import Button from 'react-bootstrap/Button';
import { bindActionCreators } from 'redux';
import { actionCreators } from '../state';
import { useDispatch, useSelector } from 'react-redux';

const Number = () => {
const dispatch = useDispatch(); 
const {increment, decrement} = bindActionCreators(actionCreators,dispatch)
const numbers = useSelector(state => state.number)

  return (
    <div>
    
    <h2> Increment/Decrement</h2>

    <Button variant="warning mx-5" onClick={()=>{increment(5)}}>+</Button>{''}
     {numbers}
    <Button variant="danger mx-5" onClick={()=>{decrement(5)}} >-</Button>{' '}
    
    
    </div>


   
  )
}

export default Number