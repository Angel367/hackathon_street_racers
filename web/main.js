import {add_heat_map} from "./districts/add_heat_map.js";
import {get_district_arr} from "./districts/get_district_arr.js";
import {get_areas_arr} from "./areas/get_areas_arr.js";
import {get_polygon0} from "./districts/polygons/polygon00.js";

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
const objectManager = new ymaps.ObjectManager();
    let polylabel0 = get_polygon0()
    objectManager.add(polylabel0);
    myMap.geoObjects.add(objectManager);
    const polylabel = new ymaps.polylabel.create(myMap, objectManager);




    myMap.events.add('boundschange', function (event) {
    if (event.get('newZoom') !== event.get('oldZoom')) {    // Ловим изменение "зума" карты
        //alert('Уровень масштабирования изменился.');

    }


});})


    //add_heat_map(myMap);

