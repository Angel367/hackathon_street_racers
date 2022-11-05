import * as prints_json from './pechat_produkcii.json' assert {type: 'json'};

export function get_prints_arr() {
    let prints = []
    for (var i = 0; i < prints_json.default.length; i++) {
        let myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [prints_json.default[i][1], prints_json.default[i][0]]
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
            preset: 'islands#yellowPostIcon',
        })
        prints[i] = myGeoObject
    }
    return prints
}