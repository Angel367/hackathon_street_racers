import * as houses_json from './apartment_final.json' assert {type: 'json'};

export function get_houses_data() {
    let t = houses_json
    let data = {}
    data['type'] = 'FeatureCollection'
    data['features'] = []

    for (var i = 0; i < t.default.length; i++) {
        //console.log(t.default[i].lat)
        data.features[i] = {
            id: 'id'+i.toString(),
            type: 'Feature',
            geometry: {
                type: 'Point',
                coordinates: [t.default[i].lat, t.default[i].lon]
            },
            properties: {
                weight: t.default[i].population | 0     // | 0 для "обрезки" дробной части
            }
        }
    }
    return data
}