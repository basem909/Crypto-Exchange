import React from "react";
import { render, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import store from "../redux/store";
import "@testing-library/jest-dom/extend-expect";
import App from "../App";
import { BrowserRouter as Router } from 'react-router-dom';

describe("App snapshot", () => {
  afterEach(cleanup);

  it("should render App correctly", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <App />
        </Router>
      </Provider>
    );
    expect(asFragment(<App />)).toMatchSnapshot();
  });
});
