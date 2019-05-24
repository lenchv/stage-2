import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import copy from "copy-to-clipboard";
import { isEqual } from "lodash";
import { roundToTwoDecimals } from "../../utils";
import Chart from "chart.js";
import "chartjs-plugin-dragdata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCopy, faUndo } from "@fortawesome/pro-regular-svg-icons";
import { faQuestionCircle } from "@fortawesome/pro-solid-svg-icons";
import "./GradingHometask.css";

class GradingHometask extends Component {
  constructor(props) {
    super();
    const { labels, datasets } = props;
    this.state = { labels, datasets };
    this.createOptions = this.createOptions.bind(this);
    this.resetMyGrades = this.resetMyGrades.bind(this);
    this.copyGradesByCategories = this.copyGradesByCategories.bind(this);
  }

  copyGradesByCategories(grades) {
    const feedbackStarters = [    
      `по категоріях оцінювання цієї домашки отримуєш такі бали: $1.`,
      `по категоріях (4-ий розділ конспекту, радар-чарт під спойлером) бали такі — $1.`,
      `$1 вийшло по категоріях (4-ий розділ конспекту, радар-чарт під спойлером).`,
      `$1 (категорії описані в 4-му розділі конспекту).`,
      `радар-чарт один на всіх (в 4-му розділі в конспекті), тому поїхали по ньому — $1.`,
      `$1 в мене виходить по тих категоріях (там в 4-му розділі конспекту є радар-чарт з категоріями).`,
      `знаєш той чарт в 4-му розділі конспекту, під спойлером? поїхали — $1.`,
      `по категоріях виходить $1 (це ті, що в 4-му розділі конспекту, під спойлером чарт є).`,
      `$1 (спайдервеб-чарт є під спойлером в 4-му розділі конспекту).`,
      `по категоріях з 4-го розділу (там спайдервеб-чарт є під спойлером) — $1.`,
      `окей, в нас там є чарт в 4-му розділі і я все рівно маю по ньому піти — $1.`,
      `$1 по радар-чарту з 4-го розділу конспекту.`,
      `по радар-чарту (4-ий блок, конспект, під спойлером) — $1.`
    ];
    copy(feedbackStarters[Math.floor(Math.random() * (feedbackStarters.length - 1))].replace("$1", grades.join('-')));
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
    const { children } = this.props;
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
            {children}
            <div className="radar-chart">
              <canvas ref={el => this.el = el} />
              {
                !areMyGradesDefault &&
                <button className="reset-grades" onClick={this.resetMyGrades}>
                  <FontAwesomeIcon icon={faUndo} className="icon" /> Reset
                </button>
              }
              <button className="grades-by-categories" onClick={() => this.copyGradesByCategories(myGrades)}>
                <FontAwesomeIcon icon={faCopy} className="icon" />
              </button>
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

export default GradingHometask;