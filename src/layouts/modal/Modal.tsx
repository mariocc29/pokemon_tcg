import { useSelector } from 'react-redux'

import modalSuccess from '/@assets/images/modal-success.svg'
import modalAlert from '/@assets/images/modal-alert.svg'
import { RootState } from '/@state/store'
import { Button } from '/@shared/button/Button'
import './modal.scss'

export const Modal = () => {
  const modal = useSelector((state: RootState) => state.modal)

  return (
    <>
      <section className={`modal modal-${modal.status}`}>
        <article>
          { modal.status == 'success' && <img src={ modalSuccess } alt='Picachu Happy' /> }
          { modal.status == 'alert' && <img src={ modalAlert } alt='Picachu Sad' /> }
        </article>
        <article>
          { modal.message }
        </article>
        <article>
          <Button btnClass={`btn-${modal.status}`}>
            Catch it!
          </Button>
        </article>
      </section>
    </>
  )
}
