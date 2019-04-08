import "web-audio-test-api";
import * as React from "react";
import { render, fireEvent } from "react-testing-library";
import { Toggle } from "../core/Toggle";

describe("Toggle", () => {
  test("exports", () => {
    expect(Toggle).toBeTruthy();
  });
  test("works", () => {
    const { container, rerender } = render(<Toggle state={false} />);
    expect(container).toMatchSnapshot();
    const toggleFalse = container.innerHTML;
    rerender(<Toggle state={true} />);
    const toggleTrue = container.innerHTML;
    expect(toggleTrue).not.toEqual(toggleFalse);
    const svg = container.querySelector("svg");
    if (!svg) {
      throw new Error("SVG not found");
    }
    fireEvent(svg, new MouseEvent("mousedown"));
    expect(container.innerHTML).toEqual(toggleFalse);
    fireEvent(svg, new MouseEvent("mousedown"));
    expect(container.innerHTML).toEqual(toggleTrue);
  });
});
