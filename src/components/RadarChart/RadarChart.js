import React, { Component } from "react";
import Chart from "chart.js";
import "chartjs-plugin-dragdata";
import "./RadarChart.css";

class RadarChart extends Component {
  componentDidMount() {
    const options = {
      type: "radar",
      data: {
        labels: [
          "Repository management",
          "Project management",
          "git",
          "GitFlow",
          "HTML/CSS/JS",
          "Creativity, UI/UX"
        ],
        datasets: [{
          label: "You",
          data: [5, 5, 5, 5, 5, 5],
          borderColor: "rgba(0, 173, 238, 1)",
          backgroundColor: "rgba(0, 173, 238, 0.125)",
          pointBorderColor: "white",
          pointBackgroundColor: context => context.dataIndex % 2 === 0 ? "rgb(255, 199, 18)" : "rgb(236, 24, 72)",
          pointHoverBorderColor: "white"
        }, {
          label: "Joe Average",
          data: [5, 5, 5, 5, 5, 5],
          borderColor: "rgba(0, 0, 0, 0.125)",
          backgroundColor: "rgba(0, 0, 0, 0.0625)",
          pointRadius: 0,
          pointHitRadius: 0,
          pointHoverRadius: 0
        }]
      },
      options: {
        aspectRatio: 1,
        dragData: true,
        dragDataRound: 0,
        scale: {
          ticks: {
            max: 10,
            min: 0,
            stepSize: 1
          },
          pointLabels: {
            fontSize: 16
          }
        }
      }
    }
    Chart.defaults.global.defaultFontSize = 16;
    Chart.defaults.global.tooltips.enabled = false;
    Chart.defaults.global.elements.point.borderWidth = 3;
    Chart.defaults.global.elements.point.borderColor = "white";
    Chart.defaults.global.elements.point.radius = 5;
    Chart.defaults.global.elements.point.hoverRadius = 8;
    Chart.defaults.global.elements.point.hoverBorderWidth = 3;
    const ctx = this.el.getContext("2d");
    window.test = new Chart(ctx, options);
  }

  render() {
    return (
      <div className="radar-chart">
        <canvas ref={el => this.el = el} />
      </div>
    );
  }
}

export default RadarChart;