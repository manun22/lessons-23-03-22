// 'use strict';


/* lessons *** CMD.

1)Перемещение:
    cd - change directory
    cd c:\users\nikita\...
    c: or d: - перемещение по дискам;
    cd \ - в корень диска;
    .. - на уровень выше;
    ..\..\ и т.д - на 2 уровня выше и т.д.
    tab - помогает оперделить названия;
    
2)Создание папки
    md name_folder
    md - make directory

3)Удаление папки
    rd /q name_folder
    rd(remove directory)
    /q - без запроса на подтверждение

    */




/* lesson 2 - Plagins.

node.js - программная платформа, просто скачиваем с сайта;
jshint - устанавливаем npm пакет
.jshintrc - файл с настройками jshint, иначе будет работать с заводскими,ложим его в корень проектов или в конкретный
проект.

Beautify - делает код красивым,выделяем участок кода, пкм и Format Document(shift+alt+F);
JS(ES6) code snippets - сокращение кода:
    imp - import 
    fre - forEach()
    sti - setInterval
    sto - setTimeout
    con - конструктор;
    cdi - console.dir;
    clg - console.log;
jshint - отлавливает ошибки. */


/* lesson 5 - Use strict.

var(глобальная) and let(блочная); 
Проблема var,в том что она существует в коде,еще до её объявления,т.е. ==undefined;
hoisting - всплытие переменной - использование переменной до её объявления(var);
use strict - говорит о том,что работа ведется в современном режиме и некоторые неточности,которые были в старых
стандартах работать не будут. */


/* lesson 6 - Data Type.

1.Number;
2.String;
3.Boolean;
4.null;
5.undefined;
6.NaN; - действие,неподлежащие математической логике
7.BigInt;
8.Infinity and -Infinity;
9.Object([], function, {}, Date, regular expressions, errors) and Symbol; 
Массив - это частный случай объекта,просто с фиксированной нумирацией.*/


/* lesson 7 - Simple communication with user.

alert();
confirm();
prompt();
document.write(); - все изменяет на странице,на надпись - аргумент команды */


/* lesson 8 - Interpolation.

Интерполяция - внутрь строки,можно помещать выражение - `${выражение}`; */


/* lesson 9 - Operators in JS.

Смотреть таблицу приоритета операторов!!!
Инкримент(++) и Декримент(--): Префиксная и Постфиксная форма.
&& - || - и - или;
! - отрицание; */


/* lesson 10 - Git and GitHub.

Git - система контроля версий,создания репозиториев;
GitHub - сервис, онлайн хранилище репозиторие;

Инструкция:     
1) git init (установка,будет следить за проектом);
2) установить имя и почту,глобально или локально
    git config --global user.name "Nikita"
    git config --global user.email example@mail.ru

Cостояния файлов в git:
1)только создан;
git status - показывает статус репозитория
2)гит следит за файлами;
    git add -A; -добавить все файлы;
    git add *.css;
    можно добавлять конкретный файл
3)создал коммит(контрольная точка);
    git commit -a -m""; m - описание коммита,в ковычках без пробела

git log - показывает логи коммитов

На сайте GitHub создаем новый репозиторий и push его.
В следующий раз,нужно просто ввести git push; */


/* lesson 11 - GitHub, gitignore and Git Kraken.

Как получить репозиторий:
1)скачать архив с GitHub;
2)получить клон,через командную строку; (более правильный)
    из папки: git clone путьизGitHuba названиепапки;
    клонированный репозиторий,сразу связан с удаленным;
git pull; - обновляет
gitignore - файл,ложится в проект. не будет пушить файлы,которые там прописаны.
Git Kraken - сервис,для удобного просмотра репозиториев; */


// lesson 12 - Practice part 1.


/* lesson 13 - Conditions.

1)if;
2)тернарный оператор(3 аргумента): () ? условие_правды : условие_лжы;
3)switch (===,что проверяем,например переменную) {
    case (x - с чем сравниваем):
        console.log(alert());
        break;
    case y:
        ...;
    default:
        ...;
} */


/* lesson 14 - Cycle.

1)for;
2)while;
3)do while;
do {

}
while ();
4)break;
5)continue;
6)label(метка); - когда необходимо выйти из двухуровнего цикла.
 */


// lesson 15 - Practice part 2.


/* lesson 16 - Function.

1)function declaration
2)function expression
3)() => {}; - не имеет своего контекста(this);

Замыкания - функция со всеми её переменными,которые ей доступны. Функция, вначале ище переменные внутри себя,
а потом на уровень выше. 
Когда вы объявляете новую функцию и присваиваете её переменной, то в этой переменной вы храните не только
определение функции, но и её замыкание. Замыкание содержит все переменные, которые находятся в области видимости
во время создания функции. Это аналогично рюкзаку.*/


/* lesson 17 - Methods and properties String and Number.

Методы - вспомогательные Функции. Свойства - вспомогательные значения.

String:
.lengh; .toUpperCase(); .toLowerCase();
.indexOf(); - поиск строки и его индекс,аргумент строка;
.slice(); - возвращаем часть строки,аргументы индексы;
.substring(); - примерно тоже самое,что и .slice();
.substr(); - возвращаем часть строки,аргументы откуда и сколько символов;
parseInt(); parseFloat(); - переводит в другую систему исчисления,но со строкой работает по другому,возвращает
числа и строки,запинается на букве.

Number:
Math; - встроенная математическая библиотека;
Math.round(num); - округляем до ближайщего целого;
num.toFixed(); - округляет до N знаков после запятой, аргумент кол-во знаков
Math.floor(); - округляет до наименьшего значения
 */


// lesson 18 - Practice part 3.


/* lesson 19 - Callback function.

Callback - функция,которая должна быть выполнена,после того как другая функция завершила свое время выполнения. */


/* lesson 20 - Object and Destructurization objects.

delete obj.key;
for (key in obj) {} - перебор ключей объекта.
Object.keys(); - передает объект и на основании его ключей делает массив,можно применить потом length;
Деструкторизация объекта - вытаскивание свойств объекта в переменные.
метод hasOwnProperty(); - проверяет что свойство принадлежит самомму объекту,а не его прототипу. используется при
применении for in,а он любит забегать на прототипы. Если свойство принадлежит объекту то возвращает true,если нет false.
Н-р:
const x = {
    a: 1,
    b: 2,
    c: {
        f: 3,
        g: 4
    }
};

const {f, g} = x.c;
console.log(f);
console.log(g); */


/* lesson 21 - Array.

delete array[i];
array.pop(); - удаляет;
array.push(); - добавляет;
array.shift(); - удаляет;
array.unshift(); - добавляет;
for (let value of array) {} - перебор массива, можно использовать обычный for;
array.forEach(); перебирает массив. аргумент callback функция,у функции может быть 3 аргумента(item, i, array);
array.map(); array.filter(); array.reduce(); - тоже перебирают массив,при этом как-то модифицируя его.
array.map(); - создает новый массив,из результатов callback функции,те же 3 параметра.
array.find(); - ищет элемент массива, та же callback функция, ищет только первого и возвращает его;
array.filter(); - =find только всех ищет;
str.spilt(); - разбивает строку на массив, аргумент разделитель
array.join(); - разбивает массив на строку, аргумент разделитель
array.sort(); - сортировка ,но как строк; может принимать callback функцию
function compareNum(a, b) {
    return a - b;
} передаем её как аргумент array.sort(compareNum) и цифры,будет сортироваться нормально
Псевдомассив - тоже самое,что и массив,но без каких-либо методов
for in - идет по ключам;
for of - идет по свойствам; */


