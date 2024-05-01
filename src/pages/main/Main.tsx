import pokemonLogo from '/logo.svg'
import pokeball from '/pokeball.svg'
import './main.scss'

import { DeckEmptyState } from '../../components/deck/empty_state/DeckEmptyState'

export const Main = () => {
  return (
    <>
      <section className='wrapper'>
        
        <header>
          <div className='pokeball'>
            <img src={ pokeball } />
          </div>
          <div className='brand'>
            <img src={ pokemonLogo } />
          </div>
        </header>
        
        <main>
          <DeckEmptyState />
        </main>
      </section>
    </>
  )
}