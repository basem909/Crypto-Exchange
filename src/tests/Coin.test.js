import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { Provider } from 'react-redux';
import '@testing-library/jest-dom/extend-expect';
import { BrowserRouter as Router } from 'react-router-dom';
import Coin from '../components/coin';
import store from '../redux/store';

describe('Coin snapshot', () => {
  afterEach(cleanup);

  it('should render Coin correctly', () => {
    const { asFragment } = render(
      <Provider store={store}>
        <Router>
          <Coin />
        </Router>
      </Provider>,
    );
    expect(asFragment(<Coin />)).toMatchSnapshot();
  });
});
