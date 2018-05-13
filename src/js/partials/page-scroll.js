const perfectScrollPlugin = function(classForInit) {
    var scrollElement = document.querySelectorAll(classForInit)[0],
        scrollElementOuter = scrollElement.scrollHeight,
        scrollElementInner = scrollElement.offsetHeight,
        pageScroll;

    // Инициализируем или убиваем скролл
    function initialPerfectScroll() {
        scrollElementOuter = scrollElement.scrollHeight,
        scrollElementInner = scrollElement.offsetHeight;

        // Если контент содержимого страницы выходит за пределы блока, то инициализируем скролл
        if ( scrollElementOuter > scrollElementInner && 
            scrollElement.classList.contains("ps") == false ) {
                pageScroll = new PerfectScrollbar(classForInit, {
                wheelSpeed: 1,
                wheelPropagation: false,
                suppressScrollX: true
            });
        
        // Если контент содержимого страницы не выходит за пределы блока, то скролл убираем
        // это нужно при ресайзе, здесь определяем, что скролл был уже инициализирован.
        } else if (scrollElementOuter <= scrollElementInner &&
                    scrollElement.classList.contains("ps") ) {

            pageScroll.destroy();
            pageScroll = null;
        };
    };
    initialPerfectScroll();

    // вызов ресайза
    window.addEventListener("optimizedResize", function() {
        initialPerfectScroll();

        // Обноволяем высоту и область прокрутки при ресайзе.
        if (scrollElement.classList.contains("ps")) {
            pageScroll.update();
        };
    });
};


if (Modernizr.touchevents == false) {
    perfectScrollPlugin('.js-header-scroll');
    perfectScrollPlugin('.js-page-scroll');
};