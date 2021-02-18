import React from "react";
import { connect } from 'frontity'
import Link from '@frontity/components/link'

const Root = ({ state }) => {
  return (
    <>
      <h1>Hello Frontity</h1>
      <p>Current URL: {state.router.link}</p>
      <nav>
        <Link link="/">Home</Link>
        <br />
        <Link link="/page/2">More Posts</Link>
        <br />
        <Link link="/about-us">About Us</Link>
        <br />
      </nav>
      <hr />
      <main>
        <Switch>
          <div when={data.isArchive}>This is a list</div>
          <div when={data.isPost}>This is a post</div>
          <div when={data.isPage}>This is a page</div>
        </Switch>
      </main>
    </>
  );
};

export default connect(Root);
