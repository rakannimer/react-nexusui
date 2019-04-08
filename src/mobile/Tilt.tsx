import * as React from "react";
//@ts-ignore
import * as Nexus from "nexusui";
import { TiltProps } from "../types";
import { getId } from "../utils";

export const Tilt = React.memo(function Tilt({
  size,
  active,
  onChange = () => {},
  onReady = () => {}
}: TiltProps) {
  let tilt = React.useRef<null | Nexus.Tilt>(null);
  let elementId = React.useRef(`nexus-ui-tilt-${getId()}`);
  React.useEffect(() => {
    tilt.current = new Nexus.Tilt(elementId.current, { size, active });
    onReady(tilt.current);
    tilt.current.on(
      "change",
      (newState: { x: number; y: number; z: number }) => {
        onChange(newState);
      }
    );
    return () => {
      tilt.current.destroy();
    };
  }, []);
  React.useEffect(() => {
    if (tilt.current === null) return;
    if (!Array.isArray(size)) {
      return;
    }
    tilt.current.resize(...size);
  }, size);
  React.useEffect(
    () => {
      if (tilt.current === null) return;
      tilt.current.active = active;
    },
    [active]
  );
  return <div id={elementId.current} />;
});
