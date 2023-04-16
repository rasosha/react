import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
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
  const [length, setLength] = useState(0);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const onSubmit = handleSubmit((data) => {
    setLength(length + 1);
    const newCard = {
      id: length + 1,
      image: URL.createObjectURL(data.FileInput[0] as unknown as MediaSource),
      name: data.NameInput,
      species: data.SpeciesInput,
      status: data.StatusInput,
      gender: data.GenderInput,
      created: data.DateInput,
    };
    props.setCurrentCard(newCard);
    reset();
  });

  return (
    <form className={'form'} onSubmit={onSubmit}>
      <NameInput register={register} errors={errors} />
      <SpeciesInput register={register} errors={errors} />
      <GenderInput register={register} errors={errors} />
      <StatusInput register={register} errors={errors} />
      <DateInput register={register} errors={errors} />
      <FileInput register={register} errors={errors} />
      <Checkbox register={register} errors={errors} />
      <input type="submit" />
    </form>
  );
};