/* lesson 22 - Передача по ссылке или значению, Spread.

Поверхностное и глубокое копирование;
Копирование через for in;
Object.assign(); аргументы (куда помещаем,что помещаем);
array.slice(); делает копию массива;
spread...; - разворачивает структуру; */


/* lesson 23 - Основы ООП.

JS - прототипно-ориентированный язык(частный случай ООП);
[1, 2, 3] ==>(__proto__) Array.prototype ==>(__proto__) Object.prototype ==>(__proto__) null
1 ==>(__proto__) Number.prototype ==>(__proto__) Object.prototype ==>(__proto__) null
'1' ==>(__proto__) String.prototype ==>(__proto__) Object.prototype ==>(__proto__) null
and so on...
Object.setPrototypeOf();  создает прототип. аргументы(кто унаследован, от кого);
Object.create(); - создает новый объект, от прототипа. аргумент(прототип);

Н-р:
const soldier = {
    health: 400,
    armor: 100
};

const john = {
    health: 100
};

// Устаревший способ:
john.__proto__ = soldier;
console.log(john);
console.log(john.armor);

Object.setPrototypeOf(john, soldier);
const john = Object.create(soldier);  */


// lesson 24 - Practice part 4.


// lessons 25 Console of developer.


/* lesson 26 - Динамическая типизация в JS.

to String:
1)String();
2)конкатинация '' + ...;

to Number:
1)Number();
2)+;
3)parseInt & parseFloat;

to Boolean:
1)Boolean();
2)false - null, undefined, 0, '', NaN;
3)!! - console.log(typeof(!!'4')); */


/* lesson 27 - Tasks with interview.

•)Какое будет выведено значение: let x = 5; alert( x++ ); - 5
•)Чему равно такое выражение: [ ] + false - null + true - NaN
•)Что выведет этот код: let y = 1; let x = y = 2; alert(x); - 2
•)Чему равна сумма [ ] + 1 + 2? - '12'
•)Что выведет этот код: alert( "1"[0] ) - '1'
•)Чему равно 2 && 1 && null && 0 && undefined  - null
•)Есть ли разница между выражениями? !!( a && b ) и (a && b) - да,1ое булиновое значение.
•)Что выведет этот код: alert( null || 2 && 3 || 4 );  - 3
•)a = [1, 2, 3]; b = [1, 2, 3]; Правда ли что a == b ? - нет
•)Что выведет этот код: alert( +"Infinity" ); - Infinity,тип число
•)Верно ли сравнение: "Ёжик" > "яблоко"? - нет
•)Чему равно 0 || "" || 2 || undefined || true || falsе - 2 
*/


/* lesson 28 - Get elements with page.

DOM - Document Object Model (вся html страница это документ и она представляется в виде объекта,
    поэтому у нее есть свои свойтсва и методы);
document.getElementById('');
document.getElementsByClassName('');
document.getElementsByTagName('');
document.querySelector('');
document.querySelectorAll(''); 
window/document.addEventListener('DOMContentLoaded', ''); - все DOM узлы прогрузились, дерево html;*/

/* lesson 29 - Действия с элементами на странице.

element.style.backgroundColor = 'red';
element.style.cssText = 'background-color: red; width: 500px';
document.createElement('');
document.createTextNode(''); - текстовый узел;
element.classList.add('');
element.classList.remove('');
element.append(); - добавляет во внутрь в самый конец;
element.prepend(); - добавляет во внутрь в самое начало;
element.after(); - добавляет после;
element.before(); - добавляет до;
element.remove(); 
element.replaceWith(); - заменяем element аргументом;

element.innerHTML = ''; - можно вставлять html структуру;
element.textContent = '';

element.insertAdjacentHTML('', ''); 2аргумента:
1)куда ставить(beforebegin, afterbegin, beforeend, afterend);
2)что вставляем(какой-то тег например); */


// lesson 30 - Practice.


/* lesson 31 - Events.
Способы повешать событие:
1)html аттрибут;
2)в js code; - element.onclick = function() {};
    проблема,нельзя переназначить событие и норм удалить
3)в js code - element.addEventListener(); - есть 3аргумент,например once;
element.removeEventListener(); - событие и функция должны быть такими же как у удаляемого события;
Всплытие событий - если на вложенной структуре есть несколько собыйтий, обработчик срабатывает сначала на самом 
вложенном элементе и идет вверх;
event.preventDefault(); - отменяет событие по умолчанию(действие браузера) у объекта,помещается в самое начало;

У каллбэк функции события,всегда 1м аргументом идет объект события,его можно не указывать,если не нужен.

Н-р:
element.addEventListener('click', () => {}, {once: true}); */


/* lesson 32 - Навигация по DOM, обращение в элементам.

console.log(document.documentElement); - это весь <html></html>;
console.log(document.head);
console.log(document.body);
console.log(document.body.childNodes); - псевдомассив nodes, включая текстовые ноды; Текстовая нода - это перенос строчки;
Не каждый узел будет элементом, но каждый элемент это узел!
console.log(document.body.firstChild);
console.log(document.body.firstElementChild);
console.log(document.body.lastChild);

console.log(document.querySelector('').parentNode/parentNode.parentNode/parentElement);
Дата аттрибут. Указывается в html и начинается всегда с data-. Н-р: data-modal/data-close/data-current
document.querySelector('[data-attribut]'.nextSibling/previousSibling/nextElementSibling/previousElementSibling); */


/* lesson 33 - Events in mobile.

1)touchstart; - при касании элемента;
2)touchmove; - при касании и смещения пальца;
3)touchend; - убрали палец;
4)touchenter; - палец вошел на пределы элемента;
5)touchleave; - сколзил по элементу и ушел с него;
6)touchcancel; - выйти за границу обработки; */


/* lesson 35 - Async, Defer, динамические скрипты.

Аттрибуты:
1)Async - загрузка в фоновом режиме и запускается,как только был загружен,также не соблюдается очередь скриптов;
    Async должен не зависить от DOM структуры и других скриптов.~
2)Defer - загрузка скрипта в фоновом режиме,начает работать после полной загрузки DOM, также сохраняется порядок
загрузки скриптов;

Можно поместить скрипт,прямо через JS.
const script = document.createElement('script');
script.src = 'js/scritp.js'
document.body.append(script);
script.async = false; */


/* lesson 37 - classList и делегирование событий.

element.classList.length; - кол-во классов;
element.classList.item() - возвращает класс,под индексом. Аргумент - индекс.
element.classList.add('');
element.classList.remove('');
element.classList.toggle('') - если класс есть,то удаляет его,если нет то добавляет;
element.classList.contains('') - проверяет на наличие класса,возвращает true or false;

Делегирование событий - событие назначается не на сам эдемент,а на его родителя.
element.target.matches('button.red'); - вернёт true или false, в зависимости от того, соответствует ли элемент
указанному css-селектору. */


/* lesson 38 - Practice Create Tabs in a new project.

tab - вкладка

Задачи:
1)Скрыть ненужные табы.
2)Показать нужный таб.
3)Назначить обработчик события,который будет манипулировать табами. */


