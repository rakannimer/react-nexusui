# React NexusUI

React component wrappers for the [NexusUI](https://github.com/nexus-js/ui/) HTML5 Web Audio interfaces.

- [React NexusUI](#react-nexusui)
  - [Install](#install)
  - [Usage](#usage)
  - [Demo](#demo)
  - [API](#api)
    - [Core](#core)
      - [Button](#button)
      - [Dial](#dial)
      - [Number](#number)
      - [Position](#position)
      - [Slider](#slider)
      - [Toggle](#toggle)
    - [General](#general)
      - [Envelope](#envelope)
      - [Multislider](#multislider)
      - [Piano](#piano)
      - [RadioButton](#radiobutton)
      - [Select](#select)
      - [Sequencer](#sequencer)
      - [TextButton](#textbutton)
    - [Mobile](#mobile)
      - [Tilt](#tilt)
    - [Spatialization](#spatialization)
      - [Pan](#pan)
      - [Pan2D](#pan2d)

## Install 

```sh
npm i nexusui react-nexusui
```

## Usage

```typescript
import { TextButton, Dial } from 'react-nexusui';

function App(){
  return <div>
    <TextButton text="Click me" onChange={console.log} />
  </div>
}
```

## Demo

- [Source code](/demo/index.tsx)

- [Output](https://react-nexusui-demo.surge.sh/)

## API 

Check http://nexus-js.github.io/ui/api/ 

### Core

#### Button 

```typescript
type ButtonProps = {
  size?: [number, number];
  mode?: "button" | "aftertouch" | "impulse" | "toggle";
  state?: boolean | number;
  onChange?: (state: boolean | number) => any;
  onReady?: (button: Nexus.Button) => any;
}
```

#### Dial 

```typescript
type DialProps = {
  size?: [number, number];
  interaction?: "radial" | "vertical" | "horizontal";
  mode?: "absolute" | "relative";
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => any;
  onReady?: (dial: Nexus.Dial) => any;
}
```

#### Number

```typescript
type NumberProps = {
  size?: [number, number];
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => any;
  onReady?: (number: Nexus.Number) => any;
};
```

#### Position

```typescript
type PositionProps = {
  size?: [number, number];
  mode?: "absolute" | "relative";
  x?: number;
  y?: number;
  minX?: number;
  minY?: number;
  maxX?: number;
  maxY?: number;
  stepX?: number;
  stepY?: number;
  onChange?: (value: { x: number; y: number }) => any;
  onReady?: (position: Nexus.Position) => any;
};
```


#### Slider

```typescript
export type SliderProps = {
  size?: [number, number];
  mode?: "absolute" | "relative";
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => any;
  onReady?: (slider: Nexus.Slider) => any;
};
```

#### Toggle

```typescript
export type ToggleProps = {
  size?: [number, number];
  mode?: "absolute" | "relative";
  min?: number;
  max?: number;
  step?: number;
  value?: number;
  onChange?: (value: number) => any;
  onReady?: (slider: Nexus.Toggle) => any;
};
```

### General

#### Envelope

```typescript
type EnvelopeProps = {
  size?: [number, number];
  noNewPoints?: boolean;
  points?: { x: number; y: number }[];
  onChange?: (points: { x: number; y: number }[]) => any;
  onReady?: (envelope: Nexus.Envelope) => any;
};
```

#### Multislider

```typescript
type MultisliderProps = {
  size?: [number, number];
  numberOfSliders?: number;
  min?: number;
  max?: number;
  step?: number;
  candycane?: number;
  values?: number[];
  smoothing?: number;
  mode?: "bar" | "line";
  onChange?: (change: { index: number; value: number }) => any;
  onReady?: (multislider: Nexus.Multislider) => any;
};
```

#### Piano

```typescript
type PianoProps = {
  size?: [number, number];
  mode?: "button" | "toggle" | "impulse";
  lowNote?: number;
  highNote?: number;
  onChange?: (change: { note: number; state: boolean }) => any;
  onReady?: (piano: Nexus.Piano) => any;
};
```

#### RadioButton

```typescript
type RadioButtonProps = {
  size?: [number, number];
  numberOfButtons?: number;
  active?: number;
  onReady?: (button: Nexus.RadioButton) => any;
  onChange?: (change: number) => any;
};
```

#### Select

```typescript
type SelectProps = {
  size?: [number, number];
  options: string[];
  value?: string;
  selectedIndex?: number;
  onReady?: (select: Nexus.Select) => any;
  onChange?: (change: { value: string; index: number }) => any;
};

```

#### Sequencer

```typescript
type SequencerProps = {
  size?: [number, number];
  mode?: ButtonProps["mode"];
  rows?: number;
  columns?: number;
  onChange?: (change: { row: number; column: number; state: boolean }) => any;
  onStep?: (change: boolean[]) => any;
  onReady?: (select: Nexus.Sequencer) => any;
};
```

#### TextButton

```typescript
type TextButtonProps = {
  size?: [number, number];
  state?: boolean;
  text?: string;
  alternateText?: string;
  onChange?: (change: string) => any;
  onReady?: (textbutton: Nexus.TextButton) => any;
};
```

### Mobile

#### Tilt

```typescript
type TiltProps = {
  size?: [number, number];
  active?: boolean;
  onChange?: (change: { x: number; y: number; z: number }) => any;
  onReady?: (tilt: Nexus.Tilt) => any;
};
```

### Spatialization

#### Pan

```typescript
type PanProps = {
  size?: [number, number];
  value?: number;
  onChange?: (change: { value: number; L: number; R: number }) => any;
  onReady?: (pan: Nexus.Pan) => any;
};
```

#### Pan2D

```typescript
type Pan2DProps = {
  size?: [number, number];
  range?: number;
  mode?: "absolute" | "relative";
  speakers?: [number, number][];
  onChange?: (change:  number[]) => any;
  onReady?: (pan: Nexus.Pan2D) => any;
};
```