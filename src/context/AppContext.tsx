import { createContext, useContext } from 'react'
import { SET_APP_TITLE } from './Actions'

export type AppContextState = {
  appTitle: string
  qrData: string
}

export const defaultAppContextState = {
  appTitle: 'USOS - Uprzejmie Ssij OS',
  qrData: 'nodata',
}

export function reducer(state: AppContextState, action: { type: string; payload: any }) {
  switch (action.type) {
    case SET_APP_TITLE:
      return { ...state, appTitle: action.payload }
    case 'setQrData':
      return { ...state, qrData: action.payload }
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
