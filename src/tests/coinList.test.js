import React from 'react';
import { render, cleanup } from "@testing-library/react";
import { Provider } from "react-redux";
import CoinsExihbit from "../components/coinList";
import store from '../redux/store';
import "@testing-library/jest-dom/extend-expect";

describe("CoinsExhibit snapshot", () => {
  afterEach(cleanup);

  it("should render CoinsExhibit correctly", () => {
    const { asFragment } = render(
      <Provider store={store}>
        <CoinsExihbit />
      </Provider>
    );
    expect(asFragment(<CoinsExihbit />)).toMatchSnapshot();
  });
});

