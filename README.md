# React NexusUI

Thin, typed React component wrappers for the [NexusUI](https://github.com/nexus-js/ui/) HTML5 Web Audio interfaces.

## Install 

```sh
npm i nexusui react-nexusui
```

## Usage

```typescript
import {TextButton, Dial} from 'react-nexusui';

function App(){
  return <div>
    <TextButton text="Click me" onChange={console.log} />
  </div>
}
```

- [React NexusUI](#react-nexusui)
  - [Install](#install)
  - [Usage](#usage)
  - [Components](#components)
    - [Core](#core)
    - [General](#general)
    - [Mobile](#mobile)
    - [Spatialization](#spatialization)
    - [Visualization](#visualization)
  - [API](#api)
    - [Button](#button)
      - [size](#size)
      - [mode](#mode)
      - [state](#state)
      - [onChange](#onchange)
      - [onReady](#onready)


## Components

### Core 

- [x] Button
- [x] Dial
- [x] Number
- [x] Position
- [x] Slider
- [x] Toggle

### General

- [x] Envelope
- [x] Multislider
- [x] Piano
- [x] RadioButton
- [x] Select
- [x] Sequencer
- [x] TextButton

### Mobile

- [x] Tilt

### Spatialization

- [x] Pan
- [x] Pan2D

### Visualization

- [ ] Meter
- [ ] Oscilloscope
- [ ] Spectragram

## API 

Check http://nexus-js.github.io/ui/api/ 

### Button 

#### size 

> [width: number, height: number] ~ optional

An array containing width & height of the element

#### mode

> "button" | "aftertouch" | "impulse" | "toggle" ~ optional

Interaction mode

#### state

> boolean | number ~ optional

#### onChange

> function(state: boolean | number) ~ optional

Called everytime the interface changes

#### onReady

> function(button: Nexus.Button) ~ optional

Use this when you need access to the Nexus interface imperative API.

