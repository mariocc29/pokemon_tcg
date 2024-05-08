import { Routes, Route, Navigate } from "react-router-dom";
import { useEffect } from "react"
import { useSelector } from "react-redux";

import { useLocalStorage, usePokemonTypes } from "@/hooks";
import { Main as DeckMain, New } from "@/pages/Deck";
import { Header, Modal } from "@/shared";
import { RootState } from "@/state/store";
import './Main.styles.scss'

export const Main = () => {
  const { setItem } = useLocalStorage('types')
  const { fetch } = usePokemonTypes()
  const { show } = useSelector((state: RootState) => state.modal)

  useEffect(() => {
    fetch().then(data => {
      setItem(data)
    })
  }, [])
  
  return (
    <>
      <section className='wrapper'>
        
        <Header/>
        
        <main>
          <Routes>
            <Route path="/deck" element={<DeckMain />} />
            <Route path="/deck/new" element={<New />} />
            <Route path="*" element={<Navigate to="/deck" replace />} />
          </Routes>
        </main>

        { show && <Modal /> }
      </section>
      <div className={`overlay ${show ? 'fade-in' : 'fade-out'}`}></div>
    </>
  )
}
