import * as libraries_json from './coord_biblioteki.json' assert {type: 'json'};

export function get_libraries_arr(myMap) {
    let t = libraries_json
    let libraries = []
    for (var i = 0; i < t.default.length; i++) {
        let myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [t.default[i][1], t.default[i][0]]
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
            preset: 'islands#blueBookIcon',
        })
        libraries[i] = myGeoObject
    }

    return libraries
}
get_libraries_arr()