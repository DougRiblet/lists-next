/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import HomePage from "../pages/index";

describe("HomePage", () => {
  it("renders without crashing", () => {
    render(<HomePage />);
    const main = screen.getByRole("main");
    expect(main).toBeInTheDocument();

  });
});
