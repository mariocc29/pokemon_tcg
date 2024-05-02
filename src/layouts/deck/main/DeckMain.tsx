import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { useLocalStorage } from '/@hooks/useLocalStorage'
import DeckData from "/@interfaces/deck_data";
import { Button } from '/@shared/button/Button'
import { CardDeck } from '/@shared/card_deck/CardDeck';
import './deck_main.scss'

interface DeckMainProps{
  decks: DeckData[]
}

export const DeckMain: React.FC<DeckMainProps> = ({ decks }) => {
  const [types, setTypes] = useState<Array<string>>([]);
  const { getItem } = useLocalStorage('types')
  const navigate = useNavigate();
  
  const handleNewClick = () => navigate('/deck');

  useEffect(() => {
    setTypes(
      getItem().map((type: string) => {
        return type.charAt(0).toUpperCase() + type.slice(1);
      })
    )
  }, []);

  return (
    <>
      <section className="decks">
        <header className="title">
          Decks:
        </header>
        <main>
          <article className='select'>
            <select>
                <option>Show all</option>
                {
                  types.map(type => (
                    <option key={type}>{type}</option>
                  ))
                }
            </select>
            <div className="select-arrow"></div>
          </article>
          <article className="card-decks">
            { decks.map(deck => <CardDeck key={deck.id} deck={deck}/>) }
          </article>
        </main>
        <footer className='align-center'>
          <Button onClick={handleNewClick}>
            Forge a new PokeDeck
          </Button>
        </footer>
      </section>
    </>
  )
}
