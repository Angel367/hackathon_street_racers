import * as libraries_json from './coord_biblioteki.json' assert {type: 'json'};

export function get_libraries_arr() {
    let t = libraries_json
    let data = []
    data['type'] = 'FeatureCollection'
    data['features'] = []

    for (var i = 0; i < t.default.length; i++) {
        //console.log(t.default[i].lat)
        //console.log()
    }
    return data
}