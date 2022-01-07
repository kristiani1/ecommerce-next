import { createContext, useContext, useState, FC } from "react"

export interface StateModifiers {
    openSidebar: () => void
    closeSidebar: () => void
}

export interface StateValues {
    isSidebarOpen: boolean

}

const StateModifiers = {
    openSidebar: () => {},
    closeSidebar: () => {}
}

const initialState = { isSidebarOpen: false }

type State = StateValues & StateModifiers

const UIContext = createContext<State>({
    ...StateModifiers,
    ...initialState
})

export const UiProvider: FC = ({children}) => {

    const openSidebar = () => alert("opening")
    const closeSidebar = () => alert("closing")

    const value = {
        openSidebar,
        closeSidebar,
        isSidebarOpen: true
    }

    return(
        <UIContext.Provider value={value}>
            {children}
        </UIContext.Provider>
    )
}

export const useUI = () => {
    const context = useContext(UIContext)
    return context
}