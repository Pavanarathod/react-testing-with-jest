import React, { Component } from "react";

class CommentBox extends Component {
  state = {
    comment: "",
  };

  handleComment = (e) => {
    this.setState({ comment: e.target.value });
  };

  submitComment = (e) => {
    e.preventDefault();
    if (!this.state.comment) return alert("Please enter a comment");
    this.setState({ comment: "" });
  };

  render() {
    return (
      <form onSubmit={this.submitComment}>
        <h4>Add a commnet</h4>
        <input
          type="text"
          value={this.state.comment}
          onChange={this.handleComment}
        />
        <button>Submit Comment</button>
      </form>
    );
  }
}

export default CommentBox;
