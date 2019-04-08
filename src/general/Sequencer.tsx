import * as React from "react";
//@ts-ignore
import * as Nexus from "nexusui";
import { SequencerProps, SequencerChange } from "../types";
import { getId } from "../utils";

export const Sequencer = React.memo(function Sequencer(
  {
    size = [400, 200],
    mode = "toggle",
    rows = 5,
    columns = 10,
    onChange = () => {},
    onStep = () => {},
    onReady = () => {}
  }: SequencerProps,
  ref
) {
  let sequencer = React.useRef<null | Nexus.Sequencer>(null);
  let elementId = React.useRef(`nexus-ui-sequencer-${getId()}`);
  React.useEffect(() => {
    //@ts-ignore
    window.Nexus = Nexus; // Hack because Sequencer uses Nexus.Interval
    sequencer.current = new Nexus.Sequencer(elementId.current, {
      size,
      mode,
      columns,
      rows
    });
    onReady(sequencer.current);
    sequencer.current.on("change", (newState: SequencerChange) => {
      onChange(newState);
    });
    sequencer.current.on("step", (newState: boolean[]) => {
      onStep(newState);
    });
    return () => {
      sequencer.current.destroy();
    };
  }, []);
  React.useEffect(() => {
    if (sequencer.current === null || !Array.isArray(size)) return;
    sequencer.current.resize(...size);
  }, size);
  React.useEffect(
    () => {
      if (sequencer.current === null) return;
      sequencer.current.columns = columns;
    },
    [columns]
  );
  React.useEffect(
    () => {
      if (sequencer.current === null) return;
      sequencer.current.rows = rows;
    },
    [rows]
  );
  return <div id={elementId.current} />;
});
