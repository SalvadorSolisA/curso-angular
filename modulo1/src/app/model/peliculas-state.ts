import { createAction, createReducer, on, props } from "@ngrx/store";
import { Pelicula } from "./pelicula";

export const addPelicula = createAction(
    '[Pelicula] Add Pelicula',
    props<{ item: Pelicula }>()
  );
  
  export const deletePelicula = createAction(
    '[Pelicula] Delete Pelicula',
    props<{ item: Pelicula }>()
  );

export interface PeliculaState {
    items: Pelicula[];
}

export const initialState: PeliculaState = {
    items: []
};

export const collectionReducer = createReducer(
    initialState,
    on( addPelicula, (state, { item }) => ({
        ...state,
        items: [...state.items, item]
    })),
    on(deletePelicula, (state, { item }) => ({
        ...state,
        items: state.items.filter(i => i !== item)
    }))
);