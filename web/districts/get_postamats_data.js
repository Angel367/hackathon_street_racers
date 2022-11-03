import * as postamats_yandex_coords from './postamats_yandex_coords_final.json' assert {type: 'json'};

export function get_postamats_data(myMap) {
    let t = postamats_yandex_coords
    let data = []
    for (var i = 0; i < t.default.length; i++) {
        data[i] = [t.default[i].coordinates[1], t.default[i].coordinates[0]]
    }
    return data

}