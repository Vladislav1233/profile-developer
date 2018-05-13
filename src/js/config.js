require.config({
    baseUrl: 'js',
    paths: {
        jquery: 'jquery/jquery',
        html5shiv: 'bower_components/html5shiv/dist/html5shiv',
        modernizr: 'bower_components/modernizr/modernizr',
        'jquery-validation': 'bower_components/jquery-validation/dist/jquery.validate',
        'utatti-perfect-scrollbar': 'bower_components/utatti-perfect-scrollbar/dist/perfect-scrollbar.common'
    },
    packages: [

    ],
    shim: {

    }
});

//- Модули, подключаемые на всех страницах
require([
    'modernizr'
]);