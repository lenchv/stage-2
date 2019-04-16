import React, { Component } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { isEqual } from "lodash";
import { roundToTwoDecimals } from "../../utils";
import Chart from "chart.js";
import "chartjs-plugin-dragdata";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight, faCopy, faUndo } from "@fortawesome/pro-regular-svg-icons";
import { faQuestionCircle } from "@fortawesome/pro-solid-svg-icons";
import "./GradingHometask1.css";

class GradingHometask1 extends Component {
  constructor() {
    super();
    this.state = {
      labels: [
        "Repository management",
        "Project management",
        "git + GitFlow",
        "HTML/CSS/JS",
        "UI/UX",
        "Awesomeness"
      ],
      datasets: [{
        label: "You",
        data: [6, 5, 5, 5, 2, 0],
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
        data: [6, 5, 5, 5, 2, 0],
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

  componentDidUpdate() {
    if (this.chart) {
      this.chart.update(this.createOptions());
    } else {
      this.chart = new Chart(this.el.getContext("2d"), this.createOptions());
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
            <p>Проект буде оцінюватися по шести категоріях </p>
            <div class="accordion">
              <input type="checkbox" id="accordion-1" name="accordion-checkbox" hidden />
              <label class="accordion-header" for="accordion-1">
                <i class="icon icon-arrow-right mr-1"></i>
                <h6>Repository management</h6>
              </label>
              <div class="accordion-body">
                Репозиторій створений, топіки створені, README.md на місці, а GitHub Pages увімкнено. Клікнути на лінк завжди легше, аніж скачувати репозиторій і відкривати файл на власному комп'ютері. Щиро дякуємо тим, хто подарує перевіряючому таку зручність.
              </div>
            </div>


            <ul>
              <li>
                <h6>Repository management</h6>
                <div>
                  Репозиторій створений, топіки створені, README.md на місці, а GitHub Pages увімкнено. Клікнути на лінк завжди легше, аніж скачувати репозиторій і відкривати файл на власному комп'ютері. Щиро дякуємо тим, хто подарує перевіряючому таку зручність.
                </div>
              </li>
              <li>
                <h6>Project management</h6>
                <div>
                  Проекти заведені, таски ведуться, а проблеми описуються. Вміння добре складати завдання, чітко описувати проблеми, звітувати про їх вирішення допоможуть знайти спільну мову з проджект-менеджером замовника, якщо студент коли-небудь буде працювати в аутсорсі або фрілансі (а коли-небудь він буде). В світі open source більшість корисних розмов та інформація щодо вирішення проблем знаходиться якраз в Issues, тому розуміти як це працює — запорука успіху. Тепер це ваш Google (ну, може ще трошки StackOverflow). Google все ще корисний для швидкого старту роботи з технологією, але коли щось пішло не так, то шукати спочатку треба ближче до коду тої технології і її документації, а вже потім по всій мережі.
                </div>
              </li>
              <li>
                <h6><code>git</code> + GitFlow</h6>
                <div>
                  Робота ведеться в декількох гілках, призначення кожної з яких інтуїтивно зрозуміле, а для їх злиття у основну гілку використовуються pull request-и. Розділяючи свою роботу на багато гілок, можна швидко і вправно виправляти баги на сервері, мати окремо стабільну версію (<code>release</code>), яка готова до релізу (шляхом злиття в <code>master</code>), а також ще версію, в якій ведеться основна розробка (<code>develop</code>). А в єдиній гілці нє. Мерджіть свої гілки pull request-ами, бо так треба. І потім, так можна частково зняти з себе відповідальність, адже той, хто approve-нув поганий код, допустив не меншу помилку, аніж той, хто його написав 😁.
                </div>
              </li>
              <li>
                <h6>HTML/CSS/JS</h6>
                <div>
                  Copy-pasting skills. Валідна HTML-розмітка ― це не так вже й складно. Не обов'язково на всі 100%, десь тут і там валідатор може мати зауваження і це окей. Мати хороший CSS можна лиш у випадку, якщо вміти його писати, або якщо його написав хтось інший, хто вміє. Таким чином, варто доповнювати CSS із фреймворку такими своїми правилами, у яких впевнені. Перебивати правила фреймворку, використовуючи `!important`, не буде вважатись за помилку, але по можливості таких ситуацій теж було б варто уникати.
                </div>
              </li>
              <li>
                <h6>UI/UX</h6>
                <div>Метою проекту є зробити домашню сторінку — доступну, інформативну, зручну, читабельну. Бонуси нараховуються тим, хто зміг. І ще один останній бал для тих, у кого це все ще й гарно виглядає.</div>
              </li>
              <li>
                <h6>Awesomeness</h6>
                <div>Creativity, attention to details, humour</div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default GradingHometask1;