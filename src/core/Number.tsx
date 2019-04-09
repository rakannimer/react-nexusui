import * as React from "react";
//@ts-ignore
import * as Nexus from "nexusui";

import { NumberProps } from "../types";
import { getId, NO_OP } from "../utils";
import { DEFAULT_SIZE } from "../constants";

export const Number = React.memo(function Number({
  size = DEFAULT_SIZE,
  value,
  min,
  max,
  step,
  onChange = NO_OP,
  onReady = NO_OP
}: NumberProps) {
  let number = React.useRef<null | Nexus.Number>(null);
  let elementId = React.useRef(`nexus-ui-number-${getId()}`);
  React.useEffect(() => {
    number.current = new Nexus.Number(elementId.current, {
      size,
      value,
      min,
      max,
      step
    });
    onReady(number.current);
    number.current.on("change", (newState: number) => {
      onChange(newState);
    });
    return () => {
      number.current.destroy();
    };
  }, []);
  React.useEffect(() => {
    if (number.current === null) return;
    if (!Array.isArray(size)) {
      return;
    }
    number.current.resize(...size);
  }, size);
  React.useEffect(
    () => {
      if (number.current === null) return;
      if (value === undefined) return;

      number.current.value = value;
    },
    [value]
  );
  React.useEffect(
    () => {
      if (number.current === null) return;
      if (min === undefined) return;
      number.current.min = min;
    },
    [min]
  );
  React.useEffect(
    () => {
      if (number.current === null) return;
      if (max === undefined) return;
      number.current.max = max;
    },
    [max]
  );
  return <div id={elementId.current} />;
});
