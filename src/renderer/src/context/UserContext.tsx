import React, { createContext, useState, ReactNode } from 'react'

interface UserInfo {
  username: string
  id: number
  level: number
}

interface UserContextType {
  userInfo: UserInfo | null
  setUserInfo: (userInfo: UserInfo | null) => void
}

const initialUserContext: UserContextType = {
  userInfo: null,
  setUserInfo: () => {}
}

const UserContext = createContext<UserContextType>(initialUserContext)

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [userInfo, setUserInfo] = useState<UserInfo | null>(null)

  return <UserContext.Provider value={{ userInfo, setUserInfo }}>{children}</UserContext.Provider>
}

export { UserContext, UserProvider }
