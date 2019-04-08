import * as React from "react";
//@ts-ignore
import * as Nexus from "nexusui";

import { SliderProps } from "../types";
import { getId } from "../utils";
import { DEFAULT_SIZE } from "../constants";

export const Slider = React.memo(function Slider({
  size = DEFAULT_SIZE,
  value,
  min,
  max,
  step,
  onChange = () => {}
}: SliderProps) {
  let slider = React.useRef<null | Nexus.Slider>(null);
  let elementId = React.useRef(`nexus-ui-slider-${getId()}`);
  React.useEffect(() => {
    slider.current = new Nexus.Slider(elementId.current, {
      size,
      value,
      min,
      max,
      step
    });
    slider.current.on("change", (newState: number) => {
      onChange(newState);
    });
    return () => {
      slider.current.destroy();
    };
  }, []);
  React.useEffect(() => {
    if (slider.current === null) return;
    if (!Array.isArray(size)) {
      return;
    }
    slider.current.resize(...size);
  }, size);
  React.useEffect(
    () => {
      if (slider.current === null) return;
      if (value === undefined) return;

      slider.current.value = value;
    },
    [value]
  );
  React.useEffect(
    () => {
      if (slider.current === null) return;
      if (min === undefined) return;
      slider.current.min = min;
    },
    [min]
  );
  React.useEffect(
    () => {
      if (slider.current === null) return;
      if (max === undefined) return;
      slider.current.max = max;
    },
    [max]
  );
  return <div id={elementId.current} />;
});
