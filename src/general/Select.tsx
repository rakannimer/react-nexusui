import * as React from "react";
//@ts-ignore
import * as Nexus from "nexusui";
import { SelectProps, SelectChange } from "../types";
import { getId } from "../utils";

export const Select = React.memo(function Select({
  size = [120, 25],
  options = ["default", "options"],
  value,
  selectedIndex,
  onReady = () => {},
  onChange = () => {}
}: SelectProps) {
  let select = React.useRef<null | Nexus.Select>(null);
  let elementId = React.useRef(`nexus-ui-select-${getId()}`);
  React.useEffect(() => {
    select.current = new Nexus.Select(elementId.current, {
      size,
      options
    });

    onReady(select.current);
    select.current.on("change", (newState: SelectChange) => {
      onChange(newState);
    });
    return () => {
      select.current.destroy();
    };
  }, []);
  React.useEffect(() => {
    if (select.current === null) return;
    if (!Array.isArray(size)) {
      return;
    }
    select.current.resize(...size);
  }, size);
  React.useEffect(
    () => {
      if (value === undefined || select.current === null) return;
      select.current.value = value;
    },
    [value]
  );
  React.useEffect(
    () => {
      if (selectedIndex === undefined || select.current === null) return;
      select.current.selectedIndex = selectedIndex;
    },
    [selectedIndex]
  );
  return <div id={elementId.current} />;
});
