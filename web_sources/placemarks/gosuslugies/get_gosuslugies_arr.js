import * as gosuslugies_json from './coord_gos_uslugi.json' assert {type: 'json'};

export function get_gosuslugies_arr() {
    let gosuslugies = []
    for (var i = 0; i < gosuslugies_json.default.length; i++) {
        let myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [gosuslugies_json.default[i][1], gosuslugies_json.default[i][0]]
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
            preset: 'islands#blueInfoIcon',
        })
        gosuslugies[i] = myGeoObject
    }
    return gosuslugies
}