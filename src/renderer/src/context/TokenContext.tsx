import React, { createContext, useState, ReactNode } from 'react'

interface TokenInfo {
  access_token: string
  token_type: string
}

interface TokenContextType {
  tokenInfo: TokenInfo | null
  setTokenInfo: (token: TokenInfo) => void
}

const initialTokenContext: TokenContextType = {
  tokenInfo: null,
  setTokenInfo: () => {}
}

const TokenContext = createContext<TokenContextType>(initialTokenContext)

const TokenProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [tokenInfo, setTokenInfo] = useState<TokenInfo | null>(null)
  return (
    <TokenContext.Provider value={{ tokenInfo, setTokenInfo }}>{children}</TokenContext.Provider>
  )
}

export { TokenContext, TokenProvider }
