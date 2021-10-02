import { mount } from "enzyme";
import Root from "../../Root";
import CommentBox from "../CommentBox";

let wrapper;

beforeEach(() => {
  wrapper = mount(
    <Root>
      <CommentBox />
    </Root>
  );
});

afterEach(() => {
  wrapper.unmount();
});

it("has a input and a button", () => {
  expect(wrapper.find("input").length).toEqual(1);
  expect(wrapper.find("button").length).toEqual(1);
});

it("user types value in input box", () => {
  wrapper.find("input").simulate("change", {
    target: { value: "New Comment" },
  });

  wrapper.update();
  expect(wrapper.find("input").prop("value")).toEqual("New Comment");
});

it("input get's empty value after submitting", () => {
  wrapper.find("input").simulate("change", {
    target: { value: "New Comment" },
  });

  wrapper.update();
  wrapper.find("form").simulate("submit");
  wrapper.update();
  expect(wrapper.find("input").prop("value")).toEqual("");
});
