import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { setForm } from '../../redux/formReducer';
import { State } from '../../redux/store';
import { FormInputs, ICard } from '../../types/types';
import { Checkbox } from './Checkbox';
import { DateInput } from './DateInput';
import { FileInput } from './FileInput';
import { GenderInput } from './GenderInput';
import { NameInput } from './NameInput';
import { SpeciesInput } from './SpeciesInput';
import { StatusInput } from './StatusInput';

export const FormComponent = (props: {
  setCurrentCard: React.Dispatch<React.SetStateAction<ICard>>;
}) => {
  const formData = useSelector((state: State) => state.form);
  const dispatch = useDispatch();
  const [length, setLength] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const onSubmit = handleSubmit((data) => {
    const newCard = {
      id: formData.myCards.length + 1,
      image: URL.createObjectURL(data.FileInput[0] as unknown as MediaSource),
      name: data.NameInput,
      species: data.SpeciesInput,
      status: data.StatusInput,
      gender: data.GenderInput,
      created: data.DateInput,
    };
    dispatch(
      setForm({
        type: 'FORM_INPUT',
        payload: newCard,
      })
    );
    props.setCurrentCard(newCard);
    setLength(length + 1);
    reset();
  });

  const testMode = false;
  return (
    <form className={'form'} onSubmit={onSubmit}>
      <NameInput register={register} errors={errors} testMode={testMode} />
      <SpeciesInput register={register} errors={errors} testMode={testMode} />
      <GenderInput register={register} errors={errors} testMode={testMode} />
      <StatusInput register={register} errors={errors} testMode={testMode} />
      <DateInput register={register} errors={errors} testMode={testMode} />
      <FileInput register={register} errors={errors} />
      <Checkbox register={register} errors={errors} testMode={testMode} />
      <input type="submit" />
    </form>
  );
};
