import {add_heat_map} from "./heatmaps/add_heat_map.js";
import {get_polylabel_arr} from "./districts/get_polylabel_arr.js";
import {get_areas_arr} from "./areas/get_areas_arr.js";
import {get_postamats_data} from "./heatmaps/postamats/get_postamats_data.js";
import {get_houses_data} from "./heatmaps/houses/get_houses_data.js";

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
    polylabel_arr.forEach(function (item, i, district_arr) {
            objectManager.add(item);
    })
    const areas_arr = get_areas_arr();
    const postamats_data = get_postamats_data()
    const houses_data = get_houses_data()


    function add_areas() {
        areas_arr.forEach(function (item, i, district_arr) {
        myMap.geoObjects.add(item);
    });
    }

    function remove_areas() {
        areas_arr.forEach(function (item, i, district_arr) {
        myMap.geoObjects.remove(item);
    });
    }

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
    }
    document.getElementById("areas").onchange = function () {
        if(document.getElementById("areas").checked) {
            add_areas();
        }
        else {
            remove_areas();
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
    });
    ymaps.modules.require(['Heatmap'], function (Heatmap) {     // Тепловая карта
        var data = houses_data,
            heatmap = new Heatmap(data, {
                /*
                // Радиус влияния.
                radius: 15,
                // Нужно ли уменьшать пиксельный размер точек при уменьшении зума. False - не нужно.
                dissipating: false,
                // Прозрачность тепловой карты.
                opacity: 0.8,
                // Прозрачность у медианной по весу точки.
                intensityOfMidpoint: 0.2,
                // JSON описание градиента.
                gradient: {
                    0.1: 'rgba(128, 255, 0, 0.7)',
                    0.2: 'rgba(255, 255, 0, 0.8)',
                    0.7: 'rgba(234, 72, 58, 0.9)',
                    1.0: 'rgba(162, 36, 25, 1)'
                }
                */
            });
        document.getElementById("heat_map_houses").onchange = function () {
            if(document.getElementById("heat_map_houses").checked) {
                heatmap.setMap(myMap)
            }
            else {
                heatmap.destroy()
            }
        }
    });




    myMap.events.add('boundschange', function (event) {
    if (event.get('newZoom') !== event.get('oldZoom')) {    // Ловим изменение "зума" карты
        //alert('Уровень масштабирования изменился.');

    }
    get_postamats_data(myMap);

});})