/* lesson 39 - Скрипты и время их выполнения, setTimeout and setInterval.

setTimeout(); Аргументы: 1ый функция,2ой время в милисекундах, 3ый аргумент, может быть аргумень функции,например
текст. setTimeout задается в переменную,чтобы легче было его определить(что он делает),и если налр потом его очистить.
clearInterval(time); - очищает таймер;
setInterval(); - тоже самое;

const time = setTimeout(function () {}, 2000);

Рекурсия  setTimeout. Проблема setInterval в том,что таймер не учитывает время выполнения функции,первый раз
сработает норм,а потом будут пролемы. Решение: заменить setInterval, рекурсивным вызовом setTimeout;
let id = setTimeout(function log() {
    console.log(`hello`);
    let id = setTimeout(log, 500);
}, 500); */


/* lesson 40 - Work wiht a Date.

Милисекунды отчитываются сначала 1970г, январь - 0 месяц.
const now = new Date(); Аргументы, например дату в виде строки.
Методы:
getFullYear(); - получение года;
getMonth();
getDate(); 1 - 31;
getDay(); 0 - воскресенье;
getTimezoneOffset(); - разница между часовым поясов и UTC в минутах;
getTime(); - милисекунды с января 1970г;
setHours(); устанвка часов;
Date.parse(); - разбирает строковое представление даты и возвращает количество миллисекунд с 1 января 1970;


const now1 = new Date('2020-11-13');
const now2 = new Date(0);
const now3 = new Date(2020, 5, 1, 20); - 4аргумент - это часы;
const now4 = new Date(31221515); - милисекунды с 1970, 0 = 1970г.
console.log(now1);
console.log(new Date.parse('2020-11-13')); */


/* lesson 41 - Создаем таймер обратного отчета на сайте.

Задачи:
1)Функция расчета таймера;
2)Функция установки разницы времени;
3)Функция обновления нашего таймера; 
Дополнения: подставлялся нолик,*/


/* lesson 42 - Параметры документа, окна и работа с ними.

window - видимое окно пользователя(например уменьшение окна браузера);
screen - видимая часть монитора;
Параметры элемента страницы:
1)clientWidth and clientHeight - ширина и высота элемента с учетом padding. Без margin and border.
2)offsetWidth and offsetHeight - ширина и высота элемента с учетом padding, margin, border.
3)scrollWidth and scrollHeight - ширина и высота элемента с учетом scrollа.
4)scrollTop и др. - показывает скроллинное значение top;
5)getBoundingClientRect(); - получает координаты элемента; координаты рассчитываются по другому.
6)window.getComputedStyle(); - аргумент - элемент,получаем стили применяемые к элементу.
    window.getComputedStyle(element).display; - получает конкретный стиль

По правилам верстки инлайн стили приоритетнее,чем СSS стили.

console.log(document.documentElement.scrollTop);
window.scrollBy() - 2аргумента (x,y). Изменение положения страницы,от текущего положения.
window.scrollTo() - 2аргумента (x,y). Изменение положения страницы,относительно всей страницы. */


/* lesson 43 - Create modal window.

Триггер - элемент,который вызывает последующие действия. Н-р: триггер - связатся с нами, вызовет модальное окно.
Дата аттрибуты - помогают в объединении тегов. Н-р: data-modal. data-close. 
Событие scroll,keydown,event.code,pageYOffset*/


/* lesson 44 - Модификации модального окна.
Задач:
1)Открытие и закрытие модального окна.
2)Прокрутка страницы,при открытом окне
3)Закрытие окна по клику на подложку и Esc.
4)Открытие окна после пролистонного сайта и промежуток времени */


/* lesson 45  - Функции-конструкторы.

Название функции-конструктора с большой буквы. Предназначена для констуирования объектов и создания
множества копий.

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`hello ${this.name}`);
    };
}

Если нет доступа к конструктору и нужно добавить какое-либо свойство используем prototype,если обычный объект,то
__proto__ или же создаем новый объект и устанавливаем прототипы.
User.prototype.exit = function (name) {
    console.log(`Пользователь ${this.name} ушел`);
};

const ivan = new User('Ivan', 28);
const alex = new User('Alex', 20);

ivan.exit();

ivan.hello();
alex.hello();

console.log(ivan);
console.log(alex); */


/* lesson 46 - Контекст вызова - This.

4 способа вызова функции и ее контекст:

1)обычный вызов: this = window, если стоит use strict - undefined.

Н-р:
function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }

    console.log(sum());
}
showThis(4, 5);


2)метод объекта: контекст вызова метода объекта - сам объект.

const obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
    }
};
obj.sum();

3)функция-конструктор и классах: контекст вызова - созданный функцией,классом - объект.

4)ручное присвоение.

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
};

sayName.call(user, 'Smith') - аргумент-контекст вызова. Дополнительный аргумент - аргумент функции.
sayName.apply(user, ['Smith']) - аргумент-контекст вызова. Тоже самое,только аргументы функции передаются в массиве.
.bind- создает новую функцию и под нее подвязывает контекст. аргумент - контекст.

function count(num) {
    return this * num;
}

const double = count.bind(2);

this обработчика события = если использовалась обычная функция,не стрелочная,то = самому элементу вызова(event.target)
а если используется стрелочная функция - то undefined.
У стрелочной функции, нет своего контекста вызова,она всегда берет его у родителя.

const obj = {
    num: 5,
    sayNumber: function () {
        const say = () => {
            console.log(this);
        };

        say();
    }
};

obj.sayNumber();

const double = a => a * 2; */


/* lesson 47 - Class (ES6).

Классы - обертка функции-конструктора. Также еще их называют синктаскический сахар.
Название класса с большой буквы. в конструкторе передаются аргументы.
extends - наследование классов.
super(); - вызывает теже аргументы,что были и у родителя. всегда идет вначале конструктора.
Принципы ООП:
1)абстракция - отделяем концепцию от ее экземпляра.
2)наследование - способность объекта или класса базироваться на другом объекте или классе.

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle {
    constructor(height, width, text, bgColor) {
        super(height, width);
        this.text = text;
        this.bgColor = bgColor;
    }

    showMyProps() {
        console.log(`Тексn: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'hello world', 'red');
div.showMyProps();
console.log(div.calcArea());

const square = new Rectangle(10, 10);
const long = new Rectangle(20, 100);

console.log(square.calcArea());
console.log(long.calcArea()); */


/* lesson 48 - Используем классы на практике.

Задачи:
1)Карточки заполнялись динамически.
2)урок с rest доработать */


/* lesson 49 - Rest оператор и параметры по умолчанию.

Rest противоположное spread, объединяет элементы в массив.
rest: ...название; прописывается последним;

const log = function (a, b, ...rest) {
    console.log(a, b, rest);
};

log('basic', 'rest', 'operator', 'useage');

function calcOrDouble(num, basis = 2) {1
    // basis = basis || 2; - параметр по умолчанию,старый вариант;
    console.log(num * basis);
}

calcOrDouble(3, 5); */

/* lesson 50 - Локальный сервера.

Сервер - бэкэнд часть.
Локальный сервера - простые и комплексные. Нужны для того,чтобы тестировать проект перед реальным сервером.
http запросы,деляться на  категории,самые популярные из них - гет(получение данных с сервера) и пост(постит данные 
на сервер) запросы. Простые сервера в основном не умеют обрабатывать пост запросы.
OpenServer and MAMP - полноценные локальные сервера. */


