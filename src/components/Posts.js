import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Posts.css";

const API_URL = "https://jsonplaceholder.typicode.com/posts";
class Posts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      userId: "",
      body: "",
      title: "",
      id: "",
    };
  }

  // function to create post
  createPost = async () => {
    try {
      const { userId, title, body } = this.state;
      const { data: post } = await axios.post(API_URL, {
        userId,
        title,
        body,
      });
      const posts = [...this.state.posts];

      posts.push(post);
      this.setState({ posts, userId: "", title: "", body: "" });
    } catch (err) {
      console.log("Error creating data from server");
    }
  };
  // function to get post data
  getPosts = async () => {
    try {
      const { data } = await axios.get(API_URL);
      this.setState({ posts: data });
    } catch (err) {
      console.error("Error Fetching data from server", err);
    }
  };

  // function to delete post
  deletePost = async (postId) => {
    await axios.delete(`${API_URL}/${postId}`);
    let posts = [...this.state.posts];
    posts = posts.filter((post) => post.id !== postId);
    this.setState({ posts });
  };

  // function to Update post
  updatePost = async () => {
    try {
      const { id, userId, title, body } = this.state;
      const { data: post } = await axios.put(`${API_URL}/${id}`, {
        userId,
        title,
        body,
      });
      const posts = [...this.state.posts];
      const index = posts.findIndex((post) => post.id === id);
      posts[index] = post;
      this.setState({ posts });
    } catch (err) {
      console.error("error in UPDATE");
    }
  };
  handleChange = ({ target: { name, value } }) => {
    this.setState({ [name]: value });
  };

  // function to Submit post
  handleSubmit = (e) => {
    e.preventDefault();
    if (this.state.id) {
      this.updatePost();
    } else {
      this.createPost();
    }
  };

  selectPostToUpdate = (post) => {
    this.setState({ ...post });
  };
  componentDidMount() {
    this.getPosts();
  }
  render() {
    return (
      <div>
        <div className="container">
          <div className="form-title">
            <h2>Create or Update Post</h2>
          </div>
          {/* form to create or update post */}
          <div className="form-container">
            <form onSubmit={this.handleSubmit} className="form-data">
              <div>
                {/* UserID */}
                <label htmlFor="">User Id : </label>
                <br />
                <input
                  name="userId"
                  type="text"
                  value={this.state.userId}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              {/* Title */}
              <div>
                <label htmlFor="">Title: </label>
                <br />
                <input
                  name="title"
                  type="text"
                  value={this.state.title}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              {/* Body */}
              <div>
                <label htmlFor="">Body: </label>
                <br />
                <textarea
                  name="body"
                  type="text"
                  value={this.state.body}
                  onChange={this.handleChange}
                />
              </div>
              <br />
              {/* Submit button */}
              <div>
                <button type="submit">Submit</button>
              </div>
            </form>
          </div>
          <div className="allposts">
            <h1>All Posts</h1>

            {/* Table to display all posts */}
            <table>
              {/* Table header */}
              <tr>
                <th>UserID</th>
                <th>Title</th>
                <th>Body</th>
                <th>Action</th>
              </tr>
              {this.state.posts.map((post) => {
                return (
                  <tr key={post.id}>
                    {/* Table data */}
                    <td className="userId">{post.userId}</td>
                    <td>{post.title}</td>
                    <td>{post.body}</td>
                    <td>
                      {/* Action-buttons */}
                      <button
                        className="update"
                        onClick={() => this.selectPostToUpdate(post)}
                      >
                        Update
                      </button>

                      <button
                        className="delete"
                        onClick={() => this.deletePost(post.id)}
                      >
                        Delete
                      </button>
                      <button className="post">
                        <Link
                          className="post-details"
                          to={`/posts/${post.userId}`}
                        >
                          Post details
                        </Link>
                      </button>
                    </td>
                  </tr>
                );
              })}
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Posts;
