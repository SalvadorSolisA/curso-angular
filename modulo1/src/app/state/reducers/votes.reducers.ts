import { createReducer, on } from "@ngrx/store";

import { decrementVote, incrementVote } from "../actions/votes.actions";
import { VotesState } from "src/app/model/votes.state";


//inicializar el estado 1 y toma lo que hay declarado en la clase ItemsState
export const initialState: VotesState = { 
    items: [
        { id: 1, name: 'up', votes: 0 },
        { id: 2, name: 'down', votes: 0 }
    ]
}

export const votesReducer = createReducer(
    initialState,
    on(incrementVote, (state, { voteId }) => {
      // Encuentra el voto con el ID proporcionado en el estado
      const voteIndex = state.items.findIndex(item => item.id === voteId);
  
      // Si se encuentra el voto, incrementa su propiedad "votes" en uno
      if (voteIndex !== -1) {
        const updatedItems = [...state.items];
        updatedItems[voteIndex] = {
          ...updatedItems[voteIndex],
          votes: updatedItems[voteIndex].votes + 1,
        };
        //console.log(state);
        return { ...state, items: updatedItems };
      }
  
      // Si no se encuentra el voto, devuelve el estado sin cambios
      return state;
    }),
    on(decrementVote, (state, { voteId }) => {
        // Encuentra el voto con el ID proporcionado en el estado
        const voteIndex = state.items.findIndex(item => item.id === voteId);
    
        // Si se encuentra el voto, incrementa su propiedad "votes" en uno
        if (voteIndex !== -1) {
          const updatedItems = [...state.items];
          updatedItems[voteIndex] = {
            ...updatedItems[voteIndex],
            votes: updatedItems[voteIndex].votes + 1,
          };
          //console.log(state);
          return { ...state, items: updatedItems };
        }
    
        // Si no se encuentra el voto, devuelve el estado sin cambios
        return state;
      }),
  );