import { createContext, useContext } from "react"
export type GlobalContent = {
  title: string
}
export const AppContext = createContext<GlobalContent>({
    title: 'Hello World'
})
export const useGlobalContext = () => useContext(AppContext)