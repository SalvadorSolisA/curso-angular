import { createAction, createReducer, on } from '@ngrx/store';

export interface Item {
  id: number;
  name: string;
  votes: number;
}

export interface VotesState {
  items: Item[];
}

export const incrementVote = createAction('[Votes] Increment Vote', (itemId: number) => ({ itemId }));
export const decrementVote = createAction('[Votes] Decrement Vote', (itemId: number) => ({ itemId }));

export const initialState: VotesState = {
  items: [
    { id: 1, name: 'up', votes: 0 },
    { id: 2, name: 'down', votes: 0 }
  ]
};

export const votesReducer = createReducer(
  initialState,
  on(incrementVote, (state, { itemId }) => ({
    ...state,
    items: state.items.map(item => item.id === itemId ? { ...item, votes: item.votes + 1 } : item)
  })),
  on(decrementVote, (state, { itemId }) => ({
    ...state,
    items: state.items.map(item => item.id === itemId ? { ...item, votes: item.votes - 1 } : item)
  }))
);
