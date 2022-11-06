import {get_cultures_arr} from "./cultures/get_cultures_arr.js";
import {get_gosuslugies_arr} from "./gosuslugies/get_gosuslugies_arr.js";
import {get_libraries_arr} from "./libraries/get_libraries_arr.js";
import {get_prints_arr} from "./prints/get_prints_arr.js";
import {get_shops_arr} from "./shops/get_shops_arr.js";
import {get_sports_arr} from "./sports/get_sports_arr.js";

export function placemarks_handler(myMap) {
    const cultures_arr = get_cultures_arr();
    const gosuslugies_arr = get_gosuslugies_arr();
    const libraries_arr = get_libraries_arr();
    const prints_arr = get_prints_arr();
    const shops_arr = get_shops_arr();
    const sports_arr = get_sports_arr()

    document.getElementById("cultures_placemarks").onchange = function () {
        if(document.getElementById("cultures_placemarks").checked) {
            cultures_arr.forEach(function (item) {
                myMap.geoObjects.add(item);
            });
        }
        else {
            cultures_arr.forEach(function (item) {
                myMap.geoObjects.remove(item);
            });
        }
    }
    document.getElementById("gosuslugies_placemarks").onchange = function () {
        if(document.getElementById("gosuslugies_placemarks").checked) {
            gosuslugies_arr.forEach(function (item) {
                myMap.geoObjects.add(item);
            });
        }
        else {
            gosuslugies_arr.forEach(function (item) {
                myMap.geoObjects.remove(item);
            });
        }
    }
    document.getElementById("libraries_placemarks").onchange = function () {
        if(document.getElementById("libraries_placemarks").checked) {
            libraries_arr.forEach(function (item) {
                myMap.geoObjects.add(item);
            });
        }
        else {
            libraries_arr.forEach(function (item) {
                myMap.geoObjects.remove(item);
            });
        }
    }
    document.getElementById("prints_placemarks").onchange = function () {
        if(document.getElementById("prints_placemarks").checked) {
            prints_arr.forEach(function (item) {
                myMap.geoObjects.add(item);
            });
        }
        else {
            prints_arr.forEach(function (item) {
                myMap.geoObjects.remove(item);
            });
        }
    }
    document.getElementById("shops_placemarks").onchange = function () {
        if(document.getElementById("shops_placemarks").checked) {
            shops_arr.forEach(function (item) {
                myMap.geoObjects.add(item);
            });
        }
        else {
            shops_arr.forEach(function (item) {
                myMap.geoObjects.remove(item);
            });
        }
    }
    document.getElementById("sports_placemarks").onchange = function () {
        if(document.getElementById("sports_placemarks").checked) {
            sports_arr.forEach(function (item) {
                myMap.geoObjects.add(item);
            });
        }
        else {
            sports_arr.forEach(function (item) {
                myMap.geoObjects.remove(item);
            });
        }
    }
}