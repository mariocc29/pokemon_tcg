import { useForm } from 'react-hook-form';

import { Types } from '@/organisms';
import { Button } from '@/atoms';
import './New.styles.scss';
import { useEffect } from 'react';

export const New = () => {
  const { register, handleSubmit, setValue, formState: { errors } } = useForm();
  
  const handleTypeClick = (type: string) => {
    setValue("selectedType", type);
  };

  const onSubmit = (data: any) => {
    console.log("Errores:", errors);
    console.log(data.collectionName, data.selectedType);
  };

  useEffect(() => {
    register("selectedType", { required: true });
  }, [register]);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <section>
        <main>
          <article className='row'>
            <div className='col-sm-12 col-md-8 offset-md-2 title'>
              Create your deck of a given type:
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
