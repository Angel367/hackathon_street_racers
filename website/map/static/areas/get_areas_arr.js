import * as areas_json from './areas_arr.json' assert {type: 'json'};

export function get_areas_arr(){
    let areasArr = []
    for (var i = 0; i < areas_json.default.length; i++) {
        var myPolygon = new ymaps.Polygon(
            [
                areas_json.default[i].coord,],
            {
                hintContent: areas_json.default[i].name,
            }, {
                // Задаем опции геообъекта.
                // Цвет заливки.
                fillColor: '#905A7140',

                // Ширина обводки.
                strokeColor: '#AA000050',
                strokeWidth: 1.5
            });
        areasArr[i] = myPolygon
    }
    return areasArr;
}