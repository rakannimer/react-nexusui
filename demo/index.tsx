//@ts-ignore
import { Nexus } from "nexusui";
import * as React from "react";
import { render } from "react-dom";
import {
  Button,
  Toggle,
  Dial,
  Number,
  Position,
  Slider,
  Envelope,
  Multislider,
  Piano,
  RadioButton,
  Select,
  Sequencer,
  TextButton,
  Tilt,
  Pan,
  Pan2D
} from "../src/";

function TitleAndChildren({ children, title }) {
  return (
    <div>
      <h2>{title}</h2>
      {children}
    </div>
  );
}

function App() {
  const [size, setSize] = React.useState<[number, number]>([100, 30]);
  const [state, setState] = React.useState(false);
  const sequencerRef = React.useRef<null | Nexus.Sequencer>(null);
  return (
    <div>
      <section>
        <h2>Core</h2>
        <div style={{ display: "flex" }}>
          <TitleAndChildren title={"Toggle"}>
            <Toggle size={size} state={state} />
          </TitleAndChildren>
          <TitleAndChildren title={"Button"}>
            <Button size={size} mode={"button"} state={state} />
          </TitleAndChildren>
          <TitleAndChildren title={"Dial"}>
            <Dial
              interaction={"radial"}
              onChange={console.log}
              value={Math.random()}
              min={0}
              max={10}
            />
          </TitleAndChildren>
          <TitleAndChildren title={"Button"}>
            <Number step={1} min={0} max={10} value={4} />
          </TitleAndChildren>
          <TitleAndChildren title="Position">
            <Position onChange={console.log} />
          </TitleAndChildren>
          <TitleAndChildren title="Slider">
            <Slider size={[120, 20]} onChange={console.log} />
          </TitleAndChildren>
        </div>
      </section>
      <section>
        <h2>General</h2>
        <div style={{ display: "flex" }}>
          <TitleAndChildren title="Envelope">
            <Envelope points={[{ x: 0.1, y: 0.4 }]} />
          </TitleAndChildren>
          <TitleAndChildren title="Multislider">
            <Multislider
              size={[200, 100]}
              numberOfSliders={5}
              min={0}
              max={1}
              step={0}
              candycane={3}
              values={[0.9, 0.8, 0.7, 0.6, 0.5, 0.4, 0.3, 0.2, 0.1]}
              smoothing={0}
              mode={"bar"}
              onChange={console.warn}
            />
          </TitleAndChildren>
          <TitleAndChildren title={"Piano"}>
            <Piano
              size={[500, 125]}
              mode={"button"}
              lowNote={24}
              highNote={60}
              onReady={nexusPiano => {
                // console.warn(nexusPiano);
              }}
            />
          </TitleAndChildren>
          <TitleAndChildren title="RadioButton">
            <RadioButton
              size={[180, 25]}
              numberOfButtons={4}
              onChange={active => {
                console.warn({ active });
              }}
            />
          </TitleAndChildren>
          <TitleAndChildren title="Select">
            <Select options={["default", "options"]} value={"options"} />
          </TitleAndChildren>
          <TitleAndChildren title="Sequencer">
            <Sequencer
              rows={5}
              columns={10}
              size={[400, 200]}
              onStep={console.warn}
              onReady={sequencer => (sequencerRef.current = sequencer)}
            />
            <div>
              <button
                onClick={() => {
                  sequencerRef.current.start(500);
                }}
              >
                Play Sequencer
              </button>
              <button
                onClick={() => {
                  sequencerRef.current.stop(500);
                }}
              >
                Stop Sequencer
              </button>
            </div>
          </TitleAndChildren>
          <TitleAndChildren title={"TextButton"}>
            <TextButton text={"Hi"} state={false} />
            <TextButton text={"Hi"} alternateText={"Bye"} state={true} />
          </TitleAndChildren>
        </div>
        <div>
          <h2>Mobile</h2>
          <div style={{ display: "flex" }}>
            <TitleAndChildren title={"Tilt"}>
              <Tilt
                size={[200, 100]}
                active={true}
                onChange={tilt => {
                  console.log("Tilt changed", tilt);
                }}
              />
            </TitleAndChildren>
          </div>
        </div>
        <div>
          <h2>Spatialization</h2>
          <div style={{ display: "flex" }}>
            <TitleAndChildren title={"Pan"}>
              <Pan value={0} />
            </TitleAndChildren>
            <TitleAndChildren title={"Pan2D"}>
              <Pan2D onChange={console.warn} />
            </TitleAndChildren>
          </div>
        </div>
        <div />
      </section>
    </div>
  );
}

render(<App />, document.getElementById("app"));
