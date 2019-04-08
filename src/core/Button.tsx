import * as React from "react";
//@ts-ignore
import * as Nexus from "nexusui";
import { ButtonProps } from "../types";
import { getId } from "../utils";

export const Button = React.memo(function Button({
  size,
  mode = "button",
  state,
  onChange = () => {}
}: ButtonProps) {
  let button = React.useRef<null | Nexus.Button>(null);
  let elementId = React.useRef(`nexus-ui-button-${getId()}`);
  React.useEffect(() => {
    button.current = new Nexus.Button(elementId.current, { size, state, mode });
    button.current.on("change", (newState: boolean) => {
      onChange(newState);
    });
    return () => {
      button.current.destroy();
    };
  }, []);
  React.useEffect(() => {
    if (button.current === null) return;
    if (!Array.isArray(size)) {
      return;
    }
    console.log("resizing button");
    button.current.resize(...size);
  }, size);
  React.useEffect(
    () => {
      if (button.current === null) return;
      state ? button.current.turnOn() : button.current.turnOff();
    },
    [state]
  );
  return <div id={elementId.current} />;
});
