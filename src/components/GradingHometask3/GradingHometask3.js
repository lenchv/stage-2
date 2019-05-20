import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { isEqual } from "lodash";
import { roundToTwoDecimals } from "../../utils";
import Chart from "chart.js";
import "chartjs-plugin-dragdata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCopy, faUndo } from "@fortawesome/pro-regular-svg-icons";
import { faQuestionCircle } from "@fortawesome/pro-solid-svg-icons";
import "./GradingHometask3.css";

class GradingHometask3 extends Component {
  constructor() {
    super();
    this.state = {
      labels: [
        "Рабочий сервер",
        "Синтаксис ES6+",
        "Реализация",
        "Использование пакетов",
        "Legacy code"
      ],
      datasets: [{
        label: "You",
        data: [10, 1, 1, 1, 1],
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
        data: [10, 5, 5, 4, 5],
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
            <span className="title"><strong>Как будет оцениватся проект</strong></span>
            <span className="icon">
              <FontAwesomeIcon icon={faChevronRight} fixedWidth />
            </span>
          </label>
          <div className="accordion-body">
            <div className="container">
              <div className="columns">
                <div className="column">
                  Два балла вы получите только за то что я смогу запустить ваш сервер, а вот за остальные придется сражатся. 
                </div>
              </div>
              <small>
                <div className="columns">
                  <div className="column col-4">
                    <div className="panel">
                      <div className="panel-header">
                        <div className="panel-title">
                          <h6>
                            <strong>Рабочий сервер</strong>
                            <span className="text-gray"><small>#1</small></span>
                          </h6>
                        </div>
                      </div>
                      <div className="panel-body">
                        <p>Так как для многих из вас эта технология является новой, 10 баллов в этой категории получит любой, кто сдаст просто рабочий сервер</p>
                      </div>
                    </div>
                  </div>
                  <div className="column col-4">
                    <div className="panel">
                      <div className="panel-header">
                        <div className="panel-title">
                          <h6>
                            <strong>Синтаксис ES6+</strong>
                            <span className="text-gray"><small>#2</small></span>
                          </h6>
                        </div>
                      </div>
                      <div className="panel-body">
                        <p>Отдельный респект за использование <code>const</code>, <code>let</code>, <code>() => {}</code> и <code>destructurization</code> в коде</p>
                      </div>
                    </div>
                  </div>
                  <div className="column col-4">
                    <div className="panel">
                      <div className="panel-header">
                        <div className="panel-title">
                          <h6>
                            <strong>Реализация</strong>
                            <span className="text-gray"><small>#3</small></span>
                          </h6>
                        </div>
                      </div>
                      <div className="panel-body">
                        За реализацию запроса 2 балла в этой категории <code>"5 запросов" === "10 баллов"</code>.
                      </div>
                    </div>
                  </div>
                  <div className="column col-4">
                    <div className="panel">
                      <div className="panel-header">
                        <div className="panel-title">
                          <h6>
                            <strong>Использование пакетов</strong>
                            <span className="text-gray"><small>#4</small></span>
                          </h6>
                        </div>
                      </div>
                      <div className="panel-body">
                        <p>За любой <b>активно использующийся, а не просто установленный</b> пакет в проекте +1 балл в категории. За пакеты не затронутые в в лекции +2 балла.</p>
                      </div>
                    </div>
                  </div>
                  <div className="column col-4">
                    <div className="panel">
                      <div className="panel-header">
                        <div className="panel-title">
                          <h6>
                            <strong>Legacy code</strong>
                            <span className="text-gray"><small>#5</small></span>
                          </h6>
                        </div>
                      </div>
                      <div className="panel-body">
                        Если эта домашка будет связана с <a href="https://binary-studio-academy.github.io/stage-2/lectures/es6-for-everyone/">предыдущей</a> в один проект, то это просто 🔥 и +5 баллов в категории сразу, остальное зависит от того насколько хорошо реализована связь. 
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

export default GradingHometask3;