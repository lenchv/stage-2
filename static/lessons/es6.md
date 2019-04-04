<style>
  /* Elements */
  .lecture-content ol,
  .lecture-content ul {
    margin: 0.5rem 0 0.5rem 0.5rem;
    padding-left: 1em;
  }
  .lecture-content ol {
    list-style: outside decimal;
  }
  .lecture-content ul {
    list-style: outside disc;
  }
  .lecture-content ol li,
  .lecture-content ul li {
    margin-top: .5rem;
  }
  .lecture-content p {
    margin-bottom: .5rem;
  }
  .lecture-content p + blockquote {
    margin-top: -0.25rem;
  }
  .lecture-content blockquote {
    border-left: .1rem solid #dadee4;
    margin-left: 0;
    padding: .25rem .75rem;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }
  .lecture-content pre {
    margin: 0.25rem 0;
  }
  .lecture-content pre code {
    display: block;
    padding: 0.5rem;
  }

  /* Author */
  .lecture-content .author {
    font-size: 14px;
    padding: 1em;
    background: whitesmoke;
    border-radius: 0.5em;
  }

  /* Avatar */
  #avatar-wrapper {
    float: left;
    width: 5em;
    margin-right: 1em;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  #avatar {
    position: relative;
    display: block;
    flex: 1 0 auto;
  }

  /* Contacts */
  .lecture-content .contacts {
    list-style: none outside none;
    display: flex;
    flex-wrap: wrap;
    padding: 0;
    margin-top: 0;
    margin-bottom: 0;
    margin-left: 0;
    white-space: nowrap;
    font-size: 0.9em;
    font-weight: 400;
  }
  .lecture-content .contacts li {
    margin-bottom: 0.25em;
    margin-right: 1em;
    margin-top: 0;
  }
  .lecture-content .contacts li:before {
    display: none;
  }
  .lecture-content .contacts li a {
    color: black;
    transition: color 0.2s ease-in-out;
  }
  .lecture-content .contacts li a:hover {
    text-decoration: none;
  }
  .lecture-content .contacts li a.facebook:hover {
    color: #3b5998;
  }
  .lecture-content .contacts li a.github:hover {
    color: dimgrey;
  }
  .lecture-content .contacts li a.mail:hover {
    color: dimgrey;
  }
  .lecture-content .contacts li a.skype:hover {
    color: #00aff0;
  }
  .lecture-content .contacts li a.phone:hover {
    color: dimgrey;
  }
  .lecture-content .contacts li a.website:hover {
    color: dimgrey;
  }
  .lecture-content .contacts li a .icon {
    fill: currentColor;
    height: 16px;
    vertical-align: bottom;
  }

  /* Profile */
  .lecture-content .profile {
    margin-left: 6em;
  }
  .lecture-content .profile .name {
    margin-bottom: 0;
    font-size: 1.4em;
    line-height: 1.5em;
  }
  .lecture-content .profile .about {
    margin: 0;
  }

  /* Speech bubble */
  .lecture-content .bubble {
    background: linear-gradient(to right, #0084ff, #00c4ff);
    color: white;
    border-radius: 0.25em 1em 1em 1em;
    padding: 0.25em 0.75em;
    margin-top: 0.25rem;
    float: left;
    position: relative;
    overflow: visible;
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out;
  }
  .lecture-content .bubble.small {
    font-size: 0.85em;
  }
  .lecture-content .author + .bubble,
  .lecture-content .bubble:hover {
    opacity: 1;
  }
  .lecture-content .bubble a {
    color: inherit;
  }
  .lecture-content p + div > .bubble:first-child {
    margin-top: -0.25rem;
  }

  /* Messages */
  .lecture-content .message {
    overflow: hidden;
    margin-bottom: 0.5em;
    background: #f8f8f8;
    padding: 0.5em;
    border-radius: 10px;
    transition: all 0.2s linear;
  }
  .lecture-content .message:hover {
    box-shadow: 0 0 100px 5px rgba(0,0,0,0.125);
    background: white;
  }
  .lecture-content .message img {
    display: block;
  }
  .lecture-content .message__avatar {
    border-radius: 5px;
    height: 32px;
    width: 32px;
  }
  .lecture-content .message__avatar--big {
    float: left;
    height: 64px;
    width: 64px;
  }
  .lecture-content .message__content {
    margin-left: calc(64px + 0.5em);
  }
  .lecture-content .message__author {
    font-weight: bold;
  }
  .lecture-content .message__timestamp {
    color: lightgrey;
  }
  .lecture-content .message__replies {
    padding: 0.25em;
    border-radius: 5px;
    border: 1px solid lightgrey;
    overflow: hidden;
    background: white;
    display: flex;
  }
  .lecture-content .message__reply {
    border-radius: 5px;
    margin-right: 0.25em;
    position: relative;
    overflow: hidden;
  }
  .lecture-content .message__replies--meta {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    font-size: 0.9em;
  }
  .lecture-content .message__replies--count {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background: rgba(0,0,0,0.5);
    color: white;
    font-weight: bold;
  }
  .lecture-content .message__replies--total {
    margin-right: 1em;
    font-weight: bold;
  }
  .lecture-content .message__replies--last {
    color: grey;
  }
  .lecture-content .message__reactions {
    display: flex;
    margin: 0.25em 0;
  }
  .lecture-content .message__reaction {
    margin-right: 0.25em;
    font-size: 0.9em;
    padding: 0 0.25em;
    border: 1px solid lightgray;
    border-radius: 4px;
    background: white;
    color: dimgrey;
    appearance: none;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
    transition: all 0.2s linear;
  }
  .lecture-content .message__reaction:before {
    content: attr(data-before);
  }
  .lecture-content .message__reaction:after {
    content: attr(data-after);
  }
  .lecture-content .message__reaction:hover {
    border: 1px solid grey;
    background: whitesmoke;
  }
  .lecture-content .message__reaction:checked {
    border: 1px solid #1d9bd1;
    background: #e8f5fa;
    color: #1264a3;
  }
  .lecture-content .message__reaction:checked:after {
    content: attr(data-after-checked);
  }
  .lecture-content .message__text p:not(:last-child) {
    margin-bottom: .25rem;
  }
  .lecture-content .message__scene {
    cursor: default;
    line-height: 1.25em;
    opacity: 0.5;
    font-size: 0.85em;
    transition: all 0.2s linear;
  }
  .lecture-content .message__scene:hover {
    opacity: 1;
  }
  .lecture-content .messages .message {
    margin-top: 0.5em;
  }
</style>
<div>
  <div class="author">
    <div id="avatar-wrapper">
      <object id="avatar" data="https://volodymyrkushnir.com/assets/images/avatar-roman-sahan.svg" role="img" aria-label="My profile picture"></object>
    </div>
    <div class="profile">
      <h3 class="name">Роман Саган</h3>
      <ul class="contacts">
        <li>
          <a href="https://www.fb.com/volodyakushnir" rel="author" class="facebook">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M448 56.7v398.5c0 13.7-11.1 24.7-24.7 24.7H309.1V306.5h58.2l8.7-67.6h-67v-43.2c0-19.6 5.4-32.9 33.5-32.9h35.8v-60.5c-6.2-.8-27.4-2.7-52.2-2.7-51.6 0-87 31.5-87 89.4v49.9h-58.4v67.6h58.4V480H24.7C11.1 480 0 468.9 0 455.3V56.7C0 43.1 11.1 32 24.7 32h398.5c13.7 0 24.8 11.1 24.8 24.7z" />
            </svg>
            <span>volodyakushnir</span>
          </a>
        </li>
        <li>
          <a href="mailto:volodymyr.kushnir@me.com" rel="author" class="mail">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
              <path d="M502.3 190.8c3.9-3.1 9.7-.2 9.7 4.7V400c0 26.5-21.5 48-48 48H48c-26.5 0-48-21.5-48-48V195.6c0-5 5.7-7.8 9.7-4.7 22.4 17.4 52.1 39.5 154.1 113.6 21.1 15.4 56.7 47.8 92.2 47.6 35.7.3 72-32.8 92.3-47.6 102-74.1 131.6-96.3 154-113.7zM256 320c23.2.4 56.6-29.2 73.4-41.4 132.7-96.3 142.8-104.7 173.4-128.7 5.8-4.5 9.2-11.5 9.2-18.9v-19c0-26.5-21.5-48-48-48H48C21.5 64 0 85.5 0 112v19c0 7.4 3.4 14.3 9.2 18.9 30.6 23.9 40.7 32.4 173.4 128.7 16.8 12.2 50.2 41.8 73.4 41.4z" />
            </svg>
            <span>volodymyr.kushnir@me.com</span>
          </a>
        </li>
        <li>
          <a href="https://github.com/volodymyr-kushnir" rel="author" class="github">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
              <path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z" />
            </svg>
            <span>volodymyr-kushnir</span>
          </a>
        </li>
        <li>
          <a href="skype:volodymyr_kushnir" rel="author" class="skype">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
              <path d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z" />
            </svg>
            <span>volodymyr_kushnir</span>
          </a>
        </li>
        <li>
          <a href="https://volodymyrkushnir.com/" rel="author" class="website">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512">
              <path
                fill="currentColor"
                d="M336.5 160C322 70.7 287.8 8 248 8s-74 62.7-88.5 152h177zM152 256c0 22.2 1.2 43.5 3.3 64h185.3c2.1-20.5 3.3-41.8 3.3-64s-1.2-43.5-3.3-64H155.3c-2.1 20.5-3.3 41.8-3.3 64zm324.7-96c-28.6-67.9-86.5-120.4-158-141.6 24.4 33.8 41.2 84.7 50 141.6h108zM177.2 18.4C105.8 39.6 47.8 92.1 19.3 160h108c8.7-56.9 25.5-107.8 49.9-141.6zM487.4 192H372.7c2.1 21 3.3 42.5 3.3 64s-1.2 43-3.3 64h114.6c5.5-20.5 8.6-41.8 8.6-64s-3.1-43.5-8.5-64zM120 256c0-21.5 1.2-43 3.3-64H8.6C3.2 212.5 0 233.8 0 256s3.2 43.5 8.6 64h114.6c-2-21-3.2-42.5-3.2-64zm39.5 96c14.5 89.3 48.7 152 88.5 152s74-62.7 88.5-152h-177zm159.3 141.6c71.4-21.2 129.4-73.7 158-141.6h-108c-8.8 56.9-25.6 107.8-50 141.6zM19.3 352c28.6 67.9 86.5 120.4 158 141.6-24.4-33.8-41.2-84.7-50-141.6h-108z"
              />
            </svg>
            <span>https://volodymyrkushnir.com/</span>
          </a>
        </li>
      </ul>
      <p class="about">
        Володя працює фулл-стек розробником у <a href="https://binary-studio.com"><strong>Binary Studio</strong></a> вже 2 роки, де будує точні, адаптивні, швидкі, зручні в користуванні середовища, які гарно виглядають та добре виконують свої завдання. Улюбленими технологіями вважає <a href="#">React</a> та <a href="#">GraphQL</a>. Говорить російською із смішним акцентом.
      </p>
    </div>
  </div>
  <div class="bubble" style="margin: -0.5em 1em 1em;">
    <strong>Hey, hola, привіт!</strong><br />Вже за два абзаци розпочнеться лекція. Але! (дісклеймери?)<br />Між іншим, it's dangerous to go alone! Take this: <a href="https://git-scm.com/"><strong>Git</strong></a>, <a href="https://desktop.github.com/"><strong>GitHub Desktop</strong></a>, <a href="https://code.visualstudio.com/"><strong>Visual Studio Code</strong></a>, <a href="https://docs.google.com/presentation/d/1F-9mMmeup9IGJlF4MjsqjO7fbwlc3f1ZDuQWBmpsBYY/edit#slide=id.g3742b7cb6b_0_22">presentation</a>
  </div>
  <div style="clear: both;"></div>
</div>

<div class="messages">
  Студент все ще проходить випробувальний термін у своїй новій компанії і все ще використовує Slack для співпраці з іншими розробниками та комунікації з клієнтами. Одного весняного вечора в чат пише Ryu — колишній клієнт <em>(returning customer, ya-a-a-ay!)</em>, для якого раніше було зроблене онлайн-резюме. Він повністю задоволений якістю нашої роботи і хоче довірити нам ще один проект. Цього разу мова піде про симулятор "вуличної бійки" &mdash;
  <div class="message">
    <div class="message__avatar message__avatar--big" style="background-color: gainsboro;">
      <img class="message__avatar message__avatar--big" src="http://fast1.onesite.com/capcom-unity.com/user/gregaman/blog_photos/9c9a08a03cfcdb05c7c03ddfaeddc041.png?v=57600" alt="" />
    </div>
    <div class="message__content">
      <div class="message__meta">
        <span class="message__author">Ryu</span>
        <span class="message__timestamp">16:42</span>
      </div>
      <div class="message__text">
        <div class="message__scene">
          <em>(stares intently at you, his headband fluttering in the wind)</em>
        </div>
        <p>To live is to fight, and to fight is to live.</p>
        <div class="message__scene">
          <em>(clenches his fist)</em>
        </div>
        <p>I’ve spent all my life defeating my enemies, perfecting my martial skills, and learning the true essence of what it means to be an honorable warrior. But now my greatest challenge lies before me.</p>
        <div class="message__scene">
          <em>(raising his hand into the air, Ryu’s hand is engulfed in <span style="color: orange; font-weight: bold;">🔥flame</span>, and he brings it <span style="color: black; font-weight: bold;">⚡cr-r-r-r-rashing</span> down to the ground, splitting the Earth in two as a hot knife would cut through butter)</em>
        </div>
        <p><strong>I need my own video game.</strong></p>
        <div class="message__scene" onmouseenter="document.getElementById('flute').play()" onmouseleave="document.getElementById('flute').pause()">
          <em>(in the distance, a Japanese flute plays a gentle melody)</em>
          <audio id="flute">
            <source src="https://volodymyrkushnir.com/assets/sounds/rodrigo-rodriguez-shakuhachi-flute.mp3" type="audio/mpeg">
          </audio>
        </div>
        <p>My master tells me that it’s necessary to promote my “brand image”. I have no idea what he means by that, but then again, I am not one to question his wisdom. I am sure, in time, the “fanbase” I will acquire through this video game will bring me great strength in the battles to come.</p>
        <div class="message__scene">
          <em>(Ryu once again turns his gaze upon you)</em>
        </div>
        <p>Please go forth and complete this task for me.  In return, I promise to avenge any relatives who may have been killed by your arch nemesis, or restore your family honor, or… whatever. We’ll work out contract details later.</p>
        <div class="message__scene">
          <em>(Ryu turns his back and begins to walk away)</em>
        </div>
        <p>For now I will go meditate. Let me know if you have any questions ― WiFi is a bit spotty up at the Mountain Temple, but I’ll check my email whenever I get the chance.</p>
      </div>
      <div class="message__reactions">
        <input class="message__reaction" type="checkbox" data-before="&#x1f4aa;" data-after="13" data-after-checked="14" />
        <input class="message__reaction" type="checkbox" data-before="&#x1f947;" data-after="9" data-after-checked="10" />
        <input class="message__reaction" type="checkbox" data-before="&#x1f3ae;" data-after="7" data-after-checked="8" />
        <input class="message__reaction" type="checkbox" data-before="&#x1f480;" data-after="12" data-after-checked="13" />
        <input class="message__reaction" type="checkbox" data-before="&#x1f624;" data-after="11" data-after-checked="12" />
      </div>
      <div class="message__replies">
        <img class="message__reply message__avatar" src="https://ca.slack-edge.com/T036H63TN-U0HNH9ZJ8-7d2cf5865525-24" alt="">
        <img class="message__reply message__avatar" src="https://ca.slack-edge.com/T036H63TN-U5QLD4NTZ-2f05886097c3-24" alt="">
        <img class="message__reply message__avatar" src="https://ca.slack-edge.com/T036H63TN-USLACKBOT-sv41d8cd98f0-24" alt="">
        <img class="message__reply message__avatar" src="https://ca.slack-edge.com/T036H63TN-U0L5E8JG1-0179af4ceca2-24" alt="">
        <div class="message__reply">
          <img class="message__avatar" src="https://ca.slack-edge.com/T036H63TN-U0L5FEL3U-48e06b52480b-24" alt="">
          <span class="message__replies--count">+4</span>
        </div>
        <div class="message__replies--meta">
          <span class="message__replies--total">12 replies</span>
          <span class="message__replies--last">Last reply today at 18:13</span>
        </div>
      </div>
    </div>
  </div>
</div>

Отже, в замовника немає портфоліо і специфікація для блогу теж ще не визначена, зате є достатньо інформації, щоб скласти більш-менш адекватну сторінку резюме! Клієнт також хоче, щоб сторінка була адаптивною, доступною, інформативною, тощо. Не тільки це, а ще й її треба розмістити на якомусь хостингу, програмний код повинен бути чистим і зрозумілим, а також потрібна хороша документація! О-о-о-о-о-го. Само собою, замовник хоче мати можливість слідкувати за процесом розробки. Студент радіє, бо це саме те, що він так довго мріяв робити! Нарешті за гроші, ясне діло. І тим не менше, варто було б дослідити суть завдання дещо глибше — раптом на ринку вже є рішення проблеми? Чи не зручніше буде долучитися до розробки схожого програмнаго продукту з відкритим кодом і форкнути його або запропонувати функціонал, якого не вистарчає, замість створювати все з нуля? На радість, швидкий пошук в GitHub каже, що схожа сторінка вже існує і навіть містить інструкцію як скласти аналогічну. З деякими технологіями доведеться працювати вперше, але інструкція порізана на частини і це допомагає легко спланувати, які конкретно завдання треба буде виконати і скільки часу орієнтовно на це треба буде затратити. Ммм, окей, студент відповідає замовнику...

<div class="message">
  <img class="message__avatar message__avatar--big" src="https://ca.slack-edge.com/T036H63TN-USLACKBOT-sv41d8cd98f0-64" alt="" />
  <div class="message__content">
    <div class="message__meta">
      <span class="message__author">You</span>
      <span class="message__timestamp">19:45</span>
    </div>
    <div class="message__text">
      <strong>Yeah, sure, I'm on it, let's go!</strong> BTW, don't worry about setting tasks and milestones, save your time, I'll create them myself accordingly to the tutorial I mentioned earlier. You'll be able to track progress in GitHub as soon as I set up the repository.
    </div>
    <div class="message__reactions">
      <input class="message__reaction" type="checkbox" data-before="&#x1f44d;" data-after="13" data-after-checked="14" />
      <input class="message__reaction" type="checkbox" data-before="&#x1f3c1;" data-after="8" data-after-checked="9" />
      <input class="message__reaction" type="checkbox" data-before="&#x1f680;" data-after="10" data-after-checked="11" />
      <input class="message__reaction" type="checkbox" data-before="&#x1f44f;" data-after="6" data-after-checked="7" />
    </div>
  </div>
</div>

...і береться за створення сайту по тій інструкції.

<hr style="border: none; height: 2px; background: lightgrey; margin: 2em 0;">

<div style="margin-bottom: 1em;">
  <small><em>Level 1</em></small>
  <h3 style="margin: 0;"><strong>Basic JavaScript</strong></h3>
  <small><strong>Difficulty:</strong> I Can Win. <strong>Objectives:</strong> Get to the &#x1F681; Internet! Learn the GitHub platfrom while you're at it.</small>
</div>

1. Background
2. Comments
3. Declarations

   <div class="bubble small">
      Alright, mate, from now on all the tasks of this mission should be added to the GitHub Projects!
   </div>
   <div style="clear: both;"></div>

4. Types
5. Type coercion
6. Control flow
7. Error handling
8. Loops and iteration

<hr style="border: none; height: 2px; background: lightgrey; margin: 2em 0;">

<div style="margin-bottom: 1em;">
  <small><em>Level 2</em></small>
  <h3 style="margin: 0;"><strong>Building a page / ES6</strong></h3>
  <small><strong>Difficulty:</strong> Bring It On! <strong>Objectives:</strong> Master issues and project management.</small>
</div>

1. Promises
2. Async
3. Generators
4. Classes
5. OOP
6. DOM / Events
7. Functions
8. Special objects
9. Keyed collections
10. Arrays
11. Objects

<hr style="border: none; height: 2px; background: lightgrey; margin: 2em 0;">

<div style="margin-bottom: 1em;">
  <small><em>Level 3</em></small>
  <h3 style="margin: 0;">Modules, transpiling, bundling, etc.</h3>
  <small><strong>Difficulty:</strong> Hurt Me Plenty. <strong>Objectives:</strong> Learn basic <code>bash</code> and <code>git</code> commands, gain some confidence.</small>
</div>

1. Imperative, declarative, functional, reactive
2. import/export
3. babel
4. webpack

<hr style="border: none; height: 2px; background: lightgrey; margin: 2em 0;">

**Закінчити проект.**

<strong>Створити класс “Fighter”. Клас повиненин приймати значення name, power і health. Також клас повинен мати методи “setDamage” та “hit”.</strong>

Метод <em>“setDamage”</em> приймає значення “damage” і наносить урон змінюючи значення <em>health (health = health - damage)</em>, і виводить в консоль строку <em>“health: ”</em>.

Метод <em>“hit”</em> приймає значення <em>“enemy”, “point”</em>, і в середині викликає метод переданого обекту <em>“enemy.setDamage(damage)”</em>. “damage” вираховується наступним чином - <em>damage = point \* power</em>, де <em>point</em> - змінний параметр, прийнятий в функцію <em>"fight"</em>, power - це властивість об'єкту який наносить урон.

<strong>
Створити клас ImprovedFighter, який буде наслідуватися від класу Fighter, з його властивостями і методами.</strong>

Для цього класу створити метод <em>doubleHit</em>, який буде викликати наслідуваний метод <em>“hit”</em>, і передавати туди подвоєне значення <em>“point”</em>.

Від обох класів породити по екземпляру відповідно <em>fighter</em>, <em>improvedFighter</em>.

<strong>
Створити функцію <em>fight</em>, яка прийматиме параметри - <em>fighter, improvedFighter</em>, і point.</strong>

<em>fight</em> може приймати довільну кількість параметрів. Наприклад, <em>fight(fighter, improvedFighter, 25, 13, 45)</em>, де <em>point = [25, 13, 45]</em>.

Ця функція запускатиме процес гри: гравці по черзі наносять удар один одному за допомогою методу <em>hit</em>, що приймає відповідне значення point. Якщо один із них помирає <em>(health = 0)</em>, то гра закінчується і результат виводиться в консоль.

<strong>
При виконанні домашнього завдання необхідно використати: </strong>
<em>- block scoping (let) - spread / rest operator - default parameters - string interpolation - arrow functions - classes + inheritance + super</em>
