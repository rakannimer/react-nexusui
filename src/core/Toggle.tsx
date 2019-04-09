import * as React from "react";
//@ts-ignore
import * as Nexus from "nexusui";

import { ToggleProps } from "../types";
import { getId, NO_OP } from "../utils";

export const Toggle = React.memo(function Toggle({
  size = [120, 40],
  state,
  onChange = NO_OP,
  onReady = NO_OP
}: ToggleProps) {
  let toggle = React.useRef<null | Nexus.Toggle>(null);
  let elementId = React.useRef(`nexus-ui-toggle-${getId()}`);
  React.useEffect(() => {
    toggle.current = new Nexus.Toggle(elementId.current, {
      size,
      state
    });
    onReady(toggle.current);
    toggle.current.on("change", (newState: boolean) => {
      onChange(newState);
    });
    return () => {
      toggle.current.destroy();
    };
  }, []);
  React.useEffect(() => {
    if (toggle.current === null) return;
    if (!Array.isArray(size)) {
      return;
    }
    toggle.current.resize(...size);
  }, size);
  React.useEffect(
    () => {
      if (toggle.current === null) return;
      if (toggle.current.state != state) {
        toggle.current.flip();
      }
    },
    [state]
  );
  return <div id={elementId.current} />;
});
