import {add_heat_map} from "./districts/add_heat_map.js";
import {get_district_arr} from "./districts/get_district_arr.js";
import {get_areas_arr} from "./areas/get_areas_arr.js";

ymaps.ready(['polylabel.create']).then(function () {
    const myMap = new ymaps.Map("map", {
        center: [55.73, 37.75],
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    });

    const district_arr = get_district_arr();
    const areas_arr = get_areas_arr();
    function add_districts(){
        district_arr.forEach(function (item, i, district_arr) {
        myMap.geoObjects.add(item);
    });
    }

    function remove_districts(){
        district_arr.forEach(function (item, i, district_arr) {
        myMap.geoObjects.remove(item);
    });
    }

        function add_areas(){
        areas_arr.forEach(function (item, i, district_arr) {
        myMap.geoObjects.add(item);
    });
    }

    function remove_areas(){
        areas_arr.forEach(function (item, i, district_arr) {
        myMap.geoObjects.remove(item);
    });
    }

    document.getElementById("districts").onchange = function () {
        if(document.getElementById("districts").checked) {
            add_districts();
        }
        else {
            remove_districts();
        }
    }
        document.getElementById("areas").onchange = function () {
        if(document.getElementById("areas").checked) {
            add_areas();
        }
        else {
            remove_areas();
        }
    }

    var myCircle = new ymaps.Circle([
        // Координаты центра круга.
        [55.76, 37.60],
        // Радиус круга в метрах.
        100
    ], {
        // Описываем свойства круга.
        // Содержимое балуна.
        balloonContent: "Радиус круга - 10 км",
        // Содержимое хинта.
        hintContent: "Подвинь меня"
    }, {
        // Задаем опции круга.
        // Включаем возможность перетаскивания круга.
        draggable: false,
        // Цвет заливки.
        // Последний байт (77) определяет прозрачность.
        // Прозрачность заливки также можно задать используя опцию "fillOpacity".
        fillColor: "#DB709377",
        fillImageHref: "https://www.freepnglogos.com/uploads/1-number-png/1-number-classic-font-style-13.png",
        fillMethod: "tile",
        // Цвет обводки.
        strokeColor: "#990066",
        // Прозрачность обводки.
        strokeOpacity: 0.8,
        // Ширина обводки в пикселях.
        strokeWidth: 5
    });

    const objectManager = new ymaps.ObjectManager();

    objectManager.add({
	type: 'Feature',
        id: 1,
        geometry: {
            type: 'Polygon',
            coordinates: [[
    	        [55.8977748, 37.5519785],
[55.897461, 37.5528556],
[55.8952338, 37.5590425],
[55.8940409, 37.5622276],
[55.8936976, 37.563069],
[55.8932732, 37.5640581],
[55.892842, 37.5647478],
[55.8923855, 37.5653705],
[55.8919341, 37.5658968],
[55.8914168, 37.5663586],
[55.8908373, 37.5667552],
[55.8901632, 37.5670561],
[55.8892787, 37.5671989],
[55.8873023, 37.5674047],
[55.8872419, 37.572455],
[55.8871628, 37.5763472],
[55.8872498, 37.57976],
[55.8869631, 37.5855403],
[55.8869508, 37.5866695],
[55.887208, 37.5866771],
[55.8912296, 37.5867992],
[55.893876, 37.5868804],
[55.8967613, 37.5869616],
[55.8996919, 37.5870428],
[55.9033335, 37.5871442],
[55.9070202, 37.5872457],
[55.9076062, 37.587266],
[55.9086245, 37.5875908],
[55.9102401, 37.5887377],
[55.9126129, 37.5905065],
[55.9136241, 37.5909767],
[55.9136561, 37.5907353],
[55.9129617, 37.5902506],
[55.9123897, 37.5898758],
[55.9121479, 37.5895143],
[55.9119308, 37.5887127],
[55.9115972, 37.5882787],
[55.9103686, 37.5873513],
[55.9109577, 37.5838922],
[55.9111875, 37.5810267],
[55.9112918, 37.5803508],
[55.9114343, 37.5786006],
[55.9112732, 37.5741491],
[55.9110169, 37.5705367],
[55.9092832, 37.5559156],
[55.9092419, 37.5555837],
[55.9071173, 37.5368342],
[55.9054753, 37.5376117],
[55.9050619, 37.5378582],
[55.9047557, 37.5380601],
[55.9044282, 37.5383126],
[55.9039985, 37.5386925],
[55.9034996, 37.5392272],
[55.9028844, 37.5399434],
[55.9024308, 37.5405773],
[55.9020266, 37.5411696],
[55.901731, 37.5416646],
[55.9013678, 37.542371],
[55.9011424, 37.5428854],
[55.9006656, 37.5441185],
[55.9006211, 37.5442395],
[55.8977748, 37.5519785],
            ]]
	},
        properties: {
  	    name: 'nameOfMyPolygon',
            fillColor: "#FFFFFF",
            hint: "as",
        },
        options: {
            label: 'asdas',
            hint: 'asdasdas',
            labelDefaults: 'light',
            labelLayout: 'Район Чертаново южное',
        }
    });

     /*let myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [55.76, 37.64]
            },
            // Свойства.
            properties: {
                // Контент метки.
                iconContent: '54623',
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#grayStretchyIcon',
            // Метку НЕЛЬЗЯ перемещать.
            draggable: false
        })*/

    var myCircle = new ymaps.Circle([
        // Координаты центра круга.
        [55.9003034, 37.5639055],
        // Радиус круга в метрах.
        100
    ], {
        // Описываем свойства круга.
        // Содержимое балуна.
        balloonContent: "Радиус круга - 10 км",
        // Содержимое хинта.
    }, {
        // Задаем опции круга.
        // Включаем возможность перетаскивания круга.
        draggable: false,
        // Цвет заливки.
        // Последний байт (77) определяет прозрачность.
        // Прозрачность заливки также можно задать используя опцию "fillOpacity".
        fillColor: "#DB709377",
        // Цвет обводки.
        strokeColor: "#990066",
        // Прозрачность обводки.
        strokeOpacity: 0.8,
        // Ширина обводки в пикселях.
        strokeWidth: 5
    });

        var placemark2 = new ymaps.Placemark([55.9003034, 37.5639055], {
        hintContent: 'Метка 2',
        iconCaption: "123132",
        iconContent: "123121232",

    }, {
        preset: 'islands#darkOrangeStretchyIcon'

    });
                var placemark3 = new ymaps.Placemark([55.9052034, 37.5619055], {
        hintContent: 'Метка 2',
        iconCaption: "",
        iconContent: "132231",

iconLayout: 'islands#invertedGreenClusterIcons',
                    iconContentOffset: [15, 15],
    }, {


    });

    //myMap.geoObjects.add(myCircle);

    myMap.geoObjects.add(objectManager);
//myMap.geoObjects.add(placemark2);
myMap.geoObjects.add(placemark3);

        let myPieChart = new ymaps.Placemark([
            55.9003034, 37.5639055
        ], {
            // Данные для построения диаграммы.
            data: [
                {weight: 263523, color: '#0E4779'},
            ],
            iconCaption: "Район Чертаново южное"
        }, {
            // Зададим произвольный макет метки.
            iconLayout: 'default#pieChart',
            // Радиус диаграммы в пикселях.
            iconPieChartRadius: 35,
            // Радиус центральной части макета.
            iconPieChartCoreRadius: 30,
            // Стиль заливки центральной части.
            iconPieChartCoreFillStyle: '#ffffff',
            // Cтиль линий-разделителей секторов и внешней обводки диаграммы.
            iconPieChartStrokeStyle: '#ffffff',
            // Ширина линий-разделителей секторов и внешней обводки диаграммы.
            iconPieChartStrokeWidth: 0,
            // Максимальная ширина подписи метки.
            iconPieChartCaptionMaxWidth: 2000
        });
    myMap.geoObjects.add(myPieChart);

   // myMap.geoObjects.add(myGeoObject);

    ymaps.modules.require(['polylabel.create']).then(function (Polylabel) {
        const polyLabeler = new Polylabel(myMap, objectManager);

    });
     const polylabel = new ymaps.polylabel.create(myMap, objectManager);
    // Добавляем круг на карту.
   // myMap.geoObjects.add(myCircle);

    myMap.events.add('boundschange', function (event) {
    if (event.get('newZoom') !== event.get('oldZoom')) {    // Ловим изменение "зума" карты
        //alert('Уровень масштабирования изменился.');

    }


});})


    //add_heat_map(myMap);

