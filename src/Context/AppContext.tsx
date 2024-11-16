import React, {createContext, useReducer, ReactNode, Dispatch, Children} from "react";

// initial states prop types
interface StateType {
    counter: number,
    message: string
}

//inital state
const initialState: StateType = {
    counter: 0,
    message: 'Hello Context API Doc'
}

// Action Types
type ActionType = |
{type: 'INCREMENT'}|
{type: 'DECREMENT'}|
{type: 'RESET'}|
{type: 'UPDATE_MESSAGE';payload: string}
;

// reducer function
const reducer = (state: StateType, action:ActionType):StateType=>{
    switch(action.type){
        case 'INCREMENT': return {...state, counter: state.counter + 1};
        case 'DECREMENT': return {...state, counter: state.counter - 1};
        case 'RESET': return {...state, counter: 0};
        case 'UPDATE_MESSAGE': return {...state, message: action.payload};
        default: return state;
    }
};

//  create context
interface ContextProps {
    state: StateType,
    dispatch: Dispatch<ActionType>
}

export const AppContext = createContext<ContextProps>({
    state: initialState,
    dispatch: ()=> undefined
});

// provider component
interface AppProviderProps {
    children: ReactNode
}

export const AppProvider: React.FC<AppProviderProps> = ({children})=>{
    const [state,dispatch] = useReducer(reducer, initialState)
    return(
        <AppContext.Provider value={{state, dispatch}}>
            {children}
        </AppContext.Provider>
    )
}