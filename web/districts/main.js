import {getPolygon1} from "./polygon1.js";

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
        center: [55.73, 37.75],
        zoom: 10
    }, {
        searchControlProvider: 'yandex#search'
    });
    myMap.geoObjects.add(getPolygon1());

}
