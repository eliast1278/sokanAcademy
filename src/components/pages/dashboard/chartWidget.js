import React, { Component } from "react";
import * as am4core from "@amcharts/amcharts4/core";
import * as am4charts from "@amcharts/amcharts4/charts";
import am4themes_animated from "@amcharts/amcharts4/themes/animated";

am4core.useTheme(am4themes_animated);

class ChartWidget extends Component {
  componentDidMount() {
    this.createChart();
  }
  createChart = () => {
    let chart = am4core.create("chartdiv", am4charts.XYChart);

    let data = [];
    let value = 10;
    for (var i = 0; i < 10; i++) {
      let date = new Date();
      date.setHours(0, 0, 0, 0);
      date.setDate(i);
      value -= Math.round((Math.random() < 0.5 ? 1 : -1) * Math.random() * 10);
      data.push({ date: date, value: value });
    }

    chart.data = data;
    chart.logo.height = -50000;
    // Create axes
    let dateAxis = chart.xAxes.push(new am4charts.DateAxis());
    dateAxis.renderer.minGridDistance = 2000;

    let valueAxis = chart.yAxes.push(new am4charts.ValueAxis());

    // Create series
    let series = chart.series.push(new am4charts.LineSeries());
    series.dataFields.valueY = "value";
    series.dataFields.dateX = "date";
    series.stroke = am4core.color("#3751FF");
    series.strokeWidth = 3; // 3px
    series.tensionX = 0.65;
    series.tensionY = 0.9;
    series.fillOpacity = 0.8;
    series.tooltipText = valueAxis;

    let fillModifier = new am4core.LinearGradientModifier();
    fillModifier.opacities = [0.7, 0];
    fillModifier.offsets = [0, 0.7];
    fillModifier.gradient.rotation = 90;
    series.segments.template.fillModifier = fillModifier;
  };
  render() {
    return (
      <div className=" chart-widget">
        <div id="chartdiv" style={{ height: "500px", width: "100%" }}></div>
      </div>
    );
  }
}

export default ChartWidget;
