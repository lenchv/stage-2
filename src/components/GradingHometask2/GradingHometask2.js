import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { isEqual } from "lodash";
import { roundToTwoDecimals } from "../../utils";
import Chart from "chart.js";
import "chartjs-plugin-dragdata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCopy, faUndo } from "@fortawesome/pro-regular-svg-icons";
import { faQuestionCircle } from "@fortawesome/pro-solid-svg-icons";
import "./GradingHometask2.css";

class GradingHometask2 extends Component {
  constructor() {
    super();
    this.state = {
      labels: [
        "Matching requirements",
        "Usage of ES features",
        "UI / UX",
        "Readability / Reusability",
        "\"wow\"-factor"
      ],
      datasets: [{
        label: "You",
        data: [2, 10, 3, 10, 4],
        dragData: true,
        borderColor: "rgba(0, 173, 238, 1)",
        backgroundColor: "rgba(0, 173, 238, 0.125)",
        pointBorderColor: "white",
        pointBackgroundColor: context => context.dataIndex % 2 === 0 ? "rgb(255, 199, 18)" : "rgb(236, 24, 72)",
        pointHoverBorderColor: "white",
        pointRadius: 5,
        pointHoverRadius: 8,
        pointBorderWidth: 3,
        pointHoverBorderWidth: 3,
        pointHitRadius: 30
      }, {
        label: "Joe Average",
        data: [2, 10, 3, 10, 4],
        dragData: false,
        borderColor: "rgba(0, 0, 0, 0.1)",
        backgroundColor: "rgba(0, 0, 0, 0.05)",
        pointRadius: 0,
        pointHitRadius: 0,
        pointHoverRadius: 0
      }]
    }
    this.createOptions = this.createOptions.bind(this);
    this.resetMyGrades = this.resetMyGrades.bind(this);
  }

  createOptions() {
    return {
      type: "radar",
      data: { ...this.state },
      options: {
        aspectRatio: 1,
        dragData: true,
        dragDataRound: 0,
        onDragEnd: (event, datasetIndex, index, value) => this.setState(state => {
          const newState = { ...state };
          newState.datasets[datasetIndex].data = [
            ...state.datasets[datasetIndex].data.slice(0, index),
            value,
            ...state.datasets[datasetIndex].data.slice(index + 1)
          ];
          return newState;
        }),
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
  }

  componentDidMount() {
    this.chart = new Chart(this.el.getContext("2d"), this.createOptions());
  }
    
  componentDidUpdate() {
    if (this.chart) {
      this.chart.update(this.createOptions());
    }
  }

  resetMyGrades() {
    this.setState(state => {
      const newState = { ...state };
      newState.datasets[0].data = [...state.datasets[1].data];
      return newState;
    });
  }
  
  render() {
    const myGrades = this.state.datasets[0].data;
    const myGradesAverage = myGrades.reduce((memo, value) => memo += value, 0) / myGrades.length;
    const defaultGrades = this.state.datasets[1].data;
    const areMyGradesDefault = isEqual(myGrades, defaultGrades);
    return (
      <div className="grading-hometask">
        <div className="accordion">
          <input type="checkbox" id="grading-hometask" name="accordion-checkbox" hidden />
          <label className="accordion-header" htmlFor="grading-hometask">
            <FontAwesomeIcon icon={faQuestionCircle} />
            <span className="title"><strong>Як буде оцінюватися проект</strong></span>
            <span className="icon">
              <FontAwesomeIcon icon={faChevronRight} fixedWidth />
            </span>
          </label>
          <div className="accordion-body">
            <div className="container">
              <div className="columns">
                <div className="column">
                  Завдання комплексне, тому й оцінюватися буде в п'яти напрямках, а середнє арифметичне тих п'яти чисел і буде кінцевою оцінкою:
                </div>
              </div>
              <small>
                <div className="columns">
                  <div className="column col-4">
                    <div className="panel">
                      <div className="panel-header">
                        <div className="panel-title">
                          <h6>
                            <strong>Matching requirements</strong>
                            <span className="text-gray"><small>#1</small></span>
                          </h6>
                        </div>
                      </div>
                      <div className="panel-body">
                        <p>Впровадьте всі необхідні features і постарайтеся виловити з них всі баги.</p>
                      </div>
                    </div>
                  </div>
                  <div className="column col-4">
                    <div className="panel">
                      <div className="panel-header">
                        <div className="panel-title">
                          <h6>
                            <strong>Usage of ES features</strong>
                            <span className="text-gray"><small>#2</small></span>
                          </h6>
                        </div>
                      </div>
                      <div className="panel-body">
                        <p><code>rest</code>, <code>spread</code>, <code>const</code>, <code>let</code>, тощо. Є в коді <code>var</code>? Є мінус бал. Пам-пам! 😆</p>
                      </div>
                    </div>
                  </div>
                  <div className="column col-4">
                    <div className="panel">
                      <div className="panel-header">
                        <div className="panel-title">
                          <h6>
                            <span>
                              <strong>UI</strong>
                              <span style={{ fontWeight: 300 }}> / </span>
                              <span style={{ fontWeight: 900 }}>UX</span>
                            </span>
                            <span className="text-gray"><small>#3</small></span>
                          </h6>
                        </div>
                      </div>
                      <div className="panel-body">
                        Якось нормально воно все має бути. Клацнув кнопку — запустився бій.
                      </div>
                    </div>
                  </div>
                  <div className="column col-4">
                    <div className="panel">
                      <div className="panel-header">
                        <div className="panel-title">
                          <h6>
                            <span>
                              <strong>Readability</strong>
                              <span style={{ fontWeight: 300 }}> / </span>
                              <span style={{ fontWeight: 900 }}>Reusability</span>
                            </span>
                            <span className="text-gray"><small>#4</small></span>
                          </h6>
                        </div>
                      </div>
                      <div className="panel-body">
                        <a href="https://en.wikipedia.org/wiki/KISS_principle">Keep it simple, stupid</a>, <a href="https://en.wikipedia.org/wiki/Don%27t_repeat_yourself">don't repeat yourself</a>. Охайним код повинен бути, чистим.
                      </div>
                    </div>
                  </div>
                  <div className="column col-4">
                    <div className="panel">
                      <div className="panel-header">
                        <div className="panel-title">
                          <h6>
                            <strong><span role="img" aria-label="wow">🤯</span> "wow"-factor</strong>
                            <span className="text-gray"><small>#5</small></span>
                          </h6>
                        </div>
                      </div>
                      <div className="panel-body">
                        Творчість, старанність, увага до деталей, гумор, оригінальність, "што-о-о-о?!".
                      </div>
                    </div>
                  </div>
                </div>
              </small>
            </div>
            <div className="radar-chart">
              <canvas ref={el => this.el = el} />
              {
                !areMyGradesDefault &&
                <button className="reset-grades" onClick={this.resetMyGrades}>
                  <FontAwesomeIcon icon={faUndo} className="icon" /> Reset
                </button>
              }
              <CopyToClipboard text={roundToTwoDecimals(myGradesAverage)}>
                <button className="final-grade">
                  {roundToTwoDecimals(myGradesAverage)}
                  <FontAwesomeIcon icon={faCopy} className="icon" />
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GradingHometask2;