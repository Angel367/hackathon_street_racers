import * as sports_json from './coord_sport_objects.json' assert {type: 'json'};

export function get_sports_arr() {
    let sports = []
    for (var i = 0; i < sports_json.default.length; i++) {
        let myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [sports_json.default[i][1], sports_json.default[i][0]]
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
            preset: 'islands#orangeSportIcon',
        })
        sports[i] = myGeoObject
    }
    return sports
}