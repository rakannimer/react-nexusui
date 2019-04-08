import * as React from "react";
//@ts-ignore
import * as Nexus from "nexusui";
import { Pan2DProps, Pan2DChange } from "../types";
import { getId } from "../utils";

export const Pan2D = React.memo(function Pan2D({
  size = [200, 200],
  onChange = () => {},
  onReady = () => {},
  range = 0.5,
  mode,
  speakers
}: Pan2DProps) {
  let pan2D = React.useRef<null | Nexus.Pan2D>(null);
  let elementId = React.useRef(`nexus-ui-pan2D-${getId()}`);
  React.useEffect(() => {
    const options = {
      size,
      range,
      mode
    };
    if (Array.isArray(speakers)) {
      options["speakers"] = speakers;
    }
    pan2D.current = new Nexus.Pan2D(elementId.current, options);
    onReady(pan2D.current);
    pan2D.current.on("change", (newState: Pan2DChange) => {
      onChange(newState);
    });
    return () => {
      pan2D.current.destroy();
    };
  }, []);
  React.useEffect(() => {
    if (pan2D.current === null) return;
    if (!Array.isArray(size)) {
      return;
    }
    pan2D.current.resize(...size);
  }, size);

  return <div id={elementId.current} />;
});
