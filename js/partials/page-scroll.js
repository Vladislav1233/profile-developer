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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJwYXJ0aWFscy9wYWdlLXNjcm9sbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBwZXJmZWN0U2Nyb2xsUGx1Z2luID0gZnVuY3Rpb24oY2xhc3NGb3JJbml0KSB7XG4gICAgdmFyIHNjcm9sbEVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGNsYXNzRm9ySW5pdClbMF0sXG4gICAgICAgIHNjcm9sbEVsZW1lbnRPdXRlciA9IHNjcm9sbEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICBzY3JvbGxFbGVtZW50SW5uZXIgPSBzY3JvbGxFbGVtZW50Lm9mZnNldEhlaWdodCxcbiAgICAgICAgcGFnZVNjcm9sbDtcblxuICAgIC8vINCY0L3QuNGG0LjQsNC70LjQt9C40YDRg9C10Lwg0LjQu9C4INGD0LHQuNCy0LDQtdC8INGB0LrRgNC+0LvQu1xuICAgIGZ1bmN0aW9uIGluaXRpYWxQZXJmZWN0U2Nyb2xsKCkge1xuICAgICAgICBzY3JvbGxFbGVtZW50T3V0ZXIgPSBzY3JvbGxFbGVtZW50LnNjcm9sbEhlaWdodCxcbiAgICAgICAgc2Nyb2xsRWxlbWVudElubmVyID0gc2Nyb2xsRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgLy8g0JXRgdC70Lgg0LrQvtC90YLQtdC90YIg0YHQvtC00LXRgNC20LjQvNC+0LPQviDRgdGC0YDQsNC90LjRhtGLINCy0YvRhdC+0LTQuNGCINC30LAg0L/RgNC10LTQtdC70Ysg0LHQu9C+0LrQsCwg0YLQviDQuNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdC8INGB0LrRgNC+0LvQu1xuICAgICAgICBpZiAoIHNjcm9sbEVsZW1lbnRPdXRlciA+IHNjcm9sbEVsZW1lbnRJbm5lciAmJiBcbiAgICAgICAgICAgIHNjcm9sbEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHNcIikgPT0gZmFsc2UgKSB7XG4gICAgICAgICAgICAgICAgcGFnZVNjcm9sbCA9IG5ldyBQZXJmZWN0U2Nyb2xsYmFyKGNsYXNzRm9ySW5pdCwge1xuICAgICAgICAgICAgICAgIHdoZWVsU3BlZWQ6IDEsXG4gICAgICAgICAgICAgICAgd2hlZWxQcm9wYWdhdGlvbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgc3VwcHJlc3NTY3JvbGxYOiB0cnVlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIC8vINCV0YHQu9C4INC60L7QvdGC0LXQvdGCINGB0L7QtNC10YDQttC40LzQvtCz0L4g0YHRgtGA0LDQvdC40YbRiyDQvdC1INCy0YvRhdC+0LTQuNGCINC30LAg0L/RgNC10LTQtdC70Ysg0LHQu9C+0LrQsCwg0YLQviDRgdC60YDQvtC70Lsg0YPQsdC40YDQsNC10LxcbiAgICAgICAgLy8g0Y3RgtC+INC90YPQttC90L4g0L/RgNC4INGA0LXRgdCw0LnQt9C1LCDQt9C00LXRgdGMINC+0L/RgNC10LTQtdC70Y/QtdC8LCDRh9GC0L4g0YHQutGA0L7Qu9C7INCx0YvQuyDRg9C20LUg0LjQvdC40YbQuNCw0LvQuNC30LjRgNC+0LLQsNC9LlxuICAgICAgICB9IGVsc2UgaWYgKHNjcm9sbEVsZW1lbnRPdXRlciA8PSBzY3JvbGxFbGVtZW50SW5uZXIgJiZcbiAgICAgICAgICAgICAgICAgICAgc2Nyb2xsRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJwc1wiKSApIHtcblxuICAgICAgICAgICAgcGFnZVNjcm9sbC5kZXN0cm95KCk7XG4gICAgICAgICAgICBwYWdlU2Nyb2xsID0gbnVsbDtcbiAgICAgICAgfTtcbiAgICB9O1xuICAgIGluaXRpYWxQZXJmZWN0U2Nyb2xsKCk7XG5cbiAgICAvLyDQstGL0LfQvtCyINGA0LXRgdCw0LnQt9CwXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJvcHRpbWl6ZWRSZXNpemVcIiwgZnVuY3Rpb24oKSB7XG4gICAgICAgIGluaXRpYWxQZXJmZWN0U2Nyb2xsKCk7XG5cbiAgICAgICAgLy8g0J7QsdC90L7QstC+0LvRj9C10Lwg0LLRi9GB0L7RgtGDINC4INC+0LHQu9Cw0YHRgtGMINC/0YDQvtC60YDRg9GC0LrQuCDQv9GA0Lgg0YDQtdGB0LDQudC30LUuXG4gICAgICAgIGlmIChzY3JvbGxFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucyhcInBzXCIpKSB7XG4gICAgICAgICAgICBwYWdlU2Nyb2xsLnVwZGF0ZSgpO1xuICAgICAgICB9O1xuICAgIH0pO1xufTtcblxuXG5pZiAoTW9kZXJuaXpyLnRvdWNoZXZlbnRzID09IGZhbHNlKSB7XG4gICAgcGVyZmVjdFNjcm9sbFBsdWdpbignLmpzLWhlYWRlci1zY3JvbGwnKTtcbiAgICBwZXJmZWN0U2Nyb2xsUGx1Z2luKCcuanMtcGFnZS1zY3JvbGwnKTtcbn07Il0sImZpbGUiOiJwYXJ0aWFscy9wYWdlLXNjcm9sbC5qcyIsInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
