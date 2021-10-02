import { saveComment } from "..";
import { SAVE_COMMENT } from "../types";

describe("saveComment", () => {
  it("Has correct type", () => {
    const newAction = saveComment();

    expect(newAction.type).toEqual(SAVE_COMMENT);
  });

  it("Has Correct Payload", () => {
    const newAction = saveComment("New Comment");

    expect(newAction.payload).toEqual("New Comment");
  });
});
