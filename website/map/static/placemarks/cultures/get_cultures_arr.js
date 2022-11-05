import * as cultures_json from './coord_dom_culture.json' assert {type: 'json'};

export function get_cultures_arr() {
    let cultures = []
    for (var i = 0; i < cultures_json.default.length; i++) {
        let myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [cultures_json.default[i][1], cultures_json.default[i][0]]
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
            preset: 'islands#greenLeisureIcon',
        })
        cultures[i] = myGeoObject
    }
    return cultures
}