import * as shops_json from './coord_torg_objects.json' assert {type: 'json'};

export function get_shops_arr() {
    let shops = []
    for (var i = 0; i < shops_json.default.length; i++) {
        let myGeoObject = new ymaps.GeoObject({
            // Описание геометрии.
            geometry: {
                type: "Point",
                coordinates: [shops_json.default[i][1], shops_json.default[i][0]]
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
            preset: 'islands#redShoppingIcon',
        })
        shops[i] = myGeoObject
    }
    return shops
}