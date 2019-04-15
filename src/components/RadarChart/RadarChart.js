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
          "Bonus points",
        ],
        datasets: [{
          label: "You",
          data: [5, 5, 5, 5, 5, 5],
          borderColor: "rgba(0, 173, 238, 1)",
          backgroundColor: "rgba(0, 173, 238, 0.125)",
          pointBorderColor: "white",
          pointBackgroundColor: context => context.dataIndex % 2 === 0 ? "rgb(255, 199, 18)" : "rgb(236, 24, 72)",
          pointHoverBorderColor: "white",
          pointRadius: 5,
          pointHoverRadius: 8,
          pointBorderWidth: 3,
          pointHoverBorderWidth: 3
        }, {
          label: "Joe Average",
          data: [5, 5, 5, 5, 5, 5],
          borderColor: "rgba(0, 0, 0, 0.1)",
          backgroundColor: "rgba(0, 0, 0, 0.05)",
          pointRadius: 0,
          pointHitRadius: 0,
          pointHoverRadius: 0
        }]
      },
      options: {
        aspectRatio: 1,
        dragData: true,
        dragDataRound: 0,
        layout: {
          padding: {
            left: 16,
            right: 16,
            top: 16,
            bottom: 16
          }
        },
        legend: {
          display: false
        },
        maintainAspectRatio: false,
        scale: {
          ticks: {
            max: 10,
            min: 0,
            stepSize: 1,
            fontSize: 13,
            fontStyle: "bold",
            fontColor: "#999999"
          },
          pointLabels: {
            fontSize: 16,
            fontStyle: "bold"
          }
        },
        scaleLabel: {
          display: false
        },
        tooltips: {
          enabled: false
        }
      }
    }
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