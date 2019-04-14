import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/pro-regular-svg-icons";
import { faQuestionCircle } from "@fortawesome/pro-solid-svg-icons";
import { RadarChart } from "../";
import "./GradingHometask1.css";

const GradingHometask1 = props => (
  <div className="grading-hometask">
    <div className="accordion">
      <input type="checkbox" id="grading-hometask" name="accordion-checkbox" hidden />
      <label className="accordion-header" for="grading-hometask">
        <FontAwesomeIcon icon={faQuestionCircle} />
        <span className="title"><strong>Як буде оцінюватися проект?</strong></span>
        <span className="icon">
          <FontAwesomeIcon icon={faChevronRight} fixedWidth />
        </span>
      </label>
      <div className="accordion-body">
        <RadarChart />
        <ul>
          <li>
            <h6>Repository management</h6>
            <div>
              (Repository & projects) Репозиторій створений і проекти заведені. Окрім того, можна вказати більше топіків, але ніяк не менше, аніж той список, що вказаний у завданні — бот очевидно по них буде ходити. Також студенти теж зможуть шукати по тих тегах у GitHub'і, щоб побачити чим займаються інші студенти.
            </div>
          </li>
          <li>
            <h6>Project management</h6>
            <div>
              (Tasks & Issues) Вміння добре складати завдання, чітко описувати проблеми, звітувати про їх вирішення допоможуть знайти спільну мову з проджект-менеджером замовника, якщо студент коли-небудь буде працювати в аутсорсі або фрілансі (а коли-небудь він буде). В світі open source більшість корисних розмов та інформація щодо вирішення проблем знаходиться якраз в Issues і розуміти як це працює — запорука успіху. Тепер це ваш Google (ну може ще трошки StackOverflow). Google все ще корисний для швидкого старту роботи з технологією, але коли щось пішло не так, то шукати спочатку треба ближче до коду тої технології і її документації, а    вже потім по всій мережі.
            </div>
          </li>
          <li>
            <h6><code>git</code></h6>
            <div></div>
          </li>
          <li>
            <h6>GitFlow</h6>
            <div>
              (Branches & Commits) Розділяючи свою роботу на багато гілок, можна швидко і вправно виправляти баги на сервері, мати окремо стабільну версію (`release`), яка готова до релізу (шляхом злиття в `master`), а також ще версію, в якій ведеться основна розробка (`develop`). А в єдиній гілці нє.
              (Pull Requests) Мерджіть свої гілки pull request-ами, бо так треба. І потім, так можна частково зняти з себе відповідальність, адже той, хто approve-нув поганий код, допустив не меншу помилку, аніж той, хто його написав.
            </div>
          </li>
          <li>
            <h6>HTML/CSS/JS and copy-pasting skills</h6>
            <div></div>
          </li>
          <li>
            <h6>Creativity, attention to details, UI/UX</h6>
            <div>hey</div>
          </li>
        </ul>
        <p>
        5. **GitHub Pages**  
    Клікнути на лінк завжди легше, аніж скачувати репозиторій і відкривати файл на власному комп'ютері. Бонуси нараховуються тим, хто подарує перевіряючому таку зручність.
  6. **Does it look like a resume?**  
    «Якщо воно виглядає як качка, плаває як качка і крякає як качка, то це напевно качка».
  7. **W3C HTML validation and Lighthouse audit**  
    Валідна HTML-розмітки ― це не так вже й складно. Не обов'язково на всі 100%, десь тут і там валідатор може мати зауваження і це окей.
  8. **CSS seems legit**  
    Мати хороший CSS можна лиш у випадку, якщо вміти його писати, або якщо його написав хтось інший, хто вміє. Таким чином, варто доповнювати CSS із фреймворку такими своїми правилами, у яких впевнені. Перебивати правила фреймворку, використовуючи `!important`, не буде вважатись за помилку, але по можливості таких ситуацій теж було б варто уникати.
  9. **Make homepage great!**  
    Метою проекту є зробити домашню сторінку — доступну, інформативну, зручну, читабельну. Бонуси нараховуються тим, хто зміг.
  10. **Beautiful! Gorgeous! Amazing!**  
      І ще один останній бал для тих, у кого це все ще й гарно виглядає.
      </p>
      </div>
    </div>
  </div>
);

export default GradingHometask1;