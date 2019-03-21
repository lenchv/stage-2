**Закінчити проект.**  

<strong>Створити класс “Fighter”. Клас повиненин приймати значення name, power і health. Також клас повинен мати методи “setDamage” та “hit”.</strong>

Метод <em>“setDamage”</em> приймає значення “damage” і наносить урон змінюючи значення <em>health (health = health - damage)</em>, і виводить в консоль строку <em>“health: ”</em>.

Метод <em>“hit”</em> приймає значення <em>“enemy”, “point”</em>, і в середині викликає метод переданого обекту <em>“enemy.setDamage(damage)”</em>. “damage” вираховується наступним чином - <em>damage = point * power</em>, де <em>point</em> - змінний параметр, прийнятий в функцію <em>"fight"</em>, power - це властивість об'єкту який наносить урон.

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