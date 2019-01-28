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
  .lecture blockquote {
    margin-top: .5rem;
    margin-bottom: .5rem;
  }
  .lecture pre {
    margin: 0.5rem 0;
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
    float: left;
    position: relative;
    overflow: visible;
    opacity: 0.5;
    transition: opacity 0.2s ease-in-out;
  }
  .lecture .author + .bubble,
  .lecture .bubble:hover {
    opacity: 1;
  }
  .lecture .bubble a {
    color: inherit;
  }
  .lecture p + div > .bubble:first-child {
    margin-top: -0.5rem;
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
          <a href="tel:+380952600797" rel="author" class="phone">
            <svg class="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
              <path d="M272 0H48C21.5 0 0 21.5 0 48v416c0 26.5 21.5 48 48 48h224c26.5 0 48-21.5 48-48V48c0-26.5-21.5-48-48-48zM160 480c-17.7 0-32-14.3-32-32s14.3-32 32-32 32 14.3 32 32-14.3 32-32 32z" />
            </svg>
            <span>+38 (095) 2600797</span>
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
        Володя працює фулл-стек розробником у <a href="https://binary-studio.com"><strong>Binary Studio</strong></a> вже два роки. Він будує точні, адаптивні, швидкі, зручні в користуванні середовища, які гарно виглядають та добре виконують свої завдання. Улюбленими технологіями вважає <a href="#">React</a> та <a href="#">GraphQL</a>.
      </p>
    </div>
  </div>
  <div class="bubble" style="margin: -0.5em 1em 1em;">
    <strong>Hey, hola, привіт!</strong><br />Вже за два абзаци розпочнеться лекція. Але!<br />It's dangerous to go alone! Take this: <a href="https://git-scm.com/"><strong>Git</strong></a>, <a href="https://desktop.github.com/"><strong>GitHub Desktop</strong></a>, <a href="https://code.visualstudio.com/"><strong>Visual Studio Code</strong></a>.
  </div>
  <div style="clear: both;"></div>
</div>

Отже, уявімо собі таку ситуацію — студент _(до слова, у Binary працівники вважають себе "student always")_ підписує контракт із аутсорсинговою чи продуктовою компанією, наступного ранку приходить у офіс/коворк/cloffice ("closet office"), вмикає комп'ютер, запускає месенджер (нехай це буде Slack), і отримує своє перше завдання ("таску"):

<div>
  <div>
    <img src="https://ca.slack-edge.com/T036H63TN-U5QLD4NTZ-2f05886097c3-48" alt="" />
  </div>
  <div>
    <div>
      <span>Volodymyr Kushnir</span>
      <span>[18:42]</span>
    </div>
    <span>окей, без жартів, щоб потім не получилося overdressed/underdressed ― *"черное (частично или полностью)"* може бути однаково валідним при *1.* чорний костюм і біла сорочка, *2.* чорний костюм з трьома білими полосками :athletic_shoe:, *3.* чорна сорочка і сірі (коричневі) брюки :shoe:, 4. чорна сорочка і джинси, 5. біла сорочка і чорні брюки. всі п'ять братків при такому раскладі будуть робити ілюзію відсутності дрес-коду як такого взагалі. а отже, мені треба більше деталей *в тред*.</span>
    <div class="c-reaction_bar" role="group" aria-label="Reactions">
      :exploding_head: 1 :laughing: 1 :+1::skin-tone-6: 1
    </div>
    <div role="presentation" class="c-message__reply_bar" data-qa="reply_bar">
      <img src="https://ca.slack-edge.com/T036H63TN-U5QLD4NTZ-2f05886097c3-24" alt="" />
      <img src="https://ca.slack-edge.com/T036H63TN-U0HNH9ZJ8-7d2cf5865525-24" alt="" />
      <img src="https://ca.slack-edge.com/T036H63TN-USLACKBOT-sv41d8cd98f0-24" alt="" />
      <img src="https://ca.slack-edge.com/T036H63TN-U0L5E8JG1-0179af4ceca2-24" alt="" />
      <img src="https://ca.slack-edge.com/T036H63TN-U0L5FEL3U-48e06b52480b-24" alt="" />
      <div>+2</div>
      15 replies
      <div>
        <span>Last reply today at 19:13</span>
      </div>
  </div>
</div>

Отже, в замовника немає портфоліо і специфікація для блогу теж ще не визначена, зате є достатньо інформації, щоб скласти більш-менш адекватну сторінку резюме! Клієнт також хоче, щоб сторінка була адаптивною, доступною, інформативною, тощо. Не тільки це, а ще й її треба розмістити на якомусь хостингу, програмний код повинен бути чистим і зрозумілим, а також потрібна хороша документація! О-о-о-о-о-го. Само собою, замовник хоче мати можливість слідкувати за процесом розробки. Студент радіє, бо це саме те, що він так довго мріяв робити! Нарешті за гроші, ясне діло. І тим не менше, варто було б дослідити суть завдання дещо глибше — раптом на ринку вже є рішення проблеми? Чи не зручніше буде долучитися до розробки схожого програмнаго продукту з відкритим кодом і форкнути його або запропонувати функціонал, якого не вистарчає, замість створювати все з нуля? На радість, швидкий пошук в GitHub каже, що схожа сторінка вже існує і навіть містить інструкцію по її створенню. З деякими технологіями доведеться працювати вперше, але інструкція порізана на частини і це допомагає легко спланувати, які конкретно завдання треба буде виконати і скільки часу орієнтовно на це треба буде затратити. Студент відповідає замовнику...

**― Yeah, sure, I'm on it, let's go! _(don't worry about tasks and milestones, save your time, I'll create them myself accordingly to this tutorial, you'll be able to track progress in GitHub)_**

...і береться за ту інструкцію:

1. Well, [**this is Git**](https://xkcd.com/1597/). You'll need it. First things first, skim through [**Understanding the GitHub flow**](https://guides.github.com/introduction/flow/) and [**Hello World**](https://guides.github.com/activities/hello-world/) guides to get an overview of terminology and core concepts
2. Open up [**GitHub**](https://github.com/) and sign in
3. Create a new repository named **"homepage"** (e.g. **volodymyr-kushnir/homepage**), set description to "My very own personal website. Basically this is just a résumé."
4. Create two projects — **"Homepage"** and **"Resume"** ― using **Kanban (Automated)** as a project template for both. Here's the description for the **Homepage** project:

   > **Make homepage great!** Make it responsive, accessible, informative, credible, readable, descriptive, compatible, consistent, uncluttered, simple, secure, up-to-date. Alternatively, just give up.

   And this is the description for the **Resume** project:
   
   > A typical résumé contains a "summary" of relevant job experience and education, as its French origin implies. The résumé is usually one of the first items, along with a cover letter and sometimes an application for employment, which a potential employer sees regarding the job seeker and is typically used to screen applicants. **The goal of this project is to create an online version of the résumé using HTML, CSS, and the minimum amount of JavaScript.**

5. Add topics _(e.g. "pesonal website homepage resume gh-pages html css binary-studio-academy bsa18")_
   <div class="bubble">
      Alright, mate, from now on all the tasks should be listed in the projects! Add new task <strong>now</strong>!
   </div>
   <div style="clear: both;"></div>
6. Update **README.md**. You might want to take a look at [**GitHub Flavored Markdown**](https://guides.github.com/features/mastering-markdown/) and [**Documenting your projects on GitHub**](https://guides.github.com/features/wikis/)  
   <div class="bubble">
      Psst, don't forget to add this as a task to <strong>Homepage</strong> project, bruv. Oh, also convert it to an issue while you're at it.
   </div>
   <div style="clear: both;"></div>
7. Create a new branch based on `master`.  
   <div class="bubble">
      Hey, c'mon fam, are you even trying?! I've asked you to put tasks into projects, so puh-leeeeeze!
   </div>
   <div style="clear: both;"></div>
8. Go see the settings for the repository, lock `master` away, default to `develop`
9. Collect the necessary information (official start of the **"Resume"** project) — it would be very nice if you could utilize GitHub's Labels and Assignees features at this point:
   1. **Скласти таймлайн**  
   Скласти список всіх _(важливих)_ життєвих подій, визначних дат, досягнень, періодів, що дали приємний і неприємний досвід, тощо. В цьому конкретному випадку довгих списків не буває, натомість бувають погано згорнуті, тому пакуємо сюди все підряд, а про _"лишні"_ події можна буде промовчати пізніше. Список повинен бути систематизованим і посортованим в такий спосіб, щоб читач швидко зрозумів _"паттерн"_ і міг легко орієнтуватись в просторі і часі цього резюме.
   2. **Скласти інтро**  
   Скласти інтро (вступ), де в 2-4 реченнях описати, що ти робиш, що подобається робити, що хочеться робити краще, що важливо робити, тощо.
   3. **Скласти блок контактної інформації**  
   Посилання на соцмережі (Facebook чи Instagram, інші), номер телефону чи адреса електронної скриньки, тощо. Може не всі лінки в світі, а тільки ті, що дійсно доречні.
   4. **Скласти додаткові інформаційні блоки**  
   Можна зробити резюме менш формальним, додавши додаткові блоки, які містять корисну інформацію, але подають її в _"розважальній"_ формі. Наприклад, що подобається і не подобається, сильні і слабкі сторони, перелік навиків чи хобі, інфографіка або ж інтерактивні модулі, тощо. Варто написати контент такого блоку раніше, ніж починати верстку, бо його розміри впливатимуть на розміщення елементів на сторінці.
   5. **Вибрати лейаут**  
   Вибрати лейаут сторінки. Натхнення можна почерпнути з робіт [**Білла Мауїнні**](https://dribbble.com/bilmaw), наприклад. Варто підбирати таке розміщення елементів на сторінці, за якого резюме буде виглядати однаково приємно що на екранах комп'ютерів та мобільних пристроїв, що на папері після друку.
10. Create **index.html**. You can use the following snippet, but please replace the `%username%` variable:
   ```
   <!DOCTYPE html>
   <html>
     <head>
       <meta charset="UTF-8">
       <title>%username% &mdash; Résumé</title>
     </head>
     <body>
     
     </body>
   </html>
   ```
11. Put `<h1>— Hello, world!</h1>` into the `body`
_Let's take a pause and be a caveman for a second — or a hacker, if you will — let's go and see how it looks like for the guys without graphical user interface (how to use `git clone`, `git branch`, `git checkout`, `git log`, `git status`). Let's also add a fake contact information into the `<head>` (learn to use `git add`, `git commit`, and `git push`)._
12. Upgrade your `<head>` (use [**HEAD**](https://github.com/joshbuchea/HEAD) for reference, keep your work in a separate branch, see [**GitFlow workflow**](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) for reference)
13. Use GitHub Desktop to clone the repository on your PC and update your `<head>`. Push it to the remote, check the changes and create your first Pull Request. Meanwhile it's safe to delete the `feature/head` branch, because it was successfully merged into `develop`
14. Merge into `master`, setup [**GitHub Pages**](https://pages.github.com/)
15. Webhooks and deploy keys
16. Continuous Integration and Continuous Deployment (Travis CI + AWS, Zeit Now)
17. [GitHub Actions](https://github.com/features/actions)
18. Subrepositories and monorepos
19. Forks and licenses