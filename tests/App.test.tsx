import * as React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/components/App";

describe("App", () => {
  test("should render", () => {
    render(<App />);
    expect(screen.getByText("Hello World!")).toBeTruthy();
  });
});
