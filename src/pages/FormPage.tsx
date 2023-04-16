import React, { useEffect, useState } from 'react';
import CardModal from '../components/Card/CardModal';
import Cards from '../components/Card/Cards';
import { FormComponent } from '../components/Form/FormComponent';
import { ICard } from '../types/types';

export function FormPage() {
  const [addModal, setAddModal] = useState(false);
  const [modal, setModal] = useState(0);
  const [cards, setCards] = useState<ICard[]>([]);
  const [currentCard, setCurrentCard] = useState<ICard>({});

  useEffect(() => {
    console.log('currentCard', currentCard);
    if (Object.keys(currentCard).length !== 0) {
      setCards([...cards, currentCard]);
      setCurrentCard({});
      setAddModal(true);
      setTimeout(() => {
        setAddModal(false);
      }, 1500);
    }
  }, [cards, currentCard]);

  return (
    <main className="mainForm" data-testid="FormPage">
      {!(modal === 0) && <CardModal id={modal} cards={cards} setModal={setModal} />}
      <FormComponent setCurrentCard={setCurrentCard} />
      <>
        {cards.length > 0 ? <Cards cards={[...cards]} setModal={setModal} /> : ''}
        {addModal ? (
          <div className="modal">
            <h2>Confirmation message:</h2>
            <p>Data has been saved!</p>
            <button onClick={() => setAddModal(false)}>ok!</button>
          </div>
        ) : (
          ''
        )}
      </>
    </main>
  );
}
