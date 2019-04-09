import * as React from "react";
//@ts-ignore
import * as Nexus from "nexusui";

import { PositionProps } from "../types";
import { getId, NO_OP } from "../utils";
import { DEFAULT_SIZE } from "../constants";

export const Position = React.memo(function Position({
  size = DEFAULT_SIZE,
  x,
  y,
  minX,
  minY,
  maxX,
  maxY,
  stepX,
  stepY,
  onChange = NO_OP,
  onReady = NO_OP
}: PositionProps) {
  let position = React.useRef<null | Nexus.Position>(null);
  let elementId = React.useRef(`nexus-ui-position-${getId()}`);
  React.useEffect(() => {
    position.current = new Nexus.Position(elementId.current, {
      size,
      x,
      y,
      minX,
      minY,
      maxX,
      maxY,
      stepX,
      stepY
    });
    onReady(position.current);
    position.current.on("change", (newState: { x: number; y: number }) => {
      onChange(newState);
    });
    return () => {
      position.current.destroy();
    };
  }, []);
  React.useEffect(() => {
    if (position.current === null) return;
    if (!Array.isArray(size)) {
      return;
    }
    position.current.resize(...size);
  }, size);

  React.useEffect(
    () => {
      if (position.current === null) return;
      if (minX === undefined) return;

      position.current.minX = minX;
    },
    [minX]
  );
  React.useEffect(
    () => {
      if (position.current === null) return;
      if (minY === undefined) return;

      position.current.minY = minY;
    },
    [minY]
  );
  React.useEffect(
    () => {
      if (position.current === null) return;
      if (maxX === undefined) return;

      position.current.maxX = maxX;
    },
    [maxX]
  );
  React.useEffect(
    () => {
      if (position.current === null) return;
      if (maxY === undefined) return;

      position.current.maxY = maxY;
    },
    [maxY]
  );
  React.useEffect(
    () => {
      if (position.current === null) return;
      if (stepX === undefined) return;

      position.current.stepX = stepX;
    },
    [stepX]
  );
  React.useEffect(
    () => {
      if (position.current === null) return;
      if (stepY === undefined) return;

      position.current.stepY = stepY;
    },
    [stepY]
  );
  React.useEffect(
    () => {
      if (position.current === null) return;
      if (x === undefined) return;
      position.current.x = x;
    },
    [x]
  );
  React.useEffect(
    () => {
      if (position.current === null) return;
      if (y === undefined) return;
      position.current.y = y;
    },
    [y]
  );
  return <div id={elementId.current} />;
});
