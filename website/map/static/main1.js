ymaps.ready(['polylabel.create']).then(function () {
    // Создадим два макета подписей полигонов: с текстом и с картинкой.
var textLayouts = {
    label: '<div style="background: rgba(255, 255, 255, 0.3);'+
        'border-radius: 50%;'+
        'border: 6px solid rgb(160,233,255);'+
        'box-shadow: 0 0 5px rgb(160,233,255);'+
        'color: #FFF;'+
        'display: inline-block;'+
        'font-weight: bold;'+
        'line-height: 55px;'+
        'margin-right: 0;'+
        'text-align: center;'+
        'font-family: Arial;'+
        'width: 55px;height: 55px"<p>112212</p></div>' +
        '<div style="color: white;'+
        'font-family: Arial;'+
        'font-size: 12px;'+
        'font-weight: bold;'+
        'text-align: center;'+
        'text-shadow: 0 0 5px rgba(42,58,89,0.5);"'+
        ' <p>'+'Чертановский автономный округ</p></div>'
};

    var map = new ymaps.Map('map', {
                center: [58, 40],
                zoom: 5,
                controls: []
            }, {
                maxZoom: 18,
                minZoom: 2
        });

    // Создадим переключатель вида подписей.


    // Создадим менеджер объектов.
    var objectManager = new ymaps.ObjectManager();
    // Загрузим регионы.


    // Функция, которая обновляет у всех полигонов макет.
    function updateLabels(type) {
        var layouts = type === 'text' ? textLayouts : imgLayouts;
        // Меняем всплывающую подсказку в зависимости от макета.
        objectManager.objects.options.set({
            hintContentLayout: layouts.hint
        });
        objectManager.objects.each(function (polygon) {
            objectManager.objects.setObjectOptions(polygon.id, {labelLayout: layouts.label});
        });
    }
});