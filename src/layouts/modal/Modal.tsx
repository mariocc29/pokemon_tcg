import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

import modalSuccess from '/@assets/images/modal-success.svg'
import modalAlert from '/@assets/images/modal-alert.svg'
import { RootState, toggleModal } from '/@state'
import { Button } from '/@shared'
import './modal.scss'

export const Modal = () => {
  const modal = useSelector((state: RootState) => state.modal)
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleClick = () => {
    dispatch(
      toggleModal({
        show: false, 
        status: null, 
        message: null,
      })
    )

    if( modal.status === 'success' ) {
      navigate('/')
    }
  }

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
          <Button btnClass={`btn-${modal.status}`} onClick={handleClick}>
            Catch it!
          </Button>
        </article>
      </section>
    </>
  )
}
