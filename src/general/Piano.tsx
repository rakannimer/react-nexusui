import * as React from "react";
//@ts-ignore
import * as Nexus from "nexusui";
import { PianoProps } from "../types";
import { getId } from "../utils";

export const Piano = React.memo(function Piano({
  size = [500, 125],
  mode = "button",
  lowNote = 24,
  highNote = 60,
  onChange = () => {},
  onReady = nexusElement => {}
}: PianoProps) {
  let piano = React.useRef<null | Nexus.Piano>(null);
  let elementId = React.useRef(`nexus-ui-piano-${getId()}`);
  React.useEffect(() => {
    piano.current = new Nexus.Piano(elementId.current, {
      size,
      mode,
      lowNote,
      highNote
    });
    onReady(piano.current);
    piano.current.on("change", (newState: { state: boolean; note: number }) => {
      onChange(newState);
    });
    return () => {
      piano.current.destroy();
    };
  }, []);
  React.useEffect(() => {
    if (piano.current === null) return;
    if (!Array.isArray(size)) {
      return;
    }
    piano.current.resize(...size);
  }, size);
  return <div id={elementId.current} />;
});
