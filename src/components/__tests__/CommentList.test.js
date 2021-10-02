import { mount } from "enzyme";
import CommentList from "../CommentList";
import Root from "../../Root";

let wrapper;

beforeEach(() => {
  const initialState = {
    comments: ["Comment 1", "comment 2", "comment 3"],
  };
  wrapper = mount(
    <Root initialState={initialState}>
      <CommentList />
    </Root>
  );
});

it("Create One LI PER Comment", () => {
  expect(wrapper.find("li").length).toEqual(0);
});
