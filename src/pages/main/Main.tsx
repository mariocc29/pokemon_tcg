import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { useLocalStorage } from '/@hooks/useLocalStorage'
import { Header } from '/@layouts/header/Header'
import { Modal } from '/@layouts/modal/Modal'
import { Deck } from '/@pages/deck/Deck'
import { NewDeck } from '/@pages/deck/new/NewDeck'
import { getTypes } from '/@services/typesService';
import { RootState } from '/@state/store'
import './main.scss'

export const Main = () => {
  const { setItem } = useLocalStorage('types')
  const { show } = useSelector((state: RootState) => state.modal)

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const data = await getTypes();
        setItem(data)
      } catch (error) {
        console.error('Error fetching types:', error);
      }
    };

    fetchTypes();
  }, [])

  return (
    <>
      <section className='wrapper'>
        
        <Header />
        
        <main>
          <Routes>
            <Route path="/" element={<Deck />} />
            <Route path="/deck" element={<NewDeck />} />
          </Routes>
        </main>

        <Modal />
      </section>

      <div className={`overlay ${show ? 'fade-in' : 'fade-out'}`}></div>
    </>
  )
}