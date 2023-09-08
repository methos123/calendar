import React, { Component } from "react";
import moment from "moment";

import Timeline, {
  TimelineHeaders,
  SidebarHeader,
  DateHeader
} from "react-calendar-timeline";

import generateFakeData from "./generate-fake-data";

var keys = {
  groupIdKey: "id",
  groupTitleKey: "title",
  groupRightTitleKey: "rightTitle",
  itemIdKey: "id",
  itemTitleKey: "title",
  itemDivTitleKey: "title",
  itemGroupKey: "group",
  itemTimeStartKey: "start",
  itemTimeEndKey: "end",
  groupLabelKey: "title"
};

export default class App extends Component {
  constructor(props) {
    super(props);

    const { groups, items } = generateFakeData();
    console.log(groups, items);
    const visibleTimeStart = moment().startOf("week").valueOf();
    const visibleTimeEnd = moment().startOf("week").add(7, "day").valueOf();

    this.state = {
      groups,
      items,
      visibleTimeStart,
      visibleTimeEnd,
      unit: "week"
    };
  }

  onPrevClick = () => {
    if (this.state.unit === "week") {
      let newVisibleTimeStart = moment(this.state.visibleTimeStart)
        .add(-1, "week")
        .startOf("week")
        .valueOf();
      let newVisibleTimeEnd = moment(this.state.visibleTimeStart)
        .add(-1, "week")
        .endOf("week")
        .valueOf();
      this.setState({
        visibleTimeStart: newVisibleTimeStart,
        visibleTimeEnd: newVisibleTimeEnd
      });
    }
    if (this.state.unit === "month") {
      let newVisibleTimeStart = moment(this.state.visibleTimeStart)
        .add(-1, "month")
        .startOf("month")
        .valueOf();
      let newVisibleTimeEnd = moment(this.state.visibleTimeStart)
        .add(-1, "month")
        .endOf("month")
        .valueOf();
      this.setState({
        visibleTimeStart: newVisibleTimeStart,
        visibleTimeEnd: newVisibleTimeEnd
      });
    }
    if (this.state.unit === "year") {
      let newVisibleTimeStart = moment(this.state.visibleTimeStart)
        .add(-1, "year")
        .startOf("year")
        .valueOf();
      let newVisibleTimeEnd = moment(this.state.visibleTimeStart)
        .add(-1, "year")
        .endOf("year")
        .valueOf();
      this.setState({
        visibleTimeStart: newVisibleTimeStart,
        visibleTimeEnd: newVisibleTimeEnd
      });
    }
  };

  onNextClick = () => {
    if (this.state.unit === "week") {
      let newVisibleTimeStart = moment(this.state.visibleTimeStart)
        .add(1, "week")
        .startOf("week")
        .valueOf();
      let newVisibleTimeEnd = moment(this.state.visibleTimeStart)
        .add(1, "week")
        .endOf("week")
        .valueOf();
      this.setState((state) => ({
        visibleTimeStart: newVisibleTimeStart,
        visibleTimeEnd: newVisibleTimeEnd
      }));
    }
    if (this.state.unit === "month") {
      let newVisibleTimeStart = moment(this.state.visibleTimeStart)
        .add(1, "month")
        .startOf("month")
        .valueOf();
      let newVisibleTimeEnd = moment(this.state.visibleTimeStart)
        .add(1, "month")
        .endOf("month")
        .valueOf();
      this.setState((state) => ({
        visibleTimeStart: newVisibleTimeStart,
        visibleTimeEnd: newVisibleTimeEnd
      }));
    }
    if (this.state.unit === "year") {
      let newVisibleTimeStart = moment(this.state.visibleTimeStart)
        .add(1, "year")
        .startOf("year")
        .valueOf();
      let newVisibleTimeEnd = moment(this.state.visibleTimeStart)
        .add(1, "year")
        .endOf("year")
        .valueOf();
      this.setState((state) => ({
        visibleTimeStart: newVisibleTimeStart,
        visibleTimeEnd: newVisibleTimeEnd
      }));
    }
  };

  handleTimeChange = (visibleTimeStart, visibleTimeEnd) => {
    this.setState({
      visibleTimeStart,
      visibleTimeEnd,
      scrolling: true
    });
  };

  handleTimeHeaderChange = (unit) => {
    this.setState({ unit: unit });
    if (unit === "week") {
      this.setState({
        visibleTimeStart: moment().startOf("week").valueOf()
      });
      this.setState({
        visibleTimeEnd: moment().endOf("week").valueOf()
      });
    }
    if (unit === "month") {
      this.setState({
        visibleTimeStart: moment().startOf("month").valueOf()
      });
      this.setState({
        visibleTimeEnd: moment().endOf("month").valueOf()
      });
    }
    if (unit === "day") {
      this.setState({
        visibleTimeStart: moment().startOf("day").valueOf()
      });
      this.setState({
        visibleTimeEnd: moment().endOf("day").valueOf()
      });
    }
  };

  render() {
    const { groups, items, visibleTimeStart, visibleTimeEnd } = this.state;

    return (
      <div>
        {/* <button onClick={this.onPrevClick}>{"< Prev"}</button>
        <button onClick={this.onNextClick}>{"Next >"}</button> */}
        <button onClick={() => this.handleTimeHeaderChange("week")}>
          {"Week"}
        </button>
        <button onClick={() => this.handleTimeHeaderChange("month")}>
          {"Month"}
        </button>
        <button onClick={() => this.handleTimeHeaderChange("day")}>
          {"Day"}
        </button>
        <Timeline
          scrollRef={(el) => (this.scrollRef = el)}
          groups={groups}
          items={items}
          keys={keys}
          itemTouchSendsClick={false}
          stackItems
          itemHeightRatio={0.75}
          showCursorLine
          canMove={false}
          canResize={false}
          visibleTimeStart={visibleTimeStart}
          visibleTimeEnd={visibleTimeEnd}
          onTimeChange={this.handleTimeChange}
        >
          <TimelineHeaders style={{ backgroundColor: "blue" }}>
            <DateHeader unit="primaryHeader" />
            <DateHeader />
          </TimelineHeaders>
        </Timeline>
      </div>
    );
  }
}
