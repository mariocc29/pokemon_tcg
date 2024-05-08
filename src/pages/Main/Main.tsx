import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react"

import { useLocalStorage, usePokemonTypes } from "@/hooks";
import { Main as DeckMain } from "@/pages/Deck/Main/Main";
import { New } from "@/pages/Deck/New/New";
import './Main.styles.scss'

export const Main = () => {
  const { setItem } = useLocalStorage('types')
  const { getTypes } = usePokemonTypes()

  useEffect(() => {
    getTypes().then(data => {
      setItem(data)
    })
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
