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

        @@include('partials/open-menu.js')
        @@include('partials/page-scroll.js')
    };

    document.addEventListener("DOMContentLoaded", documentReady);

})();