import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { useLocalStorage } from '@/hooks/useLocalStorage'
import { Header, Modal, ShowDeck } from '@/layouts'
import { Deck, NewDeck } from '@/pages'
import { getTypes } from '@/services'
import { RootState, toggleModal } from '@/state';
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
          toggleModal({
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
            <Route path="*" element={<Deck />} />
            <Route path="/deck/new" element={<NewDeck />} />
          </Routes>
        </main>

        { show && <Modal /> }
        <ShowDeck />
      </section>

      <div className={`overlay ${show ? 'fade-in' : 'fade-out'}`}></div>
    </>
  )
}