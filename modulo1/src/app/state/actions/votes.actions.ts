import { createAction } from "@ngrx/store";

//incrementa los votos like
export const incrementVote = createAction(
    '[Votes] Increment Vote', (voteId: number) => ({ voteId })
);

//incrementa los votos dislike
export const decrementVote = createAction(
    '[Votes] Decrement Vote', (voteId: number) => ({ voteId })
);