/* lesson 51 - JSON формат передачи данных, глубокое клонирование объектов.

http - протокол передачи гипертекста
tcp - транспортный протокол работает на 80 порту.
JSON(JavaScriptObjectNotation) - формат передачи и хранения данных,текстовый формат. Набор пар: ключ-значения.
Все строки должны быть в двойных кавычках.
Допустим объект необходимо отправить на сервер,но такой тип сервер не поймет,поэтому нужно транспортировать.
JSON.stringify(); - преобразует объект в формат json;
JSON.parse(); - преобраует JSON формат обратно в объект;
Глубокое копирование создается с помощью JSON;

const persone = {
    name: 'Alex',
    tel: '+744444',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
};

const clone = JSON.parse(JSON.stringify(persone));
clone.parents.mom = 'Ann';
console.log(persone, clone); */


/* lesson 52 AJAX и общение с сервером.

AJAX(Asynchronous Javascript and XML) - ассинхронный JS.
события:
change - когда ввели в инпут,а потом убрали с него фокус;
input - происходит,когда что-то вводится, удаляется в инпуте;
XMLHttpRequest() - это API, который предоставляет клиенту функциональность для обмена данными между
 клиентом и сервером;

const request = new XMLHttpRequest();

request.open(method, url, async, log, pass ); - собирает настройки для запроса; 
/Методы запроса:
Аргументы: 1)метод(гет,пост). 2)путь(url) 3)async(как работает код,асинхронно или нет) 4)login 5)pass.
request.setRequestHeader(); - http заголовок, несут в себе информацию,о чем запрос
request.send(); - отправляем запрос
Свойства запроса:
status - статус запроса(100,200,300,400 и т.д.)
statusText - текстовое описание ответа
response - ответ от сервера
readyState - текущие состояние запроса(0-объект создан,но опен не вызывался.1-open вызван.2-send вызван.
    3-загрузка.4-завр.)

событие readystatechange - отслеживает статус запрос в текущий момент;(readyState)
событие load - когда запрос загрузился и мы получили результат 
.toFixed(n); - округление до n знаков после запятой;

Задачи:
1)Повешать обработчик события на инпут конвертации валют
2)сделать гет запрос на значение валюты в базу данных
*/


/* lesson 53 - Реализация скрипта отправки данных на сервер.

событие submit - срабатывает каждый раз,когда мы отправляем форму.
new FormData() - собирает данные из формы,аргумент форма.
*Для input нужна всегда указывать аттрибут name,чтобы FormData смогла норм работать.
Если используем FormData,то заголовок request.setRequestHeader() не нужен,он его сам устанавливает,иначе ошибка.
Задачи:
1)Найти все формы отправки;
2)Повешать на них протокол отправки;
3)данные отправки должны быть в json формате или FormData;
4)выводить сообщения статуса; */


/* lesson 54 - Красивое оповещение пользователя.

1)Создать спиннер во время загрузки.
2)Создать функцию показа сообщений на основе модального окна. */


/* lesson 55 - Promise(ES6).

Асинхронные операция: запросы на сервер,setTimeout,setInterval;
Promise - цепочка действий,который идут друг за другом. Чтобы не использовать много callback.
resolve - обещание выполнилось; reject - отклонено, что-то пошло не так;
new Promise(function executor(resolve, reject) {}); :
1)при созд. new Promise,автоматически запускается функция исполнитель executor,которая имеет два колбека resolve & reject.
Исполнитель выполняет задачу, затем вызывает resolve или reject, чтобы изменить состояние соответствующего Promise.
Объект Promise связующее звено между 'созданием' и  'потребление'. Функции потребления могут быть вызваны методами:
.then(), .catch(), .finally();
.then(); аргументы 2 функции. 1ая,когда состояние Promise успешно, 2ая состояние с ошибкой. Если заинтересованы только в успешном выполнении,
то можно передать и один аргумент.
.catch() - аргументы 1 функция,отлавливает ошибку. .catch(error) = .then(null, error);
.finally() - аргументы 1 функция,выполнится в любом случае,когда промис завершится: успешно или с ошибкой. 
Promise.all() - возвращает обещание, которое выполнится тогда, когда будут выполнены все обещания,аргумент массив.
Promise.race() - возвращает выполненное или отклоненное обещание, в зависимости от того, с каким результатом завершится первое из переданных обещаний.

console.log('Запрос данных...');

const req = new Promise(function (resolve, reject) {
    setTimeout(() => {
        console.log('Подготовка данных...');
    
        const product = {
            name: 'TV',
            price: 2000
        };
    
        resolve(product);
    }, 2000);
});

req.then((product) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            product.status = 'order';
            resolve(product);
        }, 2000);
    });
}).then(data => {
    data.modify = true;
    return data;
}).then((data) => {
    console.log(data);
}).catch(() => {
    console.error('error');
}).finally(() => {
    console.log('Finally');
});


const test = time => {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
};

// Promise.all([test(1000), test(2000)]).then(() => {
//     console.log('all');
// });

Promise.race([test(1000), test(2000)]).then(() => {
    console.log('all');
}); */


/* lesson 56 - Fetch API.

API - application programmer interface(интерфейс программного приложения). Н-р: DOM API;
Fetch API - Fetch API предоставляет интерфейс JavaScript для работы с запросами и ответами HTTP.встроена в браузер.
jsonplaceholder;
fetch() - аргумент1 -путь,что-то хотим получить,возвращает promise. аргумент2 - объект,который контролирует настройки.
response.json()) ответ в json, response.json() - фишка fetch,преобразует в объект. это promise
response.text и т.д

fetch('https://jsonplaceholder.typicode.com/posts', {
    method: 'POST',
    body: JSON.stringify({name: 'Alex'}),
    headers: {
        'Content-type': 'application/json'
    }
})
.then(response => response.json())
.then(json => console.log(json)); */


/* lesson 57 - Методы перебора массива.

filter(); 
map();
every(); - перебирает массив, если все элементы совподает с условием, вернет true
some(); - перебирает массив, если хотя бы один элемент совподает с условием, вернет true
reduce(); - схлопывает,собирает массив в единое целое. Можно добавить начальное значение. Принимает 4 аргумента:
1ый accumulator и 3обычных,если accumulator передан, то item равен 1значению массива. Ecли не передан, то значение accumulator будет равным первому значению в массиве, а значение currentValue будет равным второму значению в массиве.
accumulator задается после функции;
Object.entries(); - превращает объект в массив массивов. [['key', 'condition']],аргумент объект.

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];
const shortNames = names.filter(function(name) {
    return name.length < 5;
});

const answers = ['IvAn', 'AnnA', 'Hello'];
const result = answers.map(name => name.toLowerCase());

const some = [4, 1, 5];
console.log(some.some(item => typeof(item) === 'number'));
console.log(some.every(item => typeof(item) === 'number'));

const arr = [4, 5, 1, 3, 2, 6];
const list = ['apple', 'pear', 'plum'];

const res = arr.reduce((sum, current) => sum + current);
const res2 = list.reduce((sum, current) => `${sum}, ${current}`);

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
};

const newArray = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);
console.log(newArray); */


/* lesson 58 - Подробно про npm и проект. JSON-server.

npm - Node Package Manager - менеджер пакетов входящих в Node.js (готовые куски кода) Их необходимо устанавливать в 
проект.
команда npm init,потом отвечаем на вопросы,если не изменяем то подтверждаем их:
package name:
version:
description:
and so on...
установка пакетов: npm i json-server -g
i = install;
json-server = name package
-g = глобально,если локально то нечего не указываем
--save-dev = указывает,что пакет будет нужен для разработки проекта,а не для его работы
--save = для работы проекта

файл gitignore в нем указывается,что не будет пушится на гит хаб,если например node_modules слишком тяжелая
если скачиваем готовые проект с гитхаба,то прописываем npm i и он возьмет эти пакеты из package.json

json-sever - модулирует работу с бэкендом jsonфайлами */


