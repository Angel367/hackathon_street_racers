import * as libraries_json from './coord_biblioteki.json' assert {type: 'json'};

export function get_libraries_arr() {
    let t = libraries_json
    let coords = []
    for (var i = 0; i < t.default.length; i++) {
        coords[i] = [t.default[i][1], t.default[i][0]]
    }
    console.log(coords)
    return coords
}
get_libraries_arr()