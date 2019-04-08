import "web-audio-test-api";
import * as React from "react";
import { render, fireEvent } from "react-testing-library";
import { Button } from "../core/Button";

describe("Button", () => {
  test("exports", () => {
    expect(Button).toBeTruthy();
  });
  test("works", () => {
    const { container, rerender } = render(<Button state={true} />);
    const toggleTrue = container.innerHTML;
    rerender(<Button state={false} />);
    const toggleFalse = container.innerHTML;
    expect(toggleTrue).not.toEqual(toggleFalse);
    const svg = container.querySelector("circle");
    if (!svg) {
      throw new Error("SVG not found");
    }
    fireEvent(svg, new MouseEvent("mousedown"));
    expect(container.innerHTML).toEqual(toggleTrue);
    //@ts-ignore
    fireEvent(document, new MouseEvent("mouseup"));
    expect(container.innerHTML).toEqual(toggleFalse);
  });
});
