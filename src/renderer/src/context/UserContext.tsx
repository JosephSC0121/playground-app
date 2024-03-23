import React, { createContext, useState, ReactNode } from 'react'

interface User {
  id: number
  nombres: string
  apellidos: string
  aboutme: string
  username: string
  email : string
  level: number
}

interface UserContextType {
  user: User | null
  setUser: (user: User) => void
}

const initialUserContext: UserContextType = {
  user: null,
  setUser: () => {}
}

const UserContext = createContext<UserContextType>(initialUserContext)

const UserProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<User | null>(null)

  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}

export { UserContext, UserProvider }
