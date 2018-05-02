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
    };

    document.addEventListener("DOMContentLoaded", documentReady);

})();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwic291cmNlcyI6WyJpbnRlcm5hbC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24oKSB7XG5cbiAgICBmdW5jdGlvbiBkb2N1bWVudFJlYWR5KCkge1xuICAgICAgICBjb25zb2xlLmxvZygnZG9jdW1lbnRSZWFkeScpO1xuXG4gICAgICAgIC8vINGA0LXRgdCw0LnQt1xuICAgICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgdGhyb3R0bGUgPSBmdW5jdGlvbih0eXBlLCBuYW1lLCBvYmopIHtcbiAgICAgICAgICAgICAgICBvYmogPSBvYmogfHwgd2luZG93O1xuICAgICAgICAgICAgICAgIHZhciBydW5uaW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdmFyIGZ1bmMgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJ1bm5pbmcpIHsgcmV0dXJuOyB9XG4gICAgICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgb2JqLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KG5hbWUpKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJ1bm5pbmcgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBvYmouYWRkRXZlbnRMaXN0ZW5lcih0eXBlLCBmdW5jKTtcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIC8qIGluaXQgLSB5b3UgY2FuIGluaXQgYW55IGV2ZW50ICovXG4gICAgICAgICAgICB0aHJvdHRsZShcInJlc2l6ZVwiLCBcIm9wdGltaXplZFJlc2l6ZVwiKTtcbiAgICAgICAgfSkoKTtcblxuICAgICAgICB2YXIgaGFtYnVyZ2VyID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSgnanMtaGFtYnVyZ2VyJylbMF07XG5cbiAgICAgICAgaGFtYnVyZ2VyLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAvLyBodHRwczovL2RldmVsb3Blci5tb3ppbGxhLm9yZy9ydS9kb2NzL1dlYi9BUEkvRWxlbWVudC9jbGFzc0xpc3RcbiAgICAgICAgICAgIC8vIHRvZ2dsZSAoIFN0cmluZyBbLCBCb29sZWFuXSlcbiAgICAgICAgICAgIC8vINCV0YHQu9C4INC60LvQsNGB0YEg0YMg0Y3Qu9C10LzQtdC90YLQsCDQvtGC0YHRg9GC0YHRgtCy0YPQtdGCIC0g0LTQvtCx0LDQstC70Y/QtdGCLCDQuNC90LDRh9C1IC0g0YPQsdC40YDQsNC10YIuINCa0L7Qs9C00LAg0LLRgtC+0YDRi9C8INC/0LDRgNCw0LzQtdGC0YDQvtC8INC/0LXRgNC10LTQsNC90L4gZmFsc2UgLSDRg9C00LDQu9GP0LXRgiDRg9C60LDQt9Cw0L3QvdGL0Lkg0LrQu9Cw0YHRgSwg0LAg0LXRgdC70LggdHJ1ZSAtINC00L7QsdCw0LLQu9GP0LXRgi5cbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnRvZ2dsZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKCdqcy1vcGVuLW1lbnUnKVswXS5jbGFzc0xpc3QudG9nZ2xlKCdhY3RpdmUnKTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8g0LLRi9C30L7QsiDRgNC10YHQsNC50LfQsFxuICAgICAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9wdGltaXplZFJlc2l6ZVwiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2pzLWhhbWJ1cmdlcicpWzBdLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoJ2pzLW9wZW4tbWVudScpWzBdLmNsYXNzTGlzdC50b2dnbGUoJ2FjdGl2ZScsIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgfTtcblxuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGRvY3VtZW50UmVhZHkpO1xuXG59KSgpOyJdLCJmaWxlIjoiaW50ZXJuYWwuanMiLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
