"use client"

import { createContext, useContext, useState, ReactNode, useEffect } from "react"

type HeaderContent = ReactNode | null
type HeaderContextType = {
  setExtraHeader: (content: HeaderContent) => void
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined)

export function useHeader() {
  const ctx = useContext(HeaderContext)
  if (!ctx) throw new Error("useHeader must be used inside HeaderProvider")
  return ctx
}

export function HeaderProvider({ children }: { children: ReactNode }) {
  const [extraHeader, setExtraHeader] = useState<HeaderContent>(null)

  return (
    <HeaderContext.Provider value={{ setExtraHeader }}>
      <Header extra={extraHeader} />
      {children}
    </HeaderContext.Provider>
  )
}

function Header({ extra }: { extra: ReactNode }) {
  return (
    <header className="bg-blue-300 ">
      <div className="max-w-7xl mx-auto flex justify-between p-4 text-neutral-950">
        <div>🌐 Feat beaver grill</div>
        <div>{extra}</div>
      </div>
    </header>
  )
}