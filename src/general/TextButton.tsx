import * as React from "react";
import * as Nexus from "nexusui";
import { getId, NO_OP } from "../utils";
import { TextButtonProps } from "../types";

export const TextButton = React.memo(function TextButton({
  size,
  onReady = NO_OP,
  onChange = NO_OP,
  state,
  alternateText,
  text
}: TextButtonProps) {
  const elementId = React.useRef(`nexus-ui-textbutton-${getId()}`);
  const textbutton = React.useRef<null | Nexus.TextButton>(null);
  React.useEffect(() => {
    //@ts-ignore
    window.Nexus = Nexus; // Hack because Sequencer uses Nexus.Interval
    textbutton.current = new Nexus.TextButton(elementId.current, {
      size,
      state,
      alternateText,
      text
    });
    onReady(textbutton.current);
    textbutton.current.on("change", (buttonText: string) => {
      onChange(buttonText);
    });
    return () => {
      textbutton.current.destroy();
    };
  }, []);
  React.useEffect(
    () => {
      textbutton.current.state = state;
    },
    [state]
  );
  React.useEffect(
    () => {
      textbutton.current.text = text;
    },
    [text]
  );
  React.useEffect(
    () => {
      textbutton.current.alternateText = alternateText;
    },
    [alternateText]
  );
  return <div id={elementId.current} />;
});
