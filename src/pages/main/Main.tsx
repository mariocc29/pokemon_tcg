import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { useLocalStorage } from '/@hooks/useLocalStorage'
import { Header } from '/@layouts/header/Header'
import { Modal } from '/@layouts/modal/Modal'
import { Deck } from '/@pages/deck/Deck'
import { NewDeck } from '/@pages/deck/new/NewDeck'
import { getTypes } from '/@services/typesService';
import { RootState } from '/@state/store'
import { toggle } from '/@state/modal/modalSlice';
import './main.scss'

export const Main = () => {
  const { setItem } = useLocalStorage('types')
  const { show } = useSelector((state: RootState) => state.modal)
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const data = await getTypes();
        setItem(data)
      } catch (_) {
        dispatch(
          toggle({
            show: true, 
            status: 'alert', 
            message: 'Error fetching types',
          })
        )
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

        { show && <Modal /> }
      </section>

      <div className={`overlay ${show ? 'fade-in' : 'fade-out'}`}></div>
    </>
  )
}