import React, { Component } from "react";

class PostComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      codeSnippet: "",
      consoleError: "",
      browser: "",
      languages: [],
      posts: []
    };
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = e => {};

  render() {
    return (
      <div>
        <h1>Post Component</h1>
      </div>
    );
  }
}

export default PostComponent;
