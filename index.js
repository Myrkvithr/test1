console.log('Вёрстка валидная +10\n\nВёрстка семантическая +20\nВ коде странице присутствуют следующие элементы (указано минимальное количество, может быть больше):\n<header>, <main>, <footer> +2\nшесть элементов <section> (по количеству секций) +2\nтолько один заголовок <h1> +2\nпять заголовков <h2> (количество секций минус одна, у которой заголовок <h1>) +2\nодин элемент <nav> (панель навигации) +2\nдва списка ul > li > a (панель навигации, ссылки на соцсети) +2\nдесять кнопок <button> +2\nдва инпута: <input type="email"> и <input type="tel"> +2\nодин элемент <textarea> +2\nтри атрибута placeholder +2\n\nВёрстка соответствует макету +48\nблок <header> +6\nсекция hero +6\nсекция skills +6\nсекция portfolio +6\nсекция video +6\nсекция price +6\nсекция contacts +6\nблок <footer> +6\n\nТребования к css +12\nдля построения сетки используются флексы или гриды +2\nпри уменьшении масштаба страницы браузера вёрстка размещается по центру, а не сдвигается в сторону +2\nфоновый цвет тянется на всю ширину страницы +2\nиконки добавлены в формате .svg. SVG может быть добавлен любым способом. Обращаем внимание на формат, а не на способ добавления +2\nизображения добавлены в формате .jpg +2\nесть favicon +2\n\nИнтерактивность, реализуемая через css +20\nплавная прокрутка по якорям +5\nссылки в футере ведут на гитхаб автора проекта и на страницу курса https://rs.school/js-stage0/ +5\nинтерактивность включает в себя не только изменение внешнего вида курсора, например, при помощи свойства cursor: pointer, но и другие визуальные эффекты, например, изменение цвета фона или цвета шрифта. Если в макете указаны стили при наведении и клике, для элемента указываем эти стили. Если в макете стили не указаны, реализуете их по своему усмотрению, руководствуясь общим стилем макета +5\nобязательное требование к интерактивности: плавное изменение внешнего вида элемента при наведении и клике не влияющее на соседние элементы +5\n');


let btn = document.querySelector('.hamburger-btn');
let menu = document.querySelector('.header__nav-hamburger-menu');
let overlay = document.querySelector('.header__nav-hamburger-overlay');
let links = document.querySelectorAll('.header__nav-link');


btn.addEventListener('click', function () {
    btn.classList.toggle('active');
    menu.classList.toggle('header__nav-hamburger_active');
    overlay.classList.toggle('header__nav-hamburger-overlay_active');
});

overlay.addEventListener('click', function () {
    overlay.classList.toggle('header__nav-hamburger-overlay_active');
    btn.classList.toggle('active');
    menu.classList.toggle('header__nav-hamburger_active');
});


for (let i = 0; i < links.length; i++) {
    links[i].onclick = function (e) {
        btn.classList.toggle('active');
        menu.classList.toggle('header__nav-hamburger_active');
        overlay.classList.toggle('header__nav-hamburger-overlay_active');
    }
}
