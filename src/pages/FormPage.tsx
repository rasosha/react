import React, { useEffect, useState } from 'react';
import { State } from '../redux/store';
import CardModal from '../components/Card/CardModal';
import Cards from '../components/Card/Cards';
import { FormComponent } from '../components/Form/FormComponent';
import { ICard } from '../types/types';
import { useSelector } from 'react-redux';

export function FormPage() {
  const [modalMsg, setModalMsg] = useState(false);
  const [modalCard, setModalCard] = useState(0);
  const [currentCard, setCurrentCard] = useState<ICard>({});
  const formData = useSelector((state: State) => state.form);

  useEffect(() => {
    if (Object.keys(currentCard).length !== 0) {
      setModalMsg(true);
      setTimeout(() => {
        setModalMsg(false);
      }, 1000);
    }
  }, [currentCard]);

  return (
    <main className="mainForm" data-testid="FormPage">
      {!(modalCard === 0) && (
        <CardModal id={modalCard} cards={formData.cards} setModalCard={setModalCard} />
      )}
      <FormComponent setCurrentCard={setCurrentCard} />
      <>
        {formData.cards.length > 0 ? <Cards cards={formData.cards} setModal={setModalCard} /> : ''}
        {modalMsg ? (
          <div className="modal">
            <h2>Confirmation message:</h2>
            <p>Data has been saved!</p>
            <button onClick={() => setModalMsg(false)}>ok!</button>
          </div>
        ) : (
          ''
        )}
      </>
    </main>
  );
}
