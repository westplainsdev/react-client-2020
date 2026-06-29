import { createContext, useContext } from "react"

export interface AppUser {
  username: string
}

export interface AppAccount {
  accountId: string
}

export interface AppContextState {
  user: AppUser | null
  account: AppAccount | null
  authenticated: boolean
  backgroundUpdateData: number
  busy: boolean
}

export interface AppContextValue {
  context: AppContextState
  setBusy: (v: boolean) => void
  refresh: () => void
}

const appContext = createContext<AppContextValue | undefined>(undefined)

export const useAppContext = (): AppContextValue => {
  const value = useContext(appContext)
  if (!value) {
    throw new Error("useAppContext must be used within an AppProvider")
  }
  return value
}

export default appContext
