import React from "react";
import { render } from "react-dom";
import CustomTimeline from "./CustomTimeline";
import "react-calendar-timeline/lib/Timeline.css";

const App = () => (
  <div>
    <CustomTimeline />
  </div>
);

render(<App />, document.getElementById("root"));
