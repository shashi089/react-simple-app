import React, { useState, useEffect } from "react";
import axios from "axios";

function Post({ match }) {
  const url = "https://jsonplaceholder.typicode.com";
  const [user, setUser] = useState({});
  const [post, setPost] = useState({});
  const [comment, setComment] = useState([]);

  let fetchdata = async () => {
    try {
      const { data: postdata } = await axios.get(
        `${url}/posts/${match.params.id}`
      );
      const { data: userdata } = await axios.get(
        `${url}/users/${match.params.id}`
      );
      const { data: commentsdata } = await axios.get(
        `${url}/posts/${match.params.id}/comments`
      );
      setUser(userdata);
      setPost(postdata);
      setComment(commentsdata);
    } catch (err) {
      console.warn("Error Fetching data from server", err);
    }
  };

  useEffect(() => {
    fetchdata();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <div className="container">
        <div className="card profile">
          <div className="card-body">
            <div className="usericon">
              <i className="fas fa-user-secret"></i>
            </div>
            <div className="userdata">
              <b>Name:</b>
              {user.name}
            </div>
            <div className="userdata">
              <b>Email:</b>
              {user.email}
            </div>
            <div className="userdata">
              <b>Contact:</b>
              {user.phone}
            </div>
            <div className="userdata">
              <b>Website:</b>
              {user.website}
            </div>
          </div>
        </div>
        <div className="content container">
          <h1>{post.title}</h1>
          <p>{post.body}</p>
        </div>
        <div className="comments">
          <h1 className="text-center">Comments</h1>
          <div className="list-group">
            {comment.map((data) => {
              return (
                <div key={data.id} className="list-group-item">
                  <p>
                    <b>Name:</b>
                    <span className="ml-3">{data.name}</span>
                  </p>
                  <p>
                    <b>Email:</b>
                    <span className="ml-3">{data.email}</span>
                  </p>
                  <p>
                    <b>Comment:</b>
                    <span className="ml-3">{data.body}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Post;