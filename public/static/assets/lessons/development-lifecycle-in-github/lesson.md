<div class="bubble">
  📢 <strong>― Hey, hola, привіт!</strong><br />Вже за два абзаци розпочнеться лекція. Але!<br />It's dangerous to go alone! Take this: <a href="https://git-scm.com/"><strong>Git</strong></a>, <a href="https://desktop.github.com/"><strong>GitHub Desktop</strong></a>, <a href="https://code.visualstudio.com/"><strong>Visual Studio Code</strong></a>.
</div>
<div style="clear: both;"></div>

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
      <em>― Alright, mate, from now on all the tasks should be listed in the projects! Add new task **now**!</em>
   </div>
6. Update **README.md**. You might want to take a look at [**GitHub Flavored Markdown**](https://guides.github.com/features/mastering-markdown/) and [**Documenting your projects on GitHub**](https://guides.github.com/features/wikis/)  
   📢 _― Psst, don't forget to add this as a task to **Homepage** project, bruv. Oh, also convert it to an issue while you're at it._
7. Create a new branch based on `master`.  
   📢 _— Hey, c'mon fam, are you even trying?! I've asked you to put tasks into projects, so puh-leeeeeze!_
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
   📢 _― Свій лейаут я підглянув в одній з робіт ([Resume](https://dribbble.com/shots/1828130-Resume)) [Ірини Нежинської](http://www.nezhynska.com/)._
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
📢 _― Let's take a pause and be a caveman for a second — or a hacker, if you will — let's go and see how it looks like for the guys without graphical user interface (how to use `git clone`, `git branch`, `git checkout`, `git log`, `git status`). Let's also add a fake contact information into the `<head>` (learn to use `git add`, `git commit`, and `git push`)._
12. Upgrade your `<head>` (use [**HEAD**](https://github.com/joshbuchea/HEAD) for reference, keep your work in a separate branch, see [**GitFlow workflow**](https://www.atlassian.com/git/tutorials/comparing-workflows/gitflow-workflow) for reference)
13. Use GitHub Desktop to clone the repository on your PC and update your `<head>`. Push it to the remote, check the changes and create your first Pull Request. Meanwhile it's safe to delete the `feature/head` branch, because it was successfully merged into `develop`
14. Merge into `master`, setup GitHub Pages
15. Webhooks and deploy keys
16. Continuous Integration and Continuous Deployment (Travis CI + AWS, Zeit Now)
17. [GitHub Actions](https://github.com/features/actions)
18. Subrepositories and monorepos
19. Forks and licenses