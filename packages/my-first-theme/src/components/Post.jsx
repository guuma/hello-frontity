import React from "react";
import { connect } from "frontity";

const Post = ({ state }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const author = state.source.author[post.author];
  // console.log(post.content);
  return (
    <div>
      {post && <h2>{post.title.rendered}</h2>}
      {post && (
        <p>
          <strong>Posted: {post.date}</strong>
        </p>
      )}
      <p>
        <strong>Author: {author.name}</strong>
      </p>
      {post && (
        <div dangerouslySetInnerHTML={{ __html: post.content.rendered }} />
      )}
    </div>
  );
};

export default connect(Post);
