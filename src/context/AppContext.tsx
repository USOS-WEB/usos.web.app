import { createContext, useContext } from "react"
import {SET_APP_TITLE} from './Actions'

export type AppContextState = {
    appTitle: string
    counter: number;
}

export const defaultAppContextState = {
    appTitle: 'USOS.WEB.APP',
    counter: 0
}


export function reducer(state: AppContextState, action: {type: string, payload: any }) {
    switch (action.type) {
      case SET_APP_TITLE :
        return {...state, appTitle: action.payload};

    case 'CHANGE_COUNTER':
        return {...state, counter: state.counter++}
      default:
        throw new Error();
    }
}

export const AppContext = createContext<{
    state: AppContextState;
    dispatch: React.Dispatch<any>;
  }>({
    state: defaultAppContextState,
    dispatch: () => null
  });

export const useAppContext = () => useContext(AppContext)
