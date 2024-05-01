import { Route, Routes } from 'react-router-dom'

import { Header } from '/@layouts/header/Header'
import { Deck } from '/@pages/deck/Deck'
import { NewDeck } from '/@pages/deck/new/NewDeck'
import './main.scss'

export const Main = () => {
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
      </section>
    </>
  )
}