import * as libraries_json from './coord_biblioteki.json' assert {type: 'json'};

export function get_libraries_arr() {
    let libraries = []
    for (var i = 0; i < libraries_json.default.length; i++) {
        let myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [libraries_json.default[i][1], libraries_json.default[i][0]]
            },
            // Свойства.
            properties: {
                // Контент метки.
                //iconContent: 'Я тащусь',
                //hintContent: 'Ну давай уже тащи'
            }
        }, {
            // Опции.
            // Иконка метки будет растягиваться под размер ее содержимого.
            preset: 'islands#brownBookIcon',
        })
        libraries[i] = myGeoObject
    }

    return libraries
}