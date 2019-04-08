import * as React from "react";
//@ts-ignore
import * as Nexus from "nexusui";
import { RadioButtonProps } from "../types";
import { getId } from "../utils";

export const RadioButton = React.memo(function RadioButton({
  size = [120, 25],
  numberOfButtons = 1,
  active,
  onReady = () => {},
  onChange = () => {}
}: RadioButtonProps) {
  let radiobutton = React.useRef<null | Nexus.RadioButton>(null);
  let elementId = React.useRef(`nexus-ui-radiobutton-${getId()}`);
  React.useEffect(() => {
    radiobutton.current = new Nexus.RadioButton(elementId.current, {
      size,
      numberOfButtons,
      active
    });
    const timeoutid = setTimeout(() => {
      radiobutton.current.resize(...size);
    }, 0);

    onReady(radiobutton.current);
    radiobutton.current.on("change", (newState: number) => {
      onChange(newState);
    });
    return () => {
      radiobutton.current.destroy();
      clearTimeout(timeoutid);
    };
  }, []);
  React.useEffect(() => {
    if (radiobutton.current === null) return;
    if (!Array.isArray(size)) {
      return;
    }
    radiobutton.current.resize(...size);
  }, size);

  React.useEffect(
    () => {
      if (radiobutton.current === null) return;
      radiobutton.current.numberOfButtons = numberOfButtons;
    },
    [numberOfButtons]
  );
  return <div id={elementId.current} />;
});