/* lesson 59 Get datas with server. Async/Await.

fetch запросы, обычно делаются через функции,т.к. данные могут быть разные,чтобы не писать много раз.(абстракция)
async & await - операторы,которые позволяют сделать из асинхронного кода,подобие синхронного. (fetch - асинхронный)
async - ставится перед функцией
await - перед участком кода,который нужно ждать

const postData = async (url, data) => {
    const res = await fetch(url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: data
    });

    return await res.json();
};

Object.entries() - делает из объекта массив с массивами;
Object.fromEntries() - наоборот,из массива с массивами делает объект.

Пример,как из new FormData() переобразовать в объект,а потом и в json
const formData = new FormData(form);
const json = JSON.stringify(Object.fromEntries(formData.entries()));

error 404, 502 - для fetch, это не ошибки,для него ошибки,это отсутствие интернета или неполадки в самом запросе
res.ok - статус запроса; throw new Error(); - всплытие объекта ошибки
if (!res.ok) {
    throw new Error(`Could not fetch ${url}, status: ${res.status}`);
} */


/* lesson 60 Дополнительно: Что такое библиотеки. Библиотека axios.

axios - библиотека для работы с запросами;
Установка библиотеки - например, вставим как скрипт на страницу(доступ через интернет или скачать) или установим как npm пакет. 
Скрипт библиотеки помещается перед главным скриптом;
cdnjs
 */

/* lesson 61 Create slide on site, var1.

Алгоритм:
1)Получить элементы и назначить Индекс,который будет показывать текущий слайд;
2)Функция - показ слайда и скрытие других, с 4 на 1, с 1 на 4
3)обработчики событий на стрелки,Индекс +1 и -1
4)проверка на кол-во слайдов,подставить 0,если их меньше 10 */


/* lesson 62 Create slide on site, var2.

Функционал,по типу карусели. Все слайды в ряд.
Алгоритм работы:

1)есть wrapper,её будет назначатся свойство overflow:hidden;
2)вторая обертка(inner), будет по типу карусели и вместит в себя все слайды в ширину;
3)перемещение слайдов будет производится относительно wrapper, при помощи свойства transform к inner;

Алгоритм действий:

1)увеличить размер inner от кол-ва слайдов,поставить их в ряд,проверить,что слайды одного размера,
для плавности перемещения сладов добавим свойство inner transition = '0.5 all';, скроем лишние элементы;
2)создаем событие,на смещение элемента, используем доп переменную для смещения 
style.transform = translateX
3)добавить смену нумерации слайдов; */


/* lesson 63 Navigation for slides.

Алгоритм работы:
1)получаем slideMain,св-во relative,относительно него будут позиционироваться точки;
2)создаем обертку для точек,добавляем класс со свойствами для позиционирования;
3)генерируем точки по циклу от количества слайдов,аттрибуты на точках,для ориентации по слайдам,класс активности точки;
4)событие перемещения по точкам;
*)сгенерированные точки,можно поместить в массив,чтобы удобнее было с ними работать; */


/* lesson 64 How saves data without DB. Work with localStorage.

localStorage - встроенный объект в браузер,который может хранить данные.(это свойство window.localStorage).
находится в консоле,вкладка application.
localStorage нужен для того чтобы запоминтаь настройки,тайминги,формы на сайте и многое другое. У каждого домена он
уникальный. Помещается около 5мб инфы. Данные хранятся,как и у объекта в key: value;

У localStorage есть 4 метода:
localStorage.setItem(key, value);
localStorage.getItem(key);
localStorage.removeItem(key);
localStorage.clear();

При помещении в localStorage объекта с информацией,чтобы он норм прочитался,стоит объект переделать в JSON формат.
При обращении к данным их нужно JSON.parse();
const alex = {
    name: alex,
    age: 20
};

localStorage.setItem('alex', JSON.stringify(alex));
*/


/* lesson 65 Regular expressions.

Regular expressions нужны для работы со строками. Состоит их 2х частей: паттерн(шаблон) + флаги(условия);
создаем: new RegExp('pattern', 'flags');
    :  /pattern/flags - короткий способ;

флаги(классичекие): i(найти внезависимости от регистра), g(несколько вхождений), m(многострочный режим(включая перенос строки));
/n/igm

.search(); возвращает индекс поиска или -1,возвращает только 1ое совпадение,флаг g бесполезен
.match(); возвращает массив, со [значение, индекс, строку],также покажет все найденные значение с флагом(g)
.replace(); заменяет часть строки,1ый аргумент что..., 2ой на что;
/./ - берет все символы;
/\/ - икронирование, нужно для поиска конкретно символа,например '.', иначе обычная точка будет считана за символ
и будет выполнен поиск по другому,ищем их в документации
/\./ - ищет точку;
.test(); - проверит совпадения на паттер,вернет true or false;
const ans = prompt('Введите Ваше имя');
const reg = /n/g;
console.log(ans.search(reg));

const pass = prompt('Password');
console.log(pass.replace(/\./g, '*'));


console.log('12-34-56'.replace(/-/g, ':'));

Классы регулярных выражений:
1) \d - ищем цифры [0-9];
2) \w - все буквы и цифры [A-Z a-z 0-9];
3) \s - одиночный пробел,включает табуляциюю,подачу страницы,перевод строки;
4) \D - не числа [^0-9];
5) \W - не буквы [^A-Z a-z 0-9];

const ans = prompt('Ваше число');
const reg = /\d/g;
console.log(ans.match(reg));

const str = 'My name is R2D2';
console.log(str.match(/\w\d\w\d/i)); */


/* lesson 66 Create calculator on the site.

Алгоритм работы:
1)собрать данные для расчета и подставить в формулу,задать необходимые переменные для фомулы;
2)функция - общая формула расчета для муж и жен;
3)функция - получение статических данных(пол,активности), у них есть класс;
4)функция - обработка инпутов;
5)функция расчета должна срабатывать каждый раз при действии на странице; */


/* lesson 67 Create calculator on the site 2.

Доработка с помощью RegExp и localStorage:
1)добавить проверку на ввод числа
2)добавить в localStorage сохранение данных */


/* lesson 68 Геттеры и сеттеры (свойства объектов).

Объект состоит из: 
1)свойств(они описывают объект):
    а)свойства данные(обычные,описывающие)
    б)свойства аксесоры(комплекс,позволяет как присваивать так и получать значения)
    Аксесоры делятся на:
        геттеры(получать значения свойства)
        сеттеры(устанавливать значения свойства)

2)методы(что умеет делать объект);
Нужны,например,чтоьы получить больше контроля над свойствами объекта

const persone = {
    name: 'Alex',
    age: 25,

    get userAge() {
        return this.age;
    }

};

console.log(persone.userAge = 30);
console.log(persone.userAge); */


