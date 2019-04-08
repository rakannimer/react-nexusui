import * as React from "react";
//@ts-ignore
import * as Nexus from "nexusui";
import { PanProps, PanChange } from "../types";
import { getId } from "../utils";

export const Pan = React.memo(function Pan({
  size = [120, 30],
  value = 0,
  onChange = () => {},
  onReady = () => {}
}: PanProps) {
  let pan = React.useRef<null | Nexus.Pan>(null);
  let elementId = React.useRef(`nexus-ui-pan-${getId()}`);
  React.useEffect(() => {
    pan.current = new Nexus.Pan(elementId.current, { size, value });
    onReady(pan.current);
    pan.current.on("change", (newState: PanChange) => {
      onChange(newState);
    });
    return () => {
      pan.current.destroy();
    };
  }, []);
  React.useEffect(() => {
    if (pan.current === null) return;
    if (!Array.isArray(size)) {
      return;
    }
    pan.current.resize(...size);
  }, size);
  React.useEffect(
    () => {
      if (pan.current === null) return;
      pan.current.value = value;
    },
    [value]
  );
  return <div id={elementId.current} />;
});
