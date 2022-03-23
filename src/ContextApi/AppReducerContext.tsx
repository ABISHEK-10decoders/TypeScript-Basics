import React, { useContext } from "react";
import { InputProvider } from "./ContextApi";



export const AppReducerContext = () => {
  const { state, dispatch } = useContext(InputProvider);
  console.log(state)

  return (
    <div>
      { state ?  <p> {state.inputValue}</p> : null}
      <button onClick={()=>dispatch({ type: 'SET_INCREMENT'})}> Change Value</button>
    </div >
  )
}