/* lesson 69 Инкапсуояция.

Инкапсуояция - один из принципов ООП. сокрытие внутреностей программы(функций,переменных и т.д.) от внешнего мира.
В ООП это означает,что объект хранит свое состояние в приватном порядке и только методы объекта имеют доступ для
его изменений.
Экспериментальный синтаксис,позволяет создавать свойства нашего класса вне конструктора.
_переменная - приватная переменная;
#переменная - приватная переменная в классах(Экспериментальный синтаксис);

Примеры инкапсуляции в JS:
1)создание переменной в функции конструктор и обращению к ней с помощью функций гет и сет
2)в конструкторе класса,создание переменной с именем начало _name условное принятое обозначение 
приватных переменных,изменять её лучше с помощью аксесоров,хотя можно и напрямую(но тогда в этом нет смысла)
3)эксперементальный синтаксис,создание вне конструктора с добавлением #. Делает переменную приватной,изменение с помощью аксесоров.

class User {
    constructor(name, age) {
        this.name = name;
        this._age = age;
    }

    #surname = 'Petrychenko';
    
    say() {
        console.log(`Имя пользователя: ${this.name}${this.#surname}, возраст: ${this._age}`);
    }

    get age() {
        return this._age;
    }

    set age(age) {
        if (typeof age === 'number' && age > 0 && age < 110) {
            this._age = age;
        } else {
            console.log('Недопустимое значение!');
        }
    }
}

const ivan = new User('Ivan', 27);

console.log(ivan.name);
console.log(ivan.age);
ivan.age = 99;
console.log(ivan.age);
console.log(ivan.surname);

ivan.say(); */


/* lesson 70 Прием модуль,как и зачем его использовать.

Прием модуль - позволяет скрыть данные скрипта и отделить их друг от друга, отдельные js файлы. 
Хорошо написанный модуль - независимый, не зависит от других частей кода,обеспечивает чистоту зоны видимости. 
Глоб переменных должно быть, как можно меньше.

Создание модулей:
1способ) - исп анонимную-самовызывающуюся функцию: (function(){}()); внешние скобки,потому что она анонимна;
2способ) - исп объектного интерфейса, модуль записываем в переменные и в нем возращаем методы,которые будут
доступны снаружи; */


/* lesson 71 Webpack. Собираем наш проект.

Браузеру по умолчанию не умеет собирать модули, понимать экспорты и импорты, ему нужен сборщик. 
Любая модульная система должна быть собрана в один результирующий файл;
Webpack - сборщик модулей. 
https://webpack.js.org/guides/getting-started/
Настройка Webpack:
1)установить npm пакет
2)2 вида настроек: заводские и ручные
файл конфигурации webpack:

let path = require('path');

module.exports = {
  mode: 'development', - режим,сейчас стоит для разработки, при работе установить в production(будет быстрее работать,включена оптимизация кода). По умл стоит production(если без настроек)
  entry: './js/script.js', - по умл src/index.js , файл с которого начинаем,обычно включает в себя все зависимости импорты
  output: {
    filename: 'bundle.js', - файл выхода,который получится в итоге
    path: __dirname + '/js' - куда складываем, _dirname -корень папки
  },
  watch: true, - смотрит в автоматическом режиме за изменением файлов

  devtool: "source-map", - позволяет смотреть отдельные модули,например в консоле появится папка webback

  module: {} - подключает различные модули(babel, typeScript)
};

Галп - планировщик задач,можем создавать различные задачи,не умеет собирать скрипты,обрабатывать img и т.д.

CommonJS - API для написания модулей;  
module.exports = (что экспортируем,например функцию); - в файле где написано функция;
const xxx = require((путь к файлу с экспортом)); - в файле куда экспортируем 
Пример:
function Welcome() {
    this.welcome = function() {
        console.log(`Welcome to the page!`);
    }
}

module.exports = Welcome;
В файле куда экспортируем:
const Welcome = require('./путь к файлу');
Теперь можем использовать.
const ivan = new Welcome()
*/


/* lesson 72 ES6 Modules.

Новый стандарт позволяет формировать модули,как и CommonJS.
Прописываем ключевое слово export и import:

export let one = 1; Пример1,короткая запись.

let two = 2;    
export {two};   Пример2, имя экспортируемого файла в {};

export function sayHi() {
    console.log('hello!');
}

Самое главное,чтобы каждая сущность имела свое имя!!!

import {что импортируем} from './путь откуда'; 
Доп. фишки:
import {one as two} from ... - меняет имя переменной с one на two;
import * as data from ... - импортирует все в объект data
Эти файлы также нужно собрать.
Экспорт по умолчанию(должен быть только 1):
export default function sayHi() {
    console.log('hello!');
}
import sayHi from... - экспортируется не как объект,а на прямую

<script type="module"> - последовательно подключит файлы,вначале експорт,потом импорт,но не собирет их сам*/


/* lesson 73 Собираем проект и фиксим баги.

1)делаем модульность ES6;
2)не стоит привязываться к конкретным переменным;
3)прием вызова функции из callback () => namefunction();
4)функции работающие с серверами,обычно выносят в отдельную папку/файл;
5)для слайдов используем деструктуризацию объектов;

Модули можно и нужно передавать и использовать один в другом; */


/* lesson 74 Формируем портфолио на GitHub.

В гитхаб пушат не только целые проекты,а и отдельные модули с их описанием и т.д. */


/* lesson 75 Ошибки. Как избежать поломки своего кода.

Конструкция try & catch:
Вначале выполняется код в try,если нету ошибок,то catch просто игнорируется. Если ошибка,то выполняется catch.
Особенность конструкции в том,что код после нее,если даже там есть ошибка,выполняется.
Также конструкция используется для создания кода,который используется для многих страниц.

try {
    console.log('Normal');
    console.log(a);
    console.log('result');
} catch(error) {
    console.log(error.name);
    console.log(error.message);
    console.log(error.stack);
} finally {

}

console.log('still'); */


/* lesson 76 Как превратить код ЕS6+ в старый формат ES5. Babel, Core.js и полифилы.

npm install --save-dev @babel/core @babel/cli @babel/preset-env
npm install --save @babel/polyfill
@ - вытаскиваем определенные кусочки из целого пакета babel
@babel/preset-env - настройки babel пакета, env самый популярный

babel config.json файл с настройками,можно исп отдельно или записать их в webpack
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {        - список браузеров,на которые стоит ориентироваться,сейчас рекомендуется записывать их в package-json
          "edge": "17",                 свойство "browserslist": ["> 1%"], в реальной практике не перечисляются все браузеры,а 
          "firefox": "60",              используется диапозон,есть сайт browserlist,в котором показывается,какие браузеры и их % использования
          "chrome": "67",
          "safari": "11.1"
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ]
  ]
}

Пример из webpackconfig.js:
'use strict';

let path = require('path');

module.exports = {
  mode: 'development',
  entry: './js/script.js',
  output: {
    filename: 'bundle.js',
    path: __dirname + '/js'
  },
  watch: true,

  devtool: "source-map",

  module: {
    rules: [       - правила для наших модулей
      {
        test: /\.m?js$/,  - ищем все js файлы
        exclude: /(node_modules|bower_components)/,     - исключения
        use: {
          loader: 'babel-loader', - связывает webpack и babel, необходимо установить npm i babel-loader --save-dev
          options: {
            presets: [['@babel/preset-env', {       - настройки preset
                debug: true,
                corejs: 3,                          - библиотека corejs
                useBuiltIns: "usage"                - позволяет выбрать только те полифилы,которые нам нужны
            }]]
          }
        }
      }
    ]
  }
};

Полифилы - участки кода, которые имулируют код в современном стандарте.


Core.js - стандартная библиотека JS которая включает полифилы для всего,есть функция которая позволяет использовать только
те полифилы,которые нужны для конкретного проекта,а не все подряд

Бывает,что все равно,что-то может не работать,тогда необходимо искать полифилы в ручную и использовать их в модялях,
где они нужны,смотреть документацию.

После того как все установки сделаны,заного инициализируем webpack;

Импортировать можно пакеты из node_modules. - import 'путь к файлу'; */


