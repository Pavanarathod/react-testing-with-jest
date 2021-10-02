import { shallow } from "enzyme";
import App from "../App";
import CommentBox from "../CommentBox";
import CommentList from "../CommentList";

let wrapper;

beforeEach(() => {
  wrapper = shallow(<App />);
});

it("Show Comment Box", () => {
  expect(wrapper.find(CommentBox).length).toEqual(1);
});

it("Show Comment List", () => {
  expect(wrapper.find(CommentList).length).toEqual(1);
});
