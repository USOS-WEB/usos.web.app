import { createContext, useContext } from "react"
export type AppContextProps = {
  appTitle: string
}
export const AppContext = createContext<AppContextProps>({
    appTitle: 'Hello World'
})
export const useAppContext = () => useContext(AppContext)