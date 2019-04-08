import * as React from "react";
//@ts-ignore
import * as Nexus from "nexusui";
import { EnvelopeProps } from "../types";
import { getId } from "../utils";

export const Envelope = React.memo(function Envelope({
  size,
  noNewPoints,
  points = [],
  onChange = () => {}
}: EnvelopeProps) {
  let envelope = React.useRef<null | Nexus.Envelope>(null);
  let elementId = React.useRef(`nexus-ui-envelope-${getId()}`);
  React.useEffect(() => {
    if (points.length === 0) {
      console.warn(
        "Can't render envelope without points. Make sure points contains at least one element."
      );
      return;
    }
    envelope.current = new Nexus.Envelope(elementId.current, {
      size,
      noNewPoints,
      points
    });
    envelope.current.on("change", (newState: { x: number; y: number }[]) => {
      onChange(newState);
    });
    return () => {
      envelope.current.destroy();
    };
  }, []);

  React.useEffect(
    () => {
      if (envelope.current === null) return;

      if (!Array.isArray(points)) {
        return;
      }
      envelope.current.setPoints(points);
    },
    [points]
  );

  return <div id={elementId.current} />;
});
