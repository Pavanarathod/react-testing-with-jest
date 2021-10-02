import { SAVE_COMMENT } from "../../actions/types";
import { commentReducer } from "../comment";

it("Action of type save SAVE_COMMENT", () => {
  const action = {
    type: SAVE_COMMENT,
    payload: "New comment",
  };
  const newState = commentReducer([], action);
  expect(newState).toEqual(["New comment"]);
});

it("Handle unknown types", () => {
  const newState = commentReducer([], { type: "unknown type" });
  expect(newState).toEqual([]);
});
