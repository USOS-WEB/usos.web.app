import { createContext, useContext } from 'react'
import { SET_APP_TITLE } from './Actions'
import { MapResponse } from '../types'

export type AppContextState = {
  appTitle: string
  qrData: string
  mapResponseData: MapResponse | null
  currentChosenFloor: string
}

export const defaultAppContextState = {
  appTitle: 'USOS - Uprzejmie Ssij OS',
  qrData: 'No data',
  mapResponseData: null,
  currentChosenFloor: ''
}

export function reducer(state: AppContextState, action: { type: string; payload: any }) {
  console.log(action);
  switch (action.type) {
    case SET_APP_TITLE:
      return { ...state, appTitle: action.payload }
    case 'setQrData':
      return { ...state, qrData: action.payload }
    case 'CHANGE_MAP_RESPONSE_DATA':
        return {...state, mapResponseData: action.payload }
    case 'CHANGE_CURRENT_CHOSEN_FLOOR':
        return { ...state, currentChosenFloor: action.payload}
    default:
      throw new Error()
  }
}

export const AppContext = createContext<{
  state: AppContextState
  dispatch: React.Dispatch<any>
}>({
  state: defaultAppContextState,
  dispatch: () => null,
})

export const useAppContext = () => useContext(AppContext)
