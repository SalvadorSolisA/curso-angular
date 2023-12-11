import { createSelector } from "@ngrx/store";
import { AppState } from "../app.state";
import { VotesState } from "src/app/model/votes.state";

export const selectItemsFeature = (state: AppState) => state.votes;

export const selectVotes = createSelector(
    selectItemsFeature,
    (state: VotesState) => state.items
);