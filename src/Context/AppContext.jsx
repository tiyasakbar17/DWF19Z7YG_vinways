import React from 'react';
import Data from '../API/Data.json';
import DataFixed from '../API/DataFixed.json';
import Reducers from './Reducers'

export const AppContext = React.createContext();
console.log("LOAD CONTEXT");

export const AppContextProvider = (props) => {
    const [globalState, dispatch] = React.useReducer(Reducers, DataFixed);
    return (
        <AppContext.Provider value={[globalState, dispatch]}>
            {props.children}
        </AppContext.Provider>
    )
}