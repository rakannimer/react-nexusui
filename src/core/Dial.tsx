import * as React from "react";
//@ts-ignore
import * as Nexus from "nexusui";
import { DialProps } from "../types";
import { getId, NO_OP } from "../utils";

export const Dial = React.memo(function Dial({
  size,
  interaction,
  max,
  min,
  mode,
  value,
  onChange = NO_OP,
  onReady = NO_OP
}: DialProps) {
  let dial = React.useRef<null | Nexus.Dial>(null);
  let elementId = React.useRef(`nexus-ui-dial-${getId()}`);
  React.useEffect(() => {
    dial.current = new Nexus.Dial(elementId.current, {
      size,
      interaction,
      max,
      min,
      mode
    });
    onReady(dial.current);
    dial.current.on("change", (newState: number) => {
      onChange(newState);
    });
    return () => {
      dial.current.destroy();
    };
  }, []);
  React.useEffect(() => {
    if (dial.current === null) return;
    if (!Array.isArray(size)) {
      return;
    }
    dial.current.resize(...size);
  }, size);
  React.useEffect(
    () => {
      if (dial.current === null) return;
      if (value === undefined) return;

      dial.current.value = value;
    },
    [value]
  );
  React.useEffect(
    () => {
      if (dial.current === null) return;
      if (min === undefined) return;
      dial.current.min = min;
    },
    [min]
  );
  React.useEffect(
    () => {
      if (dial.current === null) return;
      if (max === undefined) return;
      dial.current.max = max;
    },
    [max]
  );
  React.useEffect(
    () => {
      if (dial.current === null) return;
      if (interaction === undefined) return;
      dial.current.interaction = interaction;
    },
    [interaction]
  );
  return <div key={elementId.current} id={elementId.current} />;
});
