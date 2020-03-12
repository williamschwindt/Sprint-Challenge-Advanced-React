import React from 'react';
import App from './App';
import { render, fireEvent } from "@testing-library/react";


test("renders App without crashing", () => {
  render(<App />);
});

test('player rendering', () => {
  const { getByTestId } = render(<App />);

  getByTestId("players");
});

test('button rendering', () => {
  const { getByTestId } = render(<App />);

  getByTestId("button");
})