/* lesson 77 Современные библитеки и фреймворки.

Библиотеку - подключаем и используем,как хотим.
Фрейморки - это уже философия и они диктуют правила,как писать код.(готовые решения)
SPI - single page application; (приложения в браузере,когда можно работать со страницей и она не перегружается)

1)Angular(google) - фреймворк,основанный на TypeScript(отдельный язык программированя,который потом превращается в JS)
 -node.js;
 -TypeScript;
 -Webpack;
 -MVC pattern - шаблон проектирования приложения;
 -Angular;

2)React(facebook) - библиотека;
 -node.js;
 -JSX(препроцессор);
 -Babel;
 -Webpack;
 -React;

3)Vue - фреймворк,
-node.js;
-Webpack;
-Vue */


/* lesson 78 Библиотека Jquery.

Подключение: 1)скачать 2)cdnjs 3)npm
import $ from 'jquery'; - импортируем конкретную сущность
Мораль такова: нативный JS умеет все тоже,что и Jquery,однако часть огромных старых сайтов могут его использовать. */


/* lesson 79 Функции генераторы.

Вызывается такая функция с помощью *, function* name() {}
Функция генератор - последовательно генерирует результат. При 1м вызове вернет 1ый результат,при 2м - 2ой и т.д.
Кол-во вызовов задается ключевым словом yield
Чтобы вызвать следующий шаг генератора,вызываем метод .next()
Функция возвращает объект с 2мя значениями {value: результат функции; done:true/false(полностью ли вып функция)}
.next()
.next().value - сразу к значению
Функцию можно перебрать через for of,чтобы запустить все результаты

function* generator() {
    yield 'S';
    yield 'c';
    yield 'r';
    yield 'i';
    yield 'p';
    yield 't';
}

const str = generator();

console.log(str.next());
......
console.log(str.next());


function* count(n) {
    for (let i = 0; i < n; i++) {
        yield i;
    }
}

for (let k of count(7)) {
    console.log(k);
}

const counter = count(7);
console.log(counter.next().value); */


/* lesson 80 JS анимации, requestAnimationFrame.
https://html5book.ru/css3-animation/
https://learn.javascript.ru/js-animation#funktsii-raschyota-vremeni

анимации можно делать с помощью СSS,так они будут использовать меньше ресурсов,но не все анимации можно сделать с CSS

Два вида анимаций в JS:
1)через setInterval - минусы,требует больше ресурсов, жестко заданная частота смены и повторная перерисовка
2)requestAnimationFrame - запускает функции в качестве анимаций, подстраивается под частоту обновления браузера,
меньше нагрузка

requestAnimationFrame - запускает функцию в виде callbackа, аргумент функция анимация;
requestAnimationFrame(myFunctionWithAnimation) - при запуске начинает зацикливать информацию 

отмена анимации:
1)ложится в переменную id = requestAnimationFrame(myAnimation);
2)отмена: cancelAnimationFrame(id); */


/* lesson 81 Event loop, подробная работа асинхронных и синхронных операций.

Event loop - событийный цикл.
Все событийные callbackи асинхронные;
web apis - контейнер для запоминания асинхронных функций
Работают по типу стека. Сначала код становится в очередь(callback queue) потом в стек(call stack и исполняется)
если код асинхронные то он запоминается браузером(wep apis),а когда требуется в очередь и в стек.
Если функция очень тяжелая,она может затормозить код. Как вариант решения разбить задачу на маленькие.

console.log(1);

setTimeout(() => {
    console.log('timeout');
}, 4000);

setTimeout(() => {
    console.log('timeout_4');
}, 4000);

console.log(2); */


/* lesson 82 Работа с готовым кодом.

Предпочтение отдаем коду,который привлекает меньше зависимостей(библиотек)
Можно наткнутся на неподдерживаемые репозитории,в которых будут баги

Работа со слайдером:
1)tiny slider
2)slick с Jquery
3)owl carousel

Hammer.js - библиотека с touch событиями;
Nisnom.com
Решения можно искать на гитхабе. */


/* lessons *** Общие тезисы по 1ой части JavaScript. 

*/





// ----------REACT--------------

/* lesson 83 Про вторую часть урока. */


/* lesson 84 Как работать с ESLint.

ESLint - плагин,по типу jshint,только позволяет работать с react и препроцессором JSX(помись js и html);
Нужен конфигурационный файл. Используется в командной строке,команда eslint script.js проанализирует файл
и выведет ошибки. */


/* lesson 85 Знакомство с React.js Стандарты ES6-8.

Фишка объектов,если имя ключей совпадает с именем переменных,которые мы туда хотим поместить,то пару ключ: свойство,
можно записать короче,только ключ. Запись методов тоже сократилась method() {} Пример:

const x = 1,
      y = 2;

// const obj = {
//     x,
//     y
// };

const obj = {x, y,
    calcSq() {
        console.log(this.x * this.y);
    },
    del() {
        console.log(this.x / this.y);
    }
};

obj.calcSq();
obj.del();

Деструкторизация.

const user = {
    name: {
        first: 'alex',
        second: 'smith'
    },
    pass: 'qweqw',
    rights: 'user'
};

const {name: {first, second}, pass, rights} = user;

const arr = [[1, 2], [3, 4]];

const [a, b, c] = arr;
const [, , f] = arr;
const [[g, e], [t, p]] = arr;
console.log(a);
console.log(b);
console.log(c);
console.log(f);
console.log(g);
console.log(e);
console.log(t);
console.log(p);

const {gender: {male: [a, b], female: [c, d]}} = country; */


/* lesson 86 Homework.

homework.js */


/* lesson 87 Модульная структура, зачем она нужна в React. Собираем проект.

import React, {Component} from 'react';

Создание react проекта - npm i create-react-app.
3 команды:
npx create-react-app my-app  - имя проекта (my app - имя проекта)
cd my-app - перейти в папку с проектом
npm start - запуск приложения
Нельзя использовать в папке,где уже был npm init, могут быть конфликты. */


/* lesson 88 Препроцессор JSX. Лекция.

import React - нужен для того чтобы babel странсформировал наш JSX в обычный JS.
Если создаем елемент в несколько строк,то нужно его окружить ();
Несколько блоков в элементе создать нельзя,их нужно обернуть в div,из-за createElement(создает только один файл)

Основная концепция реакта,разделение блоков на компоненты. Компоненты - это функции,которые могут возвращать
JSX элементы,должны быть написаны с большой буквы,иначе babel воспримит их как обычный элемент.(желтым цветом)
{} - можно помещать переменные,выражения,блоки и т.д.,но не объекты
Aтрибуты пишитуся в формате camelCase. */


/* lesson 89 Препроцессор JSX. Практика.

Создаем приложение по типу твиттера:
1)подключим bootstrap стили твиттера и иконк по ссылкам.
2)разделим наше приложение на компоненты:
    а)шапка
    б)фильтрация постов
    в)список постов,можно каждый пост вынести в отдельный компонент
    г)панель добавления постов */


/* lesson 90 HomeWork.

Проработать начало приложения twitter и добавить стили CSS. */


