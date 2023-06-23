import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./navigation-bar/navigationBar";

test("renders learn react link", () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
