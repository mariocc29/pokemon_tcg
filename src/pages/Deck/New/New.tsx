import { useForm } from 'react-hook-form';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { Button } from '@/atoms';
import { Types } from '@/organisms';
import { usePokemonDecks } from '@/hooks';
import { toggleModal } from '@/state';
import './New.styles.scss';

export const New = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  const { create } = usePokemonDecks()
  const dispatch = useDispatch();
  
  const handleTypeClick = (type: string) => {
    setValue("selectedType", type);
  };

  const onSubmit = (data: any) => {
    create({
      label: data.collectionName,
      category: data.selectedType
    }).then(() => {
      dispatch(
        toggleModal({
          show: true, 
          status: 'success', 
          message: 'Your deck was created successfully',
        })
      )
    }).catch(() => {
      dispatch(
        toggleModal({
          show: true, 
          status: 'alert', 
          message: 'Something went wrong, please try again',
        })
      )
    })
  };

  useEffect(() => {
    register("selectedType", { required: true });
  }, [register]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section>
        <header className='row'>
          <div className='col-sm-12 col-md-8 offset-md-2 title'>
            Create your deck of a given type:
          </div>
        </header>
        <main>
          <article className='row'>
            <div className='col-sm-12 col-md-8 offset-md-2'>
              <span className='bold'>Write the name of the deck you want to create and start your adventure.</span>
              {errors.collectionName && <span className='caption error'>&nbsp;This field is required</span>}
            </div>
          </article>
          <article className='row'>
            <div className='col-sm-12 col-md-8 offset-md-2'>
              <input 
                type='text' 
                placeholder='Input your name collection'
                {...register("collectionName", { required: true })}
              />
            </div>
          </article>
          <article className='row'>
            <div className='col-sm-12 col-md-8 offset-md-2'>
              <span className='bold'>Each type of Pokémon has its own charm and strategy. What will yours be?</span>
              {errors.selectedType && <span className='caption error'>&nbsp;This field is required</span>}
            </div>
          </article>
          <article className='row'>
            <Types onClick={handleTypeClick} />
          </article>
        </main>

        <footer>
          <div className='row'>
            <div className='col-sm-12 col-md-8 offset-md-2 align-center'>
              <Button>Gotta save 'em all!</Button>
            </div>
          </div>
        </footer>
      </section>
    </form>
  );
};
