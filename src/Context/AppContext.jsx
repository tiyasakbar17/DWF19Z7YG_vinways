import React from 'react';
import Data from '../API/Data.json';
import Reducers from './Reducers'

export const AppContext = React.createContext();

export const AppContextProvider = (props) => {
    const [globalState, dispatch] = React.useReducer(Reducers, Data)

    return (
        <AppContext.Provider value={[globalState, dispatch]}>
            {props.children}
        </AppContext.Provider>
    )
}