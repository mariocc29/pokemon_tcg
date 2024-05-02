import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import back from '@/assets/images/back.svg'
import { DeckData, CardsDeckData } from '@/interfaces/deck_data';
import { RootState, toggleDeck } from '@/state'
import './show_deck.scss'

export const ShowDeck = () => {
  const [localDeck, setLocalDeck] = useState<DeckData | null>(null);
  const { deck } = useSelector((state: RootState) => state.deck)
  const dispatch = useDispatch();
  
  const handleClick = () => {
    dispatch(toggleDeck(null))
  }

  useEffect(() => {
    if (deck !== null) {
      setLocalDeck(deck)
    }
  }, [deck]);
  
  return (
    <>
      <section className={`wrapper-deck wrapper-deck-${localDeck?.category} ${deck ? 'swipe-in' : 'swipe-out'}`}>
        <header>
          <div className='back'>
            <img src={ back } alt='Go Home!' onClick={handleClick}/>
          </div>
        </header>
        <main>
          <article className='info-card'>
            <div className='title'>{localDeck?.label}</div>
            <span className='caption'>{localDeck?.category}</span>
          </article>
          <article className='list-cards'>
            {
              localDeck?.cards.map((card:CardsDeckData) => (
                <div key={card.id}>
                  <img src={card.image} alt={card.name} />
                </div>
              ))
            }
          </article>
        </main>
      </section>
    </>
  )
}
