var hamburger = document.getElementsByClassName('js-hamburger')[0];

hamburger.addEventListener('click', function() {
    // https://developer.mozilla.org/ru/docs/Web/API/Element/classList
    // toggle ( String [, Boolean])
    // Если класс у элемента отсутствует - добавляет, иначе - убирает. Когда вторым параметром передано false - удаляет указанный класс, а если true - добавляет.
    this.classList.toggle('active');
    document.getElementsByClassName('js-open-menu')[0].classList.toggle('active');
});

// вызов ресайза
window.addEventListener("optimizedResize", function() {
    document.getElementsByClassName('js-hamburger')[0].classList.toggle('active', false);
    document.getElementsByClassName('js-open-menu')[0].classList.toggle('active', false);
});