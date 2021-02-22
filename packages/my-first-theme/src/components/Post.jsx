import React from "react";
import { connect, styled, Head } from "frontity";
import dayjs from "dayjs";

const Post = ({ state, libraries }) => {
  const data = state.source.get(state.router.link);
  const post = state.source[data.type][data.id];
  const author = state.source.author[post.author];
  const formattedDate = dayjs(post.date).format("DD MMMM YYYY");
  const Html2React = libraries.html2react.Component;
  return (
    <div>
      <Head>
        {post && <title>{post.title.rendered}</title>}
        {post && <meta name="description" content={post.excerpt.rendered} />}
      </Head>
      {post && <h2>{post.title.rendered}</h2>}
      <PostInfo>
        {post && (
          <p>
            <strong>Posted: {formattedDate}</strong>
          </p>
        )}
        <p>
          <strong>Author: {author.name}</strong>
        </p>
      </PostInfo>
      {post && <Html2React html={post.content.rendered} />}
    </div>
  );
};

export default connect(Post);

const PostInfo = styled.div`
  background-image: linear-gradient(to right, #f4f4f4, #fff);
  margin-bottom: 1em;
  padding: 0.5em;
  border-left: 4px solid lightseagreen;
  font-size: 0.8em;

  & > p {
    margin: 0;
  }
`;
