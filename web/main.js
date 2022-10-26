

import {add_heat_map} from "./districts/add_heat_map.js";
import {get_district_arr} from "./districts/get_district_arr.js";
import {get_areas_arr} from "./areas/get_areas_arr.js";

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
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


    //add_heat_map(myMap);
}
