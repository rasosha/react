/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import Cards from '../components/Cards';
import { Checkbox } from '../components/Form/Checkbox';
import { DateInput } from '../components/Form/DateInput';
import { FileInput } from '../components/Form/FileInput';
import { GenderInput } from '../components/Form/GenderInput';
import { NameInput } from '../components/Form/NameInput';
import { SpeciesInput } from '../components/Form/SpeciesInput';
import { StatusInput } from '../components/Form/StatusInput';
import { FormInputs, ICard } from '../types/types';

export function FormPage() {
  const [cards, setCards] = useState<ICard[]>([])
  const [modal, setModal] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormInputs>({ mode: 'onSubmit', reValidateMode: 'onSubmit' });

  const onSubmit = handleSubmit((data) => {
    const newCard = {
      id: cards.length,
      image: URL.createObjectURL((data.FileInput[0]) as unknown as MediaSource),
      name: data.NameInput,
      species: data.SpeciesInput,
      status: data.StatusInput,
      gender: data.GenderInput,
      created: data.DateInput,
    }
    const cardsArr = cards;
    cardsArr.push(newCard)
    setCards(cardsArr)
    reset();
    setModal(true);
  });

  return (
    <main className="mainForm" data-testid="FormPage">
      <form className={'form'} onSubmit={onSubmit} >
        <NameInput register={register} errors={errors} />
        <SpeciesInput register={register} errors={errors} />
        <GenderInput register={register} errors={errors} />
        <StatusInput register={register} errors={errors} />
        <DateInput register={register} errors={errors} />
        <FileInput register={register} errors={errors} />
        <Checkbox register={register} errors={errors} />
        <input type="submit" />
      </form>
      <>
        {cards.length > 0 ? <Cards cards={[...cards]} /> : ''}
        {modal ? (
          <div className="modal">
            <h2>Confirmation message:</h2>
            <p>Data has been saved!</p>
            <button onClick={() => setModal(false)}>ok!</button>
          </div>
        ) : (
          ''
        )}
      </>
    </main>
  );
}
