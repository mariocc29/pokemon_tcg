import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react"

import { useLocalStorage } from "@/hooks";
import { Main as DeckMain } from "@/pages/Deck/Main/Main";
import { New } from "@/pages/Deck/New/New";
import './Main.styles.scss'

export const Main = () => {
  const { setItem } = useLocalStorage('types')

  useEffect(() => {
    setItem(['fire', 'grass', 'water', 'fairy'])
  }, [])
  
  return (
    <section className='wrapper'>
      <header>Este es el header</header>
      <main>
        <Routes>
          <Route path="/deck" element={<DeckMain />} />
          <Route path="/deck/new" element={<New />} />
          <Route path="*" element={<Navigate to="/deck" replace />} />
        </Routes>
      </main>
    </section>
  )
}
