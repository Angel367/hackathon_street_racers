import {add_heat_map} from "./districts/add_heat_map.js";
import {get_polylabel_arr} from "./districts/get_polylabel_arr.js";
import {get_areas_arr} from "./areas/get_areas_arr.js";
import {add_heat_map_postamats1} from "./districts/test.js";

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

    myMap.events.add('boundschange', function (event) {
    if (event.get('newZoom') !== event.get('oldZoom')) {    // Ловим изменение "зума" карты
        //alert('Уровень масштабирования изменился.');

    }
    add_heat_map_postamats1(myMap);

});})




