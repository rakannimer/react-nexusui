import React from "react";
//@ts-ignore
import * as Nexus from "nexusui";
import { MultisliderProps } from "../types";
import { getId, NO_OP } from "../utils";

export const Multislider = React.memo(function Multislider({
  size,
  max,
  min,
  smoothing,
  step,
  values,
  candycane,
  onChange = NO_OP,
  onReady = NO_OP
}: MultisliderProps) {
  let multislider = React.useRef<null | Nexus.Multislider>(null);
  let elementId = React.useRef(`nexus-ui-multislider-${getId()}`);
  React.useEffect(() => {
    multislider.current = new Nexus.Multislider(elementId.current, {
      size,
      max,
      min,
      smoothing,
      step,
      values,
      candycane
    });
    onReady(multislider.current);
    multislider.current.on(
      "change",
      (newState: { index: number; value: number }) => {
        onChange(newState);
      }
    );
    return () => {
      multislider.current.destroy();
    };
  }, []);

  React.useEffect(() => {
    if (multislider.current === null) return;
    if (!Array.isArray(size)) {
      return;
    }
    multislider.current.resize(...size);
  }, size);
  React.useEffect(
    () => {
      if (multislider.current === null) return;
      if (min === undefined) return;
      multislider.current.min = min;
    },
    [min]
  );

  React.useEffect(
    () => {
      if (multislider.current === null) return;
      if (max === undefined) return;
      multislider.current.max = max;
    },
    [max]
  );
  React.useEffect(
    () => {
      if (multislider.current === null) return;
      if (smoothing === undefined) return;
      multislider.current.smoothing = smoothing;
    },
    [smoothing]
  );
  React.useEffect(
    () => {
      if (multislider.current === null) return;
      if (step === undefined) return;
      multislider.current.step = step;
    },
    [step]
  );
  React.useEffect(() => {
    if (multislider.current === null) return;
    if (values === undefined || !Array.isArray(values)) return;

    multislider.current.setAllSliders(values);
  }, values);
  React.useEffect(
    () => {
      if (multislider.current === null) return;
      if (values === undefined) return;
      multislider.current.values = values;
    },
    [candycane]
  );
  return <div id={elementId.current} />;
});
