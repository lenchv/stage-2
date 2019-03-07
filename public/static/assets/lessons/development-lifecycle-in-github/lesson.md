<style>
  /* Elements */
  .lecture ol,
  .lecture ul {
    margin: 0.5rem 0 0.5rem 0.5rem;
    padding-left: 1em;
  }
  .lecture ol {
    list-style: outside decimal;
  }
  .lecture ul {
    list-style: outside disc;
  }
  .lecture ol li,
  .lecture ul li {
    margin-top: .5rem;
  }
  .lecture p {
    margin-bottom: .5rem;
  }
  .lecture p + blockquote {
    margin-top: -0.25rem;
  }
  .lecture blockquote {
    border-left: .1rem solid #dadee4;
    margin-left: 0;
    padding: .25rem .75rem;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }
  .lecture pre {
    margin: 0.25rem 0;
  }
  .lecture pre code {
    display: block;
    padding: 0.5rem;
  }

  /* Author */
  .lecture .author {
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
  .lecture .contacts {
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
  .lecture .contacts li {
    margin-bottom: 0.25em;
    margin-right: 1em;
    margin-top: 0;
  }
  .lecture .contacts li:before {
    display: none;
  }
  .lecture .contacts li a {
    color: black;
    transition: color 0.2s ease-in-out;
  }
  .lecture .contacts li a:hover {
    text-decoration: none;
  }
  .lecture .contacts li a.facebook:hover {
    color: #3b5998;
  }
  .lecture .contacts li a.github:hover {
    color: dimgrey;
  }
  .lecture .contacts li a.mail:hover {
    color: dimgrey;
  }
  .lecture .contacts li a.skype:hover {
    color: #00aff0;
  }
  .lecture .contacts li a.phone:hover {
    color: dimgrey;
  }
  .lecture .contacts li a.website:hover {
    color: dimgrey;
  }
  .lecture .contacts li a .icon {
    fill: currentColor;
    height: 16px;
    vertical-align: bottom;
  }

  /* Profile */
  .lecture .profile {
    margin-left: 6em;
  }
  .lecture .profile .name {
    margin-bottom: 0;
    font-size: 1.4em;
    line-height: 1.5em;
  }
  .lecture .profile .about {
    margin: 0;
  }

  /* Speech bubble */
  .lecture .bubble {
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
  .lecture .bubble.small {
    font-size: 0.85em;
  }
  .lecture .author + .bubble,
  .lecture .bubble:hover {
    opacity: 1;
  }
  .lecture .bubble a {
    color: inherit;
  }
  .lecture p + div > .bubble:first-child {
    margin-top: -0.25rem;
  }

  /* Messages */
  .lecture .message {
    overflow: hidden;
    margin-bottom: 0.5em;
    background: #f8f8f8;
    padding: 0.5em;
    border-radius: 10px;
    transition: all 0.2s linear;
  }
  .lecture .message:hover {
    box-shadow: 0 0 100px 5px rgba(0,0,0,0.125);
    background: white;
  }
  .lecture .message img {
    display: block;
  }
  .lecture .message__avatar {
    border-radius: 5px;
    height: 32px;
    width: 32px;
  }
  .lecture .message__avatar--big {
    float: left;
    height: 64px;
    width: 64px;
  }
  .lecture .message__content {
    margin-left: calc(64px + 0.5em);
  }
  .lecture .message__author {
    font-weight: bold;
  }
  .lecture .message__timestamp {
    color: lightgrey;
  }
  .lecture .message__replies {
    padding: 0.25em;
    border-radius: 5px;
    border: 1px solid lightgrey;
    overflow: hidden;
    background: white;
    display: flex;
  }
  .lecture .message__reply {
    border-radius: 5px;
    margin-right: 0.25em;
    position: relative;
    overflow: hidden;
  }
  .lecture .message__replies--meta {
    display: flex;
    flex: 1 1 auto;
    align-items: center;
    font-size: 0.9em;
  }
  .lecture .message__replies--count {
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
  .lecture .message__replies--total {
    margin-right: 1em;
    font-weight: bold;
  }
  .lecture .message__replies--last {
    color: grey;
  }
  .lecture .message__reactions {
    display: flex;
    margin: 0.25em 0;
  }
  .lecture .message__reaction {
    margin-right: 0.25em;
    font-size: 0.9em;
    padding: 0 0.25em;
    border: 1px solid lightgray;
    border-radius: 4px;
    background: white;
    color: dimgrey;
  }
  /* Tabs */
  .lecture .messages .messages__from:not(:first-of-type) {
    margin-left: 0.5em;
  }
  .lecture .messages .messages__from {
    vertical-align: middle;
    opacity: 0.5;
    transition: all 0.2s linear;
  }
  .lecture .messages .messages__from + label {
    cursor: pointer;
    opacity: 0.5;
    transition: all 0.2s linear;
  }
  .lecture .messages .messages__from:hover,
  .lecture .messages .messages__from:hover + label,
  .lecture .messages .messages__from:checked,
  .lecture .messages .messages__from:checked + label {
    opacity: 1;
  }
  .lecture .messages input[id="lionel-messi"]:checked ~ div[data-from="lionel-messi"] { display: block; }
  .lecture .messages input[id="andres-iniesta"]:checked ~ div[data-from="andres-iniesta"] { display: block; }
  .lecture .messages input[id="donald-trump"]:checked ~ div[data-from="donald-trump"] { display: block; }
  .lecture .messages input[id="taras-shevchenko"]:checked ~ div[data-from="taras-shevchenko"] { display: block; }
  .lecture .messages input[id="you"]:checked ~ div[data-from="you"] { display: block; }
  .lecture .messages .message {
    margin-top: 0.5em;
    display: none;
  }
</style>
<div>
  <div class="author">
    <div id="avatar-wrapper">
      <object id="avatar" data="https://volodymyrkushnir.com/assets/images/avatar.svg" role="img" aria-label="My profile picture"></object>
    </div>
    <div class="profile">
      <h3 class="name">Володимир Кушнір</h3>
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
    <strong>Hey, hola, привіт!</strong><br />Вже за два абзаци розпочнеться лекція. Але! (дісклеймери?)<br />Між іншим, it's dangerous to go alone! Take this: <a href="https://git-scm.com/"><strong>Git</strong></a>, <a href="https://desktop.github.com/"><strong>GitHub Desktop</strong></a>, <a href="https://code.visualstudio.com/"><strong>Visual Studio Code</strong></a>
  </div>
  <div style="clear: both;"></div>
</div>

<div class="messages">
  Отже, уявімо собі таку ситуацію — студент підписує контракт із аутсорсинговою чи продуктовою компанією, наступного ранку приходить у офіс/коворк/cloffice ("closet office"), вмикає комп'ютер, запускає месенджер (нехай це буде Slack), і отримує своє перше мега-завдання ("таску") від замовника (
  <input type="radio" class="messages__from" name="from" id="donald-trump" checked>
  <label for="donald-trump">Donald Trump</label>
  <input type="radio" class="messages__from" name="from" id="lionel-messi">
  <label for="lionel-messi">Lionel Messi</label>
  <input type="radio" class="messages__from" name="from" id="andres-iniesta">
  <label for="andres-iniesta">Andres Iniesta</label>
  <input type="radio" class="messages__from" name="from" id="taras-shevchenko">
  <label for="taras-shevchenko">Taras Shevchenko</label>
  <input type="radio" class="messages__from" name="from" id="you">
  <label for="you">"я сам собі замовник!"</label>) &mdash;
  <div class="message" data-from="lionel-messi">
    <img class="message__avatar message__avatar--big" src="https://res.cloudinary.com/otro-content/image/upload/w_200,h_200,c_fill/t_media_library_tile/wsgq8mti47ywcwvqltkc.png" alt="" />
    <div class="message__content">
      <div class="message__meta">
        <span class="message__author">Lionel Messi</span>
        <span class="message__timestamp">18:42</span>
      </div>
      <div class="message__text">
        <p>How is it like to be Leo Messi? Most of the time it’s nice, but there are moments when I would like to be anonymous and be able to roam the streets unnoticed. Football is always going to be very special for me, but I understand that life is not just about football. The birth of my first son changed my life and altered my perspective altogether — providing me a greater sense of tranquility. I still love playing football, but when the match is over I dedicate that time to my family.</p>
      </div>
      <div class="message__reactions">
        <span class="message__reaction">&#x1f601;1</span>
        <span class="message__reaction">&#x1f601;4</span>
        <span class="message__reaction">&#x1f60d;1</span>
        <span class="message__reaction">&#x1f633;5</span>
        <span class="message__reaction">&#x1f62d;5</span>
      </div>
      <div class="message__replies">
        <img class="message__reply message__avatar" src="https://ca.slack-edge.com/T036H63TN-U0HNH9ZJ8-7d2cf5865525-24" alt="">
        <img class="message__reply message__avatar" src="https://ca.slack-edge.com/T036H63TN-U5QLD4NTZ-2f05886097c3-24" alt="">
        <img class="message__reply message__avatar" src="https://ca.slack-edge.com/T036H63TN-USLACKBOT-sv41d8cd98f0-24" alt="">
        <img class="message__reply message__avatar" src="https://ca.slack-edge.com/T036H63TN-U0L5E8JG1-0179af4ceca2-24" alt="">
        <div class="message__reply">
          <img class="message__avatar" src="https://ca.slack-edge.com/T036H63TN-U0L5FEL3U-48e06b52480b-24" alt="">
          <span class="message__replies--count">+2</span>
        </div>
        <div class="message__replies--meta">
          <span class="message__replies--total">15 replies</span>
          <span class="message__replies--last">Last reply today at 19:13</span>
        </div>
      </div>
    </div>
  </div>
  <div class="message" data-from="andres-iniesta">Task A</div>
  <div class="message" data-from="taras-shevchenko">Task B</div>
  <div class="message" data-from="donald-trump">
    <img class="message__avatar message__avatar--big" src="https://www.politiplatform.com/img/politicians/donald_trump/avatar.jpg" alt="" />
    <div class="message__content">
      <div class="message__meta">
        <span class="message__author">Donald Trump &#x1f1fa;&#x1f1f8;</span>
        <span class="message__timestamp">14:24</span>
      </div>
      <div class="message__text">
        We have a 5 billion dollar website. I have so many websites. I have them all over the place... I hire people... it costs me three dollars. The beauty of me is that I'm <em>very rich</em>. You know, it really doesn't matter what the media write, as long as you've got <em>a young and beautiful piece of ass</em>. Despite the constant negative press covfefe. <a href="https://gist.github.com/volodymyr-kushnir/1f78eeee07e9e5d2aef0cfb7bcc38e0c"><strong>Anyway, shut up, build me a website</strong></a>. We will build a great website &mdash; and nobody builds websites better than me, believe me &mdash; and I'll build them very inexpensively. I will build a great, great website on our southern border, and I will make Mexico pay for that website. Mark my words. Your fake news! What you’re seeing and what you’re reading is not what’s happening. Nobody has ever done so much in the first two years of a presidency as this administration. Nobody. <em>Nobody</em>. Make America great again!
      </div>
      <div class="message__reactions">
        <span class="message__reaction">&#x1f984;13</span>
        <span class="message__reaction">&#x1f60d;12</span>
        <span class="message__reaction">&#x1f601;8</span>
        <span class="message__reaction">&#x1f633;4</span>
        <span class="message__reaction">&#x1f62d;10</span>
        <span class="message__reaction">&#x1f926;11</span>
      </div>
      <div class="message__replies">
        <img class="message__reply message__avatar" src="https://ca.slack-edge.com/T036H63TN-U0HNH9ZJ8-7d2cf5865525-24" alt="">
        <img class="message__reply message__avatar" src="https://ca.slack-edge.com/T036H63TN-U5QLD4NTZ-2f05886097c3-24" alt="">
        <img class="message__reply message__avatar" src="https://ca.slack-edge.com/T036H63TN-USLACKBOT-sv41d8cd98f0-24" alt="">
        <img class="message__reply message__avatar" src="https://ca.slack-edge.com/T036H63TN-U0L5E8JG1-0179af4ceca2-24" alt="">
        <div class="message__reply">
          <img class="message__avatar" src="https://ca.slack-edge.com/T036H63TN-U0L5FEL3U-48e06b52480b-24" alt="">
          <span class="message__replies--count">+2</span>
        </div>
        <div class="message__replies--meta">
          <span class="message__replies--total">17 replies</span>
          <span class="message__replies--last">Last reply today at 15:45</span>
        </div>
      </div>
    </div>
  </div>
  <div class="message" data-from="you">Task C</div>
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
      <span class="message__reaction">&#x1f44d;13</span>
      <span class="message__reaction">&#x1f3c1;8</span>
      <span class="message__reaction">&#x1f680;10</span>
      <span class="message__reaction">&#x1f44f;6</span>
    </div>
  </div>
</div>

...і береться за створення сайту по тій інструкції.

<hr style="border: none; height: 2px; background: lightgrey; margin: 2em 0;">

<div style="margin-bottom: 1em;">
  <small><em>Level 1</em></small>
  <h3 style="margin: 0;"><strong>Setting up the repository</strong></h3>
  <small><strong>Difficulty:</strong> I Can Win. <strong>Objectives:</strong> Get to the &#x1F681; Internet! Learn the GitHub platfrom while you're at it.</small>
</div>

1. Well, [**this is Git**](https://xkcd.com/1597/), you'll need it.
   <div><strong>GitHub</strong> <sup><strong><a href="https://github.com/about/facts" title="GitHub Facts">[1]</a><a href="https://github.com/about/milestones" title="GitHub Milestones">[2]</a><a href="https://github.com/features" title="How developers work">[3]</a><a href="https://github.blog" title="The GitHub Blog">[4]</a><a href="https://education.github.com" title="GitHub Education">[5]</a><a href="https://help.github.com" title="GitHub Help">[6]</a><a href="https://lab.github.com" title="GitHub Learning Lab">[7]</a></strong></sup> will host it for you. First things first, skim through <a href="https://guides.github.com/introduction/flow/"><strong>Understanding the GitHub flow</strong></a> and <a href="https://guides.github.com/activities/hello-world/"><strong>Hello World</strong></a> guides to get an overview of terminology and core concepts</div>
2. Open up [**GitHub**](https://github.com/) and sign in. Create a new repository named **"homepage"** (e.g. **volodymyr-kushnir/homepage**), set description to "My very own personal website. Basically this is just a résumé."
3. Create two projects — **"Homepage"** and **"Resume"** ― using **Automated kanban** as a project template for both. Here's the description for the **Homepage** project:

   > **Make homepage great!** Make it responsive, accessible, informative, credible, readable, descriptive, compatible, consistent, uncluttered, simple, secure, up-to-date. Alternatively, just give up.

   And this is the description for the **Resume** project:
   
   > A typical résumé contains a "summary" of relevant job experience and education, as its French origin implies. The résumé is usually one of the first items, along with a cover letter and sometimes an application for employment, which a potential employer sees regarding the job seeker and is typically used to screen applicants. **The goal of this project is to create an online version of the résumé using HTML, CSS, and the minimum amount of JavaScript.**
   
   <div class="bubble small">
      Alright, mate, from now on all the tasks of this mission should be added to the GitHub Projects!
   </div>
   <div style="clear: both;"></div>

5. Add topics _(e.g. "pesonal website homepage resume gh-pages html css binary-studio-academy bsa19")_
6. Update **README.md** _(you might want to take a look at [**GitHub Flavored Markdown**](https://guides.github.com/features/mastering-markdown/) and [**Documenting your projects on GitHub**](https://guides.github.com/features/wikis/))_  
   <div class="bubble small">
      Psst, don't forget to add this as a task to <strong>Homepage</strong> project, bruv. Oh, also convert it to an issue while you're at it
   </div>
   <div style="clear: both;"></div>
7. Create a new branch `develop` based on `master`  
   <div class="bubble small">
      Hey, c'mon fam, are you even trying?! I've asked you to put tasks into projects, so puh-leeeeeze!
   </div>
   <div style="clear: both;"></div>
8. Go to **Settings — Collaborators** and add a collaborator
9. Go to **Settings — Branches** and set default branch to `develop`, lock `master` away
10. Create **index.html** using GitHub online editor and the snippet below:
   ```
   <!DOCTYPE html>
   <html>
     <head>
       <meta charset="UTF-8">
       <title>Résumé</title>
     </head>
     <body>
       &mdash; Hello World! &#x1F609;
     </body>
   </html>
   ```
   <div class="bubble small">
     Give your commits meaningful messages, <a href="https://help.github.com/articles/closing-issues-using-keywords/"><strong>use keywords to close issues</strong></a>!
   </div>
   <div style="clear: both;"></div>
11. Create a pull request into <code>master</code>, set metadata _(reviewers, assignees, labels, projects, milestones)_, merge pull request using **Create merge commit**
12. Go to **Settings — Options** and set up **GitHub Pages**, update repository description with the proper **website** link _(you might also want to learn how to host a static website powered by Jekyll in [**Getting Started with GitHub Pages**](https://guides.github.com/features/pages/))_
13. Share the link to the repository with the customer, poke around with your repository, see what's possible, explore, follow people, [**Be social**](https://guides.github.com/activities/socialize/)

<hr style="border: none; height: 2px; background: lightgrey; margin: 2em 0;">

<div style="margin-bottom: 1em;">
  <small><em>Level 2</em></small>
  <h3 style="margin: 0;"><strong>Research</strong></h3>
  <small><strong>Difficulty:</strong> Bring It On! <strong>Objectives:</strong> Master issues and project management.</small>
</div>

1. Add the following tasks to the **"Resume"** project and convert them to issues — it would be very nice if you could use GitHub's **Labels**, **Assignees**, and **Milestones** features at this point _([**Mastering Issues**](https://guides.github.com/features/issues/) explains why and how)_:

   1. **Скласти інтро**  
   Скласти інтро (вступ), де в 2-4 реченнях описати, що замовник робить, що подобається робити, що хочеться робити краще, що важливо робити, тощо.
   2. **Скласти блок контактної інформації**  
   Посилання на соцмережі (Facebook чи Instagram, інші), номер телефону чи адреса електронної скриньки, тощо. Може не всі лінки в світі, а тільки ті, що дійсно доречні.
   3. **Скласти таймлайн**  
   Скласти список всіх _(важливих)_ життєвих подій, визначних дат, досягнень, періодів, що дали приємний і неприємний досвід, тощо. В цьому конкретному випадку довгих списків не буває, натомість бувають погано згорнуті, тому пакуємо сюди все підряд, а про _"лишні"_ події можна буде промовчати пізніше. Список повинен бути систематизованим і посортованим в такий спосіб, щоб читач швидко зрозумів _"паттерн"_ і міг легко орієнтуватись в просторі і часі цього резюме.
   4. **Скласти додаткові інформаційні блоки**  
   Можна зробити резюме менш формальним, додавши додаткові блоки, які містять корисну інформацію, але подають її в _"розважальній"_ формі. Наприклад, що подобається і не подобається, сильні і слабкі сторони, перелік навиків чи хобі, інфографіка або ж інтерактивні модулі, тощо. Варто написати контент такого блоку раніше, ніж починати верстку, бо його розміри впливатимуть на розміщення елементів на сторінці.
   
2. Move tasks to <strong>"In progress"</strong> while you're working on them. Leave comments under issues, assign proper labels and milestones, close issues and tasks when done

<hr style="border: none; height: 2px; background: lightgrey; margin: 2em 0;">

<div style="margin-bottom: 1em;">
  <small><em>Level 3</em></small>
  <h3 style="margin: 0;"><code>git</code></h3>
  <small><strong>Difficulty:</strong> Hurt Me Plenty. <strong>Objectives:</strong> Learn basic <code>bash</code> and <code>git</code> commands, gain some confidence.</small>
</div>

1. Let's download the repository using the command line. [**Git Handbook**](https://guides.github.com/introduction/git-handbook/) won't help us much here, so let's just keep [**Git Reference Manual**](https://git-scm.com/docs) open in case we get stuck with something and need assistance. Open your favorite terminal, change working directory (<code>cd</code>) to where you'd like to keep the repository, and &mdash; if it's all right <em>(check directory content with</em> <code>ls</code> <em>or</em> <code>dir</code><em>)</em> &mdash; execute `git clone` to copy the repository via ssh or https
   <div class="bubble small">
     Let's take a pause and be a caveman for a second — or a hacker, if you will — let's go and see how it looks like for the guys without graphical user interface
   </div>
   <div style="clear: both;"></div>
2. `git status`
3. `git branch`
4. `git checkout` (`--branch`)
5. `git add` (`.`)
6. `git commit` (`--amend`)
7. `git log`
8. `git revert`
9. `git merge` (різні стратегії)
10. `git reset` (різні стратегії)
11. `git pull`
12. `git diff`
13. `git remote`
14. `git clean`
15. `git stash`
16. `git fetch`   

<hr style="border: none; height: 2px; background: lightgrey; margin: 2em 0;">

<div style="margin-bottom: 1em;">
  <small><em>Level 4</em></small>
  <h3 style="margin: 0;"><strong>Putting the résumé together</strong></h3>
  <small><strong>Difficulty:</strong> Hardcore. <strong>Objectives:</strong> Get better at copy-pasting and debugging, make the résumé look better, learn some HTML/CSS and basic SEO</small>
</div>

1. Use **GitHub Desktop** to clone the repository on your PC. Use [**Résumé Wiki**](https://github.com/volodymyr-kushnir/volodymyrkushnir.com/wiki/R%C3%A9sum%C3%A9) for reference
   <div class="bubble small">
     Choose a layout for your web page. It's important to pick a layout which will look great on large and small screens, and on paper too. You could find inspiration in the works of [**Bill Mawhinney**](https://dribbble.com/bilmaw). https://github.com/volodymyr-kushnir/volodymyrkushnir.com/wiki/R%C3%A9sum%C3%A9
   </div>
   <div style="clear: both;"></div>
3. Update `<head>` ― use a new branch (say, `feature/head`), see [**GitFlow workflow**](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) for reasons why

   1. `<link>`
   2. PR and merge into `develop`

2. Update `<body>` ― use a new branch (i.e. `feature/body`)

   1. Add Main block
   2. Add Content block
   3. `serve` (!!! needs Node.js, maybe `php -s`)
   4. `patch/content/primary` Add primary content (avatar, name, job, contacts, intro)
   5. `patch/content/secondary` Add secondary content (languages, skills, character, etc.)
   6. PR and merge into `develop`

3. PR and merge into `master`


<hr style="border: none; height: 2px; background: lightgrey; margin: 2em 0;">

<div style="margin-bottom: 1em;">
  <small><em>Level 5</em></small>
  <h3 style="margin: 0;"><strong>Advanced features</strong></h3>
  <small><strong>Difficulty:</strong> Nightmare! <strong>Objectives:</strong> Survive.</small>
</div>

1. Webhooks. Deploy keys
2. Continuous Integration and Continuous Deployment (Travis CI + AWS, Zeit Now)
3. [GitHub Actions](https://github.com/features/actions)
4. Subrepositories and monorepos
5. Forks and licenses

<hr style="border: none; height: 2px; background: lightgrey; margin: 2em 0;">