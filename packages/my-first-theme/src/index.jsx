import React from "react";
import Root from "./components/index";
import link from '@frontity/html2react/processors/link'

const myFirstName = {
  name: "my-first-theme",
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      isUrlVisible: false,
    },
  },
  actions: {
    theme: {
      toggleUrl: ({ state }) => {
        state.theme.isUrlVisible = !state.theme.isUrlVisible;
      },
    },
  },
  libraries: {
    html2react: {
      processors: [link],
    },
  },
};

export default myFirstName;