import {add_heat_map} from "./heatmaps/add_heat_map.js";
import {get_polylabel_arr} from "./districts/get_polylabel_arr.js";
import {get_areas_arr} from "./areas/get_areas_arr.js";
import {get_postamats_data} from "./heatmaps/postamats/get_postamats_data.js";
import {get_houses_data} from "./heatmaps/houses/get_houses_data.js";
import {get_libraries_arr} from "./placemarks/libraries/get_libraries_arr.js";
import {get_cultures_arr} from "./placemarks/cultures/get_cultures_arr.js";
import {get_gosuslugies_arr} from "./placemarks/gosuslugies/get_gosuslugies_arr.js";
import {get_prints_arr} from "./placemarks/prints/get_prints_arr.js";
import {get_sports_arr} from "./placemarks/sports/get_sports_arr.js";
import {get_shops_arr} from "./placemarks/shops/get_shops_arr.js";
import {placemarks_handler} from "./placemarks/placemarks_handler.js";

ymaps.ready(['polylabel.create']).then(function () {
    const myMap = new ymaps.Map("map", {
        center: [55.73, 37.75],
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    });
    const objectManager = new ymaps.ObjectManager();
    let polylabel;
    const polylabel_arr = get_polylabel_arr();
    polylabel_arr.forEach(function (item, i, district_arr) { objectManager.add(item); })
    const areas_arr = get_areas_arr();
    const postamats_data = get_postamats_data();
    const houses_data = get_houses_data();

    let myCircle = new ymaps.Circle([
        // Координаты центра круга.
        [55.76, 37.60],
        // Радиус круга в метрах.
        -1
    ], {
        // Описываем свойства круга.
        // Содержимое балуна.
        //balloonContent: "Радиус круга - 10 км",
        // Содержимое хинта.
        //hintContent: "Подвинь меня"
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

    document.getElementById("districts").onchange = function () {
        if(document.getElementById("districts").checked) {
            myMap.geoObjects.add(objectManager);
            //polylabel = new ymaps.polylabel.create(myMap, objectManager);
        }
        else {
            //polylabel.destroy()
            myMap.geoObjects.remove(objectManager);
        }
    }
    document.getElementById("population").onchange = function () {
        if(document.getElementById("population").checked) {
            polylabel = new ymaps.polylabel.create(myMap, objectManager);
        }
        else {
            polylabel.destroy()
        }
    }/*
    document.getElementById("poly").onchange = function () {
        if(document.getElementById("poly").checked) {
            objectManager.objects.options.set('fillColor', 'rgba(64,122,206,0.1)');
            }
        else {
            objectManager.objects.options.set('fillColor', 'rgba(64,122,206,0.45)');
        }
    }*/
    document.getElementById("areas").onchange = function () {
        if(document.getElementById("areas").checked) {
            areas_arr.forEach(function (item, i, district_arr) {
                myMap.geoObjects.add(item);
            });
        }
        else {
            areas_arr.forEach(function (item, i, district_arr) {
                myMap.geoObjects.remove(item);
            });
        }
    }
    document.getElementById("selection").onchange = function () {
    var e = document.getElementById("selection");
    var value = e.options[e.selectedIndex].value;
    if(document.getElementById("poly").checked) {
        myMap.geoObjects.remove(objectManager)
            for(var i = 0; i < objectManager.objects.getAll().length; i++){
                console.log(objectManager.objects.getAll()[i].options.fillColor = 'rgba(64,122,206,0.45)')
            }
        myMap.geoObjects.add(objectManager)
        myMap.geoObjects.remove(objectManager)
        for(var i = 0; i < objectManager.objects.getAll().length; i++){
        if(i!=value){
        console.log(objectManager.objects.getAll()[i].options.fillColor = 'rgba(64,122,206,0.1)')
        }
        }
        myMap.geoObjects.add(objectManager)
        }
    else {
            myMap.geoObjects.remove(objectManager)
             for(var i = 0; i < objectManager.objects.getAll().length; i++){

            console.log(objectManager.objects.getAll()[i].options.fillColor = 'rgba(64,122,206,0.45)')

            }
            myMap.geoObjects.add(objectManager)

        }
    }
    document.getElementById("poly").onchange = function () {
    myMap.geoObjects.remove(objectManager)
            for(var i = 0; i < objectManager.objects.getAll().length; i++){
                console.log(objectManager.objects.getAll()[i].options.fillColor = 'rgba(64,122,206,0.45)')
            }
        myMap.geoObjects.add(objectManager)
    if(!document.getElementById("poly").checked && document.getElementById("districts").checked) {
    myMap.geoObjects.remove(objectManager)
             for(var i = 0; i < objectManager.objects.getAll().length; i++){

            console.log(objectManager.objects.getAll()[i].options.fillColor = 'rgba(64,122,206,0.45)')

            }
            myMap.geoObjects.add(objectManager)
        }
        else if (!document.getElementById("poly").checked){
        myMap.geoObjects.remove(objectManager);
        }
        }

    ymaps.modules.require(['Heatmap'], function (Heatmap) {     // Тепловая карта
        var data = postamats_data,
        heatmap = new Heatmap(data);
        document.getElementById("heat_map_postamats").onchange = function () {
            if(document.getElementById("heat_map_postamats").checked) {
                heatmap.setMap(myMap)
            }
            else {
                heatmap.destroy()
            }
        }
        myMap.events.add('boundschange', function (event) {
            if (event.get('newZoom') !== event.get('oldZoom')) {    // Ловим изменение "зума" карты
                heatmap.options.set('radius', Math.pow(2,(event.get('newZoom')/1.5-3)));
            }
        });
    });
    ymaps.modules.require(['Heatmap'], function (Heatmap) {     // Тепловая карта
        var data = houses_data,
            heatmap = new Heatmap(data, {
                radius: 10,
            });
        document.getElementById("heat_map_houses").onchange = function () {
            if(document.getElementById("heat_map_houses").checked) {
                heatmap.setMap(myMap)
            }
            else {
                heatmap.destroy()
            }
        }
        myMap.events.add('boundschange', function (event) {
            if (event.get('newZoom') !== event.get('oldZoom')) {    // Ловим изменение "зума" карты
                heatmap.options.set('radius', Math.pow(2.1,(event.get('newZoom')/1.7-3)));
            }
        });
    });

    function reDrawCircle(event) {
        if(myCircle.geometry.getRadius() === -1 && !event) return
        myMap.geoObjects.add(myCircle);
        if (event) {
            myCircle.geometry.setCoordinates(event.get('coords'))
        }
        let newRadius = document.getElementById("radiusSlider").value
        if (parseInt(newRadius) === 0) {
            myMap.geoObjects.remove(myCircle);
            return;
        }
        myCircle.geometry.setRadius(newRadius);
    }

    document.getElementById("radiusSlider").onchange = function () {
        document.getElementById('rangeValue').innerHTML = this.value;
        reDrawCircle()
    }

    myMap.events.add('click',
        function (event) {
            reDrawCircle(event)
        }
    );
    placemarks_handler(myMap)
})




