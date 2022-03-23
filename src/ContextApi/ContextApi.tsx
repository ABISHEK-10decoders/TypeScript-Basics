import React, { createContext, useReducer } from "react";

const initialState = {
    inputValue: 0,
};
type StateApp = typeof initialState;
type Action = { type: "INCREMENT"; payload: number } 
| { type: "SET_INCREMENT"; };
interface InputProviderProps {
    children : React.ReactNode;
}

const reducer = (state :StateApp , action :Action  ) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                ...state,
                inputValue: action.payload,

            }
        case 'SET_INCREMENT':
            return {
                ...state,
                inputValue: 100,

            }

        default: {
            return state
        }

    }
};

const InputProvider = createContext <{
    state: StateApp;
    dispatch : React.Dispatch<Action>
}>({state : initialState , dispatch :()=>{}});

const InputValueProvider = ({ children} :InputProviderProps ) => {
    const [state, dispatch] = useReducer(reducer, initialState);
    return (
        <InputProvider.Provider value={{ state, dispatch}}> {children}</InputProvider.Provider>
    )
}
export { InputProvider, InputValueProvider };
