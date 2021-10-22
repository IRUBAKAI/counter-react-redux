import React from 'react';
import {useSelector, useDispatch} from 'react-redux'
import styles from './App.module.css'

function App() {
  const  counter  = useSelector((initialState) => initialState);
  const dispatch = useDispatch();
  return (
    <div className={styles.block}>
      <h1 className={styles.calc_value}>{counter}</h1>
      <div className={styles.block_btns}>
      <button onClick={()=> dispatch({ type: 'plus-one'})}>plus</button>
      <button onClick={()=> dispatch({ type: 'minus-one'})}>minus</button>
      <button onClick={()=> dispatch({ type: 'reset'})}>reset</button>
      </div>
    </div>
  );
}

export default App;
