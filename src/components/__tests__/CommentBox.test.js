import { mount } from "enzyme";
import CommentBox from "../CommentBox";

let wrapper;

beforeEach(() => {
  wrapper = mount(<CommentBox />);
});

afterEach(() => {
  wrapper.unmount();
});

it("has a input and a button", () => {
  wrapper = mount(<CommentBox />);

  expect(wrapper.find("input").length).toEqual(1);
  expect(wrapper.find("button").length).toEqual(1);
});
