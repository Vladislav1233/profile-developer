(function() {

    function documentReady() {
        console.log('documentReady');

        // ресайз
        (function() {
            var throttle = function(type, name, obj) {
                obj = obj || window;
                var running = false;
                var func = function() {
                    if (running) { return; }
                    running = true;
                     requestAnimationFrame(function() {
                        obj.dispatchEvent(new CustomEvent(name));
                        running = false;
                    });
                };
                obj.addEventListener(type, func);
            };

            /* init - you can init any event */
            throttle("resize", "optimizedResize");
        })();

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
    };

    document.addEventListener("DOMContentLoaded", documentReady);

})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbnRlcm5hbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG5cbiAgICBmdW5jdGlvbiBkb2N1bWVudFJlYWR5KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZG9jdW1lbnRSZWFkeScpO1xuXG4gICAgICAgIC8vINGA0LXRgdCw0LnQt1xuICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3R0bGUgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBvYmopIHtcbiAgICAgICAgICAgICAgICBvYmogPSBvYmogfHwgd2luZG93O1xuICAgICAgICAgICAgICAgIHZhciBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFyIGZ1bmMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KG5hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvYmouYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmdW5jKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qIGluaXQgLSB5b3UgY2FuIGluaXQgYW55IGV2ZW50ICovXG4gICAgICAgICAgICB0aHJvdHRsZShcInJlc2l6ZVwiLCBcIm9wdGltaXplZFJlc2l6ZVwiKTtcbiAgICAgICAgfSkoKTtcblxuICAgICAgICB2YXIgaGFtYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnanMtaGFtYnVyZ2VyJylbMF07XG5cbiAgICAgICAgaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9ydS9kb2NzL1dlYi9BUEkvRWxlbWVudC9jbGFzc0xpc3RcbiAgICAgICAgICAgIC8vIHRvZ2dsZSAoIFN0cmluZyBbLCBCb29sZWFuXSlcbiAgICAgICAgICAgIC8vINCV0YHQu9C4INC60LvQsNGB0YEg0YMg0Y3Qu9C10LzQtdC90YLQsCDQvtGC0YHRg9GC0YHRgtCy0YPQtdGCIC0g0LTQvtCx0LDQstC70Y/QtdGCLCDQuNC90LDRh9C1IC0g0YPQsdC40YDQsNC10YIuINCa0L7Qs9C00LAg0LLRgtC+0YDRi9C8INC/0LDRgNCw0LzQtdGC0YDQvtC8INC/0LXRgNC10LTQsNC90L4gZmFsc2UgLSDRg9C00LDQu9GP0LXRgiDRg9C60LDQt9Cw0L3QvdGL0Lkg0LrQu9Cw0YHRgSwg0LAg0LXRgdC70LggdHJ1ZSAtINC00L7QsdCw0LLQu9GP0LXRgi5cbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdqcy1vcGVuLW1lbnUnKVswXS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0LLRi9C30L7QsiDRgNC10YHQsNC50LfQsFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9wdGltaXplZFJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2pzLWhhbWJ1cmdlcicpWzBdLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2pzLW9wZW4tbWVudScpWzBdLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHBlcmZlY3RTY3JvbGxQbHVnaW4gPSBmdW5jdGlvbihjbGFzc0ZvckluaXQpIHtcbiAgICAgICAgICAgIHZhciBzY3JvbGxFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChjbGFzc0ZvckluaXQpWzBdLFxuICAgICAgICAgICAgICAgIHNjcm9sbEVsZW1lbnRPdXRlciA9IHNjcm9sbEVsZW1lbnQuc2Nyb2xsSGVpZ2h0LFxuICAgICAgICAgICAgICAgIHNjcm9sbEVsZW1lbnRJbm5lciA9IHNjcm9sbEVsZW1lbnQub2Zmc2V0SGVpZ2h0LFxuICAgICAgICAgICAgICAgIHBhZ2VTY3JvbGw7XG5cbiAgICAgICAgICAgIC8vINCY0L3QuNGG0LjQsNC70LjQt9C40YDRg9C10Lwg0LjQu9C4INGD0LHQuNCy0LDQtdC8INGB0LrRgNC+0LvQu1xuICAgICAgICAgICAgZnVuY3Rpb24gaW5pdGlhbFBlcmZlY3RTY3JvbGwoKSB7XG4gICAgICAgICAgICAgICAgc2Nyb2xsRWxlbWVudE91dGVyID0gc2Nyb2xsRWxlbWVudC5zY3JvbGxIZWlnaHQsXG4gICAgICAgICAgICAgICAgc2Nyb2xsRWxlbWVudElubmVyID0gc2Nyb2xsRWxlbWVudC5vZmZzZXRIZWlnaHQ7XG5cbiAgICAgICAgICAgICAgICAvLyDQldGB0LvQuCDQutC+0L3RgtC10L3RgiDRgdC+0LTQtdGA0LbQuNC80L7Qs9C+INGB0YLRgNCw0L3QuNGG0Ysg0LLRi9GF0L7QtNC40YIg0LfQsCDQv9GA0LXQtNC10LvRiyDQsdC70L7QutCwLCDRgtC+INC40L3QuNGG0LjQsNC70LjQt9C40YDRg9C10Lwg0YHQutGA0L7Qu9C7XG4gICAgICAgICAgICAgICAgaWYgKCBzY3JvbGxFbGVtZW50T3V0ZXIgPiBzY3JvbGxFbGVtZW50SW5uZXIgJiYgXG4gICAgICAgICAgICAgICAgICAgIHNjcm9sbEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHNcIikgPT0gZmFsc2UgKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYWdlU2Nyb2xsID0gbmV3IFBlcmZlY3RTY3JvbGxiYXIoY2xhc3NGb3JJbml0LCB7XG4gICAgICAgICAgICAgICAgICAgICAgICB3aGVlbFNwZWVkOiAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgd2hlZWxQcm9wYWdhdGlvbjogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdXBwcmVzc1Njcm9sbFg6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgIFxuICAgICAgICAgICAgICAgIC8vINCV0YHQu9C4INC60L7QvdGC0LXQvdGCINGB0L7QtNC10YDQttC40LzQvtCz0L4g0YHRgtGA0LDQvdC40YbRiyDQvdC1INCy0YvRhdC+0LTQuNGCINC30LAg0L/RgNC10LTQtdC70Ysg0LHQu9C+0LrQsCwg0YLQviDRgdC60YDQvtC70Lsg0YPQsdC40YDQsNC10LxcbiAgICAgICAgICAgICAgICAvLyDRjdGC0L4g0L3Rg9C20L3QviDQv9GA0Lgg0YDQtdGB0LDQudC30LUsINC30LTQtdGB0Ywg0L7Qv9GA0LXQtNC10LvRj9C10LwsINGH0YLQviDRgdC60YDQvtC70Lsg0LHRi9C7INGD0LbQtSDQuNC90LjRhtC40LDQu9C40LfQuNGA0L7QstCw0L0uXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzY3JvbGxFbGVtZW50T3V0ZXIgPD0gc2Nyb2xsRWxlbWVudElubmVyICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2Nyb2xsRWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoXCJwc1wiKSApIHtcblxuICAgICAgICAgICAgICAgICAgICBwYWdlU2Nyb2xsLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNjcm9sbCA9IG51bGw7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpbml0aWFsUGVyZmVjdFNjcm9sbCgpO1xuXG4gICAgICAgICAgICAvLyDQstGL0LfQvtCyINGA0LXRgdCw0LnQt9CwXG4gICAgICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9wdGltaXplZFJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICBpbml0aWFsUGVyZmVjdFNjcm9sbCgpO1xuXG4gICAgICAgICAgICAgICAgLy8g0J7QsdC90L7QstC+0LvRj9C10Lwg0LLRi9GB0L7RgtGDINC4INC+0LHQu9Cw0YHRgtGMINC/0YDQvtC60YDRg9GC0LrQuCDQv9GA0Lgg0YDQtdGB0LDQudC30LUuXG4gICAgICAgICAgICAgICAgaWYgKHNjcm9sbEVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKFwicHNcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgcGFnZVNjcm9sbC51cGRhdGUoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH07XG5cblxuICAgICAgICBpZiAoTW9kZXJuaXpyLnRvdWNoZXZlbnRzID09IGZhbHNlKSB7XG4gICAgICAgICAgICBwZXJmZWN0U2Nyb2xsUGx1Z2luKCcuanMtaGVhZGVyLXNjcm9sbCcpO1xuICAgICAgICAgICAgcGVyZmVjdFNjcm9sbFBsdWdpbignLmpzLXBhZ2Utc2Nyb2xsJyk7XG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGRvY3VtZW50UmVhZHkpO1xuXG59KSgpOyJdLCJmaWxlIjoiaW50ZXJuYWwuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
