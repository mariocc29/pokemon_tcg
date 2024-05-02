import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";

import { DeckData } from '@/interfaces/deck_data';
import { DeckEmptyState, DeckMain } from '@/layouts';
import { getDecks } from '@/services';
import { toggleModal } from '@/state';

export const Deck = () => {
  const [decks, setDecks] = useState<Array<DeckData>>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchDecks = async () => {
      try {
        const data = await getDecks();
        setDecks(data);
        setLoading(false);
      } catch (error) {
        dispatch(
          toggleModal({
            show: true, 
            status: 'alert', 
            message: 'Error fetching decks',
          })
        )
        setLoading(false);
      }
    };

    fetchDecks();
  }, [])
  
  return (
    <>
      { !loading && decks.length == 0 && <DeckEmptyState /> }
      { !loading && decks.length > 0 && <DeckMain decks={decks} /> }
    </>
  )
}