/* lesson 91 Свойства и состояния компонентов. События в React. Теория.

Конструкия,чтобы не городить лишних дивов:
1)<React.Fragment></React.Fragment>;
2)<> </> - современный синтаксис;

Чтобы изменять конструктор, можно внутрь него передать свойство props.
Свойство props - объект,который мы можем передовать,как аргумент конструктора. Вместо props,можно использовать 
деструкторизацию переменных.

Конструктор нельзя менять,только заного рендерить и она не имеет своего личного состояния,если вызывается много раз.
Использование класса,позволяет хранить состояние у каждого нового объекта.
Для динамического изменения свойств,в реакт создается свойство state в виде объекта и из него будем вытаскивать,то
что нам нужно. Свойства state нужно правильно менять, используем команду:
setState() - перезаписывает объект с состояниями. Внуть обычно идет callback,аргумент(сам объект),чтобы свойства
state могли нормально перезаписываться(последовательно)

Н-р:
this.setState(state => ({
    years: ++state.years
}))
Не забыть привязать контекст вызова,каждому экземпляру;(bind,arrow function,вне конструктора(тоже самое что и стрелочная))

Чтоьы назначить обработчик события,прописываем onClick{передаем функцию},в формате camelCase   */


/* lesson 92 Свойства и состояния компонентов. События в React. Практика.

У компонента может быть id, который генерируется сервером,чтобы вслучаи формирования новой верстки,его не перерисовывать.
Применяем id в формировании верстки,в качестве аттрибута.

Reacct.Component - базовый класс React, у которого единственный и обязательный метод render();

1)изменить текст ListItem с помощью свойств props.
2)добавить постам свойство important
3)изменение текста,как будто он пришел от БД.
4)сформировать класс ListItem с сохранением состояния
5)добавить событие onClick на btn, чтобы выделять важное
6)добавить событие onClick на span, чтобы появлялись лайки */


/* lesson 93 Подключаем стили и знакомимся с styled-components. Теория.

Инкапсуляция стилей - чтобы стили не пересикались.

npm run eject - необратимая операция,которая вытаскивает настройки(webpack,babel),обратно собраьт их не получится.

create-react-app уже поддерживает sass:
npm i node-sass --save ; - устанавливаем препроцессор sass,который уже есть в react. Будет компилировать sass код в
стандартный css код.
Существует подход стилизации приложения в виде CSS модулей.
Если есть 2 одинаковых класса в подключаемых стилях CSS,то может возникнуть ошибка.
Реакт воспринимает модульную систему СSS,только если будет правильное название файла(app.module.css)
Н-р: import style from './App.modules.css'; - это значит в компонент импортируем объект style со стилями из 
app.modules.css и можем их использовать в компоненте. - это будет инкапсуляция стилей

npm i reactstrap bootstrap@4 --save ; устанавливает современный boostrap
import 'bootstrap/dist/css/bootstrap.css' - подключение bootstrap в index.js
Использование: заходим на сайт,ищем что нужно и import компоненты. Н-р:
import { Button } from 'reactstrap';

CSS in JS - множество библитек.
Самая популярная из них style-component - создает уже стилизированный(инкапсулированные) элементы.
npm install --save styled-components
import styled from 'styled-components'; - импортируем стили.
Работа видется с помощью ключевых слов: styled.div - создаем стили для дива и т.д.
Работают также вложенности как и в обычном сss и условия.
Пишет стили прямо в коде js, пример:

const AppBlock = styled.div`
    margin: 0 auto;
    max-width: 800px;
`

const StyleAppBlock = styled(AppBlock)` - наследуем блоков styled.
    background-color: red;
`

const Header = styled.div`
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    h1 {
        font-size: 26px;
        color: ${props => props.colored ? 'red' : 'black'};
        :hover {
            color: blue;
        }
    }
` */


/* lesson 94 Создаем собственные события и работаем с иммутабильностью. Практика.

Иммутабильность - называется объект, состояние которого не может быть изменено после создания. Результатом любой 
модификации такого объекта всегда будет новый объект, при этом старый объект не изменится.
Удаляем посты(со страницы и БД);
Функционал по передачи события по цепочки.
state - напрямую изменять нельзя,если это какой-то массив или объект,то нужно чтобы он заного генерировался. */


/* lesson 95 Работа с формами в React.

1)Переделать функции important and like,чтобы данные хранились в одном месте(app),а не во внутреннем состоянии items.
2)Создать функционал подсчетов постов и лайков.
3)создать обработчик события change and submit на форму.
4)функция searchpost, поможет indexof, в состояние переменную поиска
5)функцию фильтрации, сформировать кнопки поиска через перебор масива 

Логика построения поиска и фильтрации по компонентам:
1)функция searchpost - прогнать данные и попытаться найти совпадения
2)создаем переменную,которая будет отрисовывать наши посты от searchPost(data, term)
3)получаем term из input
4)пишим функцию,которая будет обновлять наш главный term, от захватченного в инпуте
-----
1)состояние фильтра, функция filter,post
2)двойная фильтрация постов
3)в пост фильтер генерируем создание кнопок,на основе массива данных this.buttons. в нем будут объекты с 
ключами name(фильтрация) и label(текст кнопки)
4)параметр по умолчании all
5)создать класс активности кнопки от фильтра по умолчании
    'btn-info' : 'btn-outline-secondary'
6)функция обновления filter

Не контролируемый элемент, наш input контролирует состояние,но никто не контролирует input.
value={this.state.text} теперь при повторном рендаринге,у input будет значение*/


/* lesson 96 Начинаем работать с сервером Fetch API.

Урок про fetch().

Get запрос:
fetch('https://jsonplaceholder.typicode.com/posts/1')
    .then((response) => response.json())
    .then((myJson => console.log(myJson)))

response.json() - возвращает promise,который нужно дальше обрабатывать;

POST запрос:
let url = 'https://jsonplaceholder.typicode.com/posts/',
    data = {username: example};

fetch(url, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
        'Content-type': 'application/json'
    }
})
    .then((response) => response.json())
    .then((myJson => console.log('Success', myJson)))
    .catch(error => console.error('Error', error));


Запросы через функции с асинхронностью и обработкой ошибки.
const getResource = async (url) => {
    const res = await fetch(url);

    if (!res.ok) {
        throw new Error(`Could not fetch ${url}, status: ${res.status}`);
    } 
    const some = await res.json();

    return some;
}

getResource('https://jsonplaceholder.typicode.com/todos/1')
    .then((res => console.log(res)))
    .catch(error => console.error(error));


Асинхронность:
async - await: как бы говорим JS, что сейчас будет асинхронная функция и надо бы подождать результат ее выполнения,
    await(то что мы ждем) */


/* lesson 97 Продолжаем работать с сервисом. Работа с API.

src={process.env.PUBLIC_URL + 'img/error.jps' alt="error"} - чтобы получить путь к папке public из src */


/* lesson 98 Homework.

Начиная с урока 96:
1)создать new project throne-app(установить reactstrap, bootstrap@4, styled-components)
2)сделать папку service, написать класс по получению данных от сервиса(персонажи,дома,книги) */


/* lesson 99. Жизненный цикл компонентов.

Этапы жизненного цикла:
1)Компонент появился на странице.
    componentDidMount();
2)Компонент обновляется. Если внего добавляются новые props или обновляется setState
    componentDidUpdate();
3)Компонент удален.
    componentDidWillUnmount();
-)Произошла ошибка.
    componentDidCatch();  

На каждом этапе жизненного цикла можем вызвать функции - hooks. */


