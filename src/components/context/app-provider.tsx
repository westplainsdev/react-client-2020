import {useState, useEffect, type ReactNode} from "react"
import appContext, {type AppContextState} from "./app-context"

interface AppProviderProps {
  children: ReactNode
}

const AppProvider = ({children}: AppProviderProps) => {
  const [user, setUser] = useState<AppContextState["user"]>(null)
  const [account, setAccount] = useState<AppContextState["account"]>(null)
  const [authenticated, setAuthenticated] = useState(false)
  const [backgroundUpdateData, setBackgroundUpdateData] = useState(0)
  const [busy, setBusy] = useState(false)


  useEffect(() => {
    const intervalId = setInterval(() => {
      const updated = Math.round(Math.random() * 100)
      setBackgroundUpdateData(updated)
      console.log(`AppContext.Provider: interval, data changed to: ${updated}`)
    }, 5000)

    //disposal cleanup
    return () => {
      console.log("AppContext.Provider: cleanup")
      clearInterval(intervalId)
    }
  }, [])
  return (
    <appContext.Provider value={{
      context: {user, account, authenticated, backgroundUpdateData, busy}
      ,setBusy: (v) => {setBusy(v)}
      ,refresh: () => {
        //do the refresh work..
        setBusy(true)
        setTimeout(() => {
          console.log("AppContext.Provider: manual refresh")
          setBusy(false)
          setUser({username: "fred"})
          setAccount({accountId: "123F"})
          setAuthenticated(true)
        }, 1000)
      }
      ,signOut: () => {
        console.log("AppContext.Provider: sign out")
        setUser(null)
        setAccount(null)
        setAuthenticated(false)
      }
    }}>
      {children}
    </appContext.Provider>
  )
}

export default AppProvider
