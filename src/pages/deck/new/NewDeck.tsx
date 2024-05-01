import { Button } from '/@shared/button/Button'
import './new_deck.scss'

export const NewDeck = () => {
  const types = ['fire', 'grass', 'water'];

  return (
    <>
      <section className='form'>
        <main>
          <article className='row'>
            <div className='col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 title'>
              Create your deck of a given type:
            </div>
          </article>
          <article className='row'>
            <div className='col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
              <input type='text' placeholder='Input your name collection' />
            </div>
          </article>
          <article className='row'>
            <div className='col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3'>
              <div className='cards'>
                {
                  types.map(type => (
                    <div key={type}>{type}</div>
                  ))
                }
              </div>
            </div>
          </article>
        </main>

        <footer>
          <div className='row'>
            <div className='col-sm-12 col-md-8 offset-md-2 col-lg-6 offset-lg-3 align-center'>
              <Button>
                Gotta save 'em all!
              </Button>
            </div>
          </div>
        </footer>
      </section>
    </>
  )
}