import React from 'react';
import { useForm } from 'react-hook-form';
import { SignInFormData } from 'types';

type SignInFormProps = {
  onSubmit: (data: SignInFormData) => Promise<void>;
  onCancel: () => void;
};

const SignInForm: React.FC<SignInFormProps> = ({ onSubmit, onCancel }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignInFormData>();

  return (
    <form className='max-w-xl m-auto py-4 px-4 md:py-4 md:px-8 border border-slate-300 mt-8 rounded' onSubmit={handleSubmit(onSubmit)}>
      <p className='mt-4 first-of-type:mt-0'>
        <label className='text-gray-600 font-medium' htmlFor='username'>
          Username
        </label>
        <input
          className='input'
          {...register('username', { required: true })}
          name='username'
          id='username'
          type='text'
          placeholder='admin'
        />
      </p>
      {errors?.username?.type === 'required' && <p className='text-red-500'>Username is required</p>}
      <p className='mt-4'>
        <label className='text-gray-600 font-medium' htmlFor='password'>
          Password
        </label>
        <input
          className='input'
          {...register('password', { required: true })}
          name='password'
          id='password'
          type='password'
          placeholder='admin'
        />
      </p>
      {errors?.password?.type === 'required' && <p className='text-red-500'>Password is required</p>}

      <div className='mt-4 flex gap-2'>
        <button type='submit' className='button button-filled'>
          Submit
        </button>
        <button type='button' className='button text-orange-500 button-outlined' onClick={onCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
};

export default SignInForm;
