import { ActionReducerMap } from "@ngrx/store";
import { VotesState } from "../model/votes.state";
import { votesReducer } from "./reducers/votes.reducers";

export interface AppState {
    votes: VotesState,
}

export const ROOT_REDUCER: ActionReducerMap<AppState> = {
    votes: votesReducer